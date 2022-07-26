import Layout from "../components/Layouts/Layout";
import Head from "next/head";
import FeaturedCategories from "../components/SectionPage/FeaturedCategories";
import HeroSections from "../components/SectionPage/HeroSections";
import FeaturedProducts from "../components/SectionPage/FeaturedProducts";
import Product from "../models/Product";
import db from "../utils/db";
import ProductItem from "../components/SectionPage/ProductItem";
import { Store } from "../contexts/Store";
import { useContext } from "react";
import axios from 'axios';
import { toast } from 'react-toastify';
export default function Home({ products }) {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;

  const addToCartHandler = async (product) => {
    const existItem = cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);

    if (data.countInStock < quantity) {
      return toast.error('Sorry. Product is out of stock');
    }
    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } });

    toast.success('Product added to the cart');
  };
  return (
    <>
      <Head>
        <title>Home page</title>
        <meta name="keywords" content="osama" />
      </Head>
      <HeroSections />
      <FeaturedCategories products={products} />
      <FeaturedProducts products={products} />
      <div className=" container my-10">
      <h2 className=" font-medium text-3xl uppercase">TOP RATE PRODUCTS</h2>
        <div className="line mt-3"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 border-2 border-main rounded-xl overflow-hidden lg:grid-cols-3 container">
        {products.map((product) => (
          <ProductItem
            product={product}
            key={product.slug}
            addToCartHandler={addToCartHandler}
          />
        ))}
      </div>
      <br />
      <br />
    </>
  );
}
Home.Layout = Layout;

export async function getServerSideProps() {
  await db.connect();
  const products = await Product.find().lean();
  return {
    props: {
      products: products.map(db.convertDocToObj),
    },
  };
}
