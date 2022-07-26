/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import Image from "next/image";
export default function ProductItem({ product, addToCartHandler }) {
  return (
    <div className="card border-2">
      <Link href={`/product/${product.slug}`}>
        <a className=" flex justify-center">
          <Image
            src={product.image}
            width={290}
            height={270}
            alt={product.name}
          />
        </a>
      </Link>
      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/product/${product.slug}`}>
          <a className=" text-color_1 text-2xl">{product.name}</a>
        </Link>

        <p className=" text-center text-3xl font-bold">${product.price}</p>
        <div className=" grid-cols-12 grid mt-3 gap-x-2 w-full">
          <div className="col-span-2 bg-slate-100 rounded flex justify-center items-center">
            {/* <Bookmark
                      className="w-full"
                      isFilled={Favorite.isFavorite}
                      handleClick={toggleFavorite}
                    /> */}
          </div>
          <div className=" col-span-10 bg-slate-100 text-center py-2 rounded hover:bg-main transition-all hover:text-white text-slate-600">
            <button
              className=" w-full font-semibold"
              type="button"
              onClick={() => addToCartHandler(product)}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
