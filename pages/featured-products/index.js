import React from "react";
import Image from "next/image";
import Layout from "../../components/Layouts/Layout";
import { FaStarHalfAlt, FaStar, FaRegStar } from "react-icons/fa";
export default function FeaturedProducts() {
  const dataRecentlyViewed = [
    {
      id: 1,
      img: "/assets/canon.png",
      name: "Canon Eos 80D DSLR Camera",
      prise: "$799.99",
      star: (
        <i className="text-center block text-main">
          <FaStar className=" inline text-xl" />
          <FaStar className=" inline text-xl" />
          <FaStar className=" inline text-xl" />
          <FaStar className=" inline text-xl" />
        </i>
      ),
      styleBox: "",
    },
  ];
  return (
    <section className="featured-products my-14">
      <div className=" container">
        <h2 className=" text-center font-bold uppercase text-3xl text-color_1">
          Featured Products
        </h2>
        <div className="line-2 mt-3"></div>
        <div className=" grid grid-cols-3 gap-5 my-8">
          {dataRecentlyViewed.map(
            ({ id, name, prise, img, star, styleBox }) => (
              <>
                <div
                  className={`col-span-1 flex justify-center items-center py-4 bg-white`}
                  key={id}
                >
                  <div>
                    <div className=" flex justify-center items-center ">
                      <Image src={img} width={300} height={270} alt="" />
                    </div>
                    <h3 className=" text-center text-2xl font-semibold mb-2">
                      {name}
                    </h3>
                    {star}
                    <p className=" text-center text-3xl font-bold">{prise}</p>
                    <div className=" grid-cols-12 grid mt-3 gap-x-2">
                      <div className="col-span-2 bg-slate-100 rounded">
                        <button className="w-full">s</button>
                      </div>
                      <div className=" col-span-10 bg-slate-100 text-center py-2 rounded">
                        <button className=" w-full text-slate-600 font-semibold">Add to cart</button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )
          )}
        </div>
      </div>
    </section>
  );
}

FeaturedProducts.Layout = Layout;
