import React from "react";
import Image from "next/image";
import Link from "next/link";
import data from "../Data";
export default function RecentlyViewed({ titel ,products=data.products}) {

  return (
    <section className="recently--viewed px-4 mt-20 pb-10">
      <div className=" container">
        <h2 className=" font-medium text-3xl uppercase">{titel}</h2>
        <div className="line mt-3"></div>
        <div className=" grid grid-cols-3 my-8 border-2 border-main rounded-xl">
          {products.map(({ name, image, id,slug ,price}) => (
            <div
              className={`col-span-1 flex justify-center items-center py-4 border-2`}
              key={id}
            >
              <div>
                <div className=" flex justify-center items-center ">
                  <Image src={image} width={290} height={270} alt="" />
                </div>
                <div className=" text-center">
                <Link href={`/product/${slug}`}>
                  <a className=" text-color_1 text-2xl">{name}</a>
                </Link>
                </div>
                {/* {star} */}
                <p className=" text-center text-3xl font-bold">${price}</p>

                <div className=" grid-cols-12 grid mt-3 gap-x-2">
                  <div className="col-span-2 bg-slate-100 rounded flex justify-center items-center">
                    {/* <Bookmark
                      className="w-full"
                      isFilled={Favorite.isFavorite}
                      handleClick={toggleFavorite}
                    /> */}
                  </div>
                  <div className=" col-span-10 bg-slate-100 text-center py-2 rounded">
                    <button className=" w-full text-slate-600 font-semibold">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

