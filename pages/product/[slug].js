import React, { useContext } from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layouts/Layout";
import Image from "next/image";
import { FaBookmark } from "react-icons/fa";
import FeaturedProducts from "../../components/SectionPage/FeaturedProducts";
import { Store } from "../../contexts/Store";
import Product from "../../models/Product";
import db from "../../utils/db";
import axios from "axios";
export default function ProductScreen(props) {
  const { product } = props;
  const { state, dispatch } = useContext(Store);
  const router = useRouter();
  if (!product) {
    return <Layout title="Produt Not Found">Produt Not Found</Layout>;
  }

  const addToCartHandler = async () => {
    const existItem = state.cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);

    if (data.countInStock < quantity) {
      return toast.error("Sorry. Product is out of stock");
    }

    dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity } });
    router.push("/cart");
  };

  return (
    <>
      {" "}
      <section className="ProductScreen-1 my-14">
        <div className=" container">
          <div className=" titel">
            <span className=" text-xl text-slate-400 font-semibold">
              Bake /{" "}
              <span>
                <a href="" className=" text-color_1 hover:text-color_1">
                  {product.name}
                </a>
              </span>
            </span>
          </div>
          <div className=" grid grid-cols-12 gap-5">
            <div className=" col-span-4">
              <Image src={product.image} alt={""} width={500} height={500} />
            </div>
            <div className=" col-span-8 p-4">
              <div className=" grid grid-cols-2">
                <div className=" col-span-1">
                  <h2 className=" text-2xl">{product.name}</h2>
                </div>
                <div className=" col-span-1 text-right">
                  <h2 className=" text-2xl font-extrabold">$421</h2>
                </div>
                <div className=" col-span-2">
                  {/* <h2 className=" text-2xl"><Counter/></h2> */}
                </div>
                <div className=" col-span-1">
                  <h2 className=" text-2xl">Color:test</h2>
                </div>

                <div className=" col-span-1">
                  <div className=" grid-cols-12 grid mt-3 gap-x-2">
                    <div className="col-span-2 bg-slate-100 rounded flex justify-center items-center">
                      <FaBookmark />
                    </div>
                    <div className=" col-span-10 bg-slate-100 text-center py-2 rounded">
                      <button
                        className=" w-full text-slate-600 font-semibold"
                        onClick={addToCartHandler}
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
                <div className=" col-span-2 mt-20">
                  <p className="">{product.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="Technical--Details my-20">
        <div className=" container border p-8">
          <h2>Technical Details</h2>
          <div className=" grid-cols-2 grid gap-14">
            <div className=" col-span-1 bg-slate-100 px-5 py-3 rounded-md">
              <div className=" grid-cols-12 grid">
                <div className="col-span-7">
                  <p className=" text-md m-0 font-semibold text-slate-400">
                    Brand:
                  </p>
                </div>
                <div className="col-span-5">
                  <p className=" text-md m-0 font-semibold text-slate-400">
                    Apple
                  </p>
                </div>
              </div>
            </div>
            <div className=" col-span-1 bg-slate-100 px-5 py-3 rounded-md">
              <div className=" grid-cols-12 grid">
                <div className="col-span-7">
                  <p className=" text-md m-0 font-semibold text-slate-400">
                    Brand:
                  </p>
                </div>
                <div className="col-span-5">
                  <p className=" text-md m-0 font-semibold text-slate-400">
                    Apple
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="reviews my-20">
        <div className=" container border p-8">
          <div className=" grid grid-cols-1 gap-4">
            <div className=" col-span-full">
              <div className=" grid grid-cols-2 gap-4">
                <div className=" col-span-full">
                  <h3>Jenifer Medhurst</h3>
                </div>
                <div className=" col-span-1"></div>
                <div className=" col-span-1 text-right">28th March 2022</div>
                <div className=" col-span-full bg-slate-100 p-5 rounded-md">
                  <p>
                    {" "}
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Porro ut ducimus, aliquid dolor recusandae, esse cum qui
                    quia laborum vitae dignissimos amet quo fugit perspiciatis.
                    Sit doloribus necessitatibus molestiae fuga.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FeaturedProducts />
    </>
  );
}

ProductScreen.Layout = Layout;
export async function getServerSideProps(context) {
  const { params } = context;
  const { slug } = params;

  await db.connect();
  const product = await Product.findOne({ slug }).lean();
  await db.disconnect();
  return {
    props: {
      product: product ? db.convertDocToObj(product) : null,
    },
  };
}
