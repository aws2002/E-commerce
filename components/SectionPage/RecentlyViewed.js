import React from "react";
import { FaStarHalfAlt, FaStar, FaRegStar } from "react-icons/fa";
import Image from "next/image";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import Bookmark from "../Tools/Bookmark";
export default function RecentlyViewed({ titel }) {
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
      isFavorite: true,
      styleBox: "",
    },
    {
      id: 2,
      img: "/assets/logitech.png",
      name: "Logitech G-Series Gaming Mouse",
      prise: "$49.99",
      star: (
        <i className="text-center block text-main">
          <FaStar className=" inline text-xl" />
          <FaStar className=" inline text-xl" />
          <FaStar className=" inline text-xl" />
          <FaStar className=" inline text-xl" />
        </i>
      ),
      isFavorite: true,
      styleBox: "border-r-2 border-l-2 border-r-slate-400 border-l-slate-400",
    },
    {
      id: 3,
      img: "/assets/canon.png",
      name: "Amazon Echo Dot 3rd Generation",
      prise: "$29.99",
      star: (
        <i className="text-center block text-main">
          <FaStar className=" inline text-xl" />
          <FaStar className=" inline text-xl" />
          <FaStar className=" inline text-xl" />
          <FaStar className=" inline text-xl" />
        </i>
      ),
      isFavorite: true,
      styleBox: "",
    },
  ];
  const [Favorite, setFavorite] = React.useState(dataRecentlyViewed);
  function toggleFavorite() {
    setFavorite((prevContact) => {
      return {
        ...prevContact,
        isFavorite: !prevContact.isFavorite,
      };
    });
  }
  return (
    <section className="recently--viewed px-4 my-10">
      <div className=" container">
        <h2 className=" font-medium text-3xl uppercase">{titel}</h2>
        <div className="line mt-3"></div>
        <div className=" grid grid-cols-3 my-8 border-2 border-main rounded-xl">
          {dataRecentlyViewed.map(
            ({ id, name, prise, img, star, styleBox }) => (
              <div
                className={`col-span-1 flex justify-center items-center py-4 ${styleBox}`}
                key={id}
              >
                <div>
                  <div className=" flex justify-center items-center ">
                    <Image src={img} width={290} height={270} alt="" />
                  </div>
                  <h3 className=" text-center text-2xl font-semibold mb-2">
                    {name}
                  </h3>
                  {star}
                  <p className=" text-center text-3xl font-bold">{prise}</p>

                  <div className=" grid-cols-12 grid mt-3 gap-x-2">
                    <div className="col-span-2 bg-slate-100 rounded flex justify-center items-center">
                      <Bookmark
                        className="w-full"
                        isFilled={Favorite.isFavorite}
                        handleClick={toggleFavorite}
                      />
                    </div>
                    <div className=" col-span-10 bg-slate-100 text-center py-2 rounded">
                      <button className=" w-full text-slate-600 font-semibold">
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
