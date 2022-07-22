import Layout from "../components/Layouts/Layout";
import Head from "next/head";
import FeaturedCategories from "../components/SectionPage/FeaturedCategories";
import RecentlyViewed from "../components/SectionPage/RecentlyViewed";
import HeroSections from "../components/SectionPage/HeroSections";
import FeaturedProducts from "../components/SectionPage/FeaturedProducts";
import Product from "../models/Product";
import db from "../utils/db";
export default function Home({products}) {
  return (
    <>
      <Head>
        <title>Home page</title>
        <meta name="keywords" content="osama" />
      </Head>
      <HeroSections />
      <FeaturedCategories products={products}/>
      <FeaturedProducts products={products}/>
      <RecentlyViewed titel={"TOP RATE PRODUCTS"} products={products} />
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
