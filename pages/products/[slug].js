import React from "react";
import { useRouter } from "next/router";
import data from "../../components/Data";
import Layout from "../../components/Layouts/Layout";
import Image from "next/image";
import { FaBookmark } from "react-icons/fa";
import FeaturedProducts from "../../components/SectionPage/FeaturedProducts";
import Counter from "../../components/Tools/counter";
export default function ProductScreen() {
  const router = useRouter();
  const { slug } = router.query;
  const prodeuct = data.products.find((item) => item.slug === slug);
  if (!prodeuct) {
    return <div>Product Not Found ....</div>;
  }
  
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
                  {prodeuct.name}
                </a>
              </span>
            </span>
          </div>
          <div className=" grid grid-cols-12 gap-5">
            <div className=" col-span-4">
              <Image src={prodeuct.image} alt={""} width={500} height={500} />
            </div>
            <div className=" col-span-8 p-4">
              <div className=" grid grid-cols-2">
                <div className=" col-span-1">
                  <h2 className=" text-2xl">
                    Sony PlayStation 4 Pro White Version
                  </h2>
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
                      <button className=" w-full text-slate-600 font-semibold">
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
                <div className=" col-span-2 mt-20">
                  <p className="">{prodeuct.description}</p>
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
