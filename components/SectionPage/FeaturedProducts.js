import Slider from "react-slick";
import React from "react";
import { FaStarHalfAlt, FaStar, FaRegStar } from "react-icons/fa";
import Bookmark from "../Tools/Bookmark";
import data from "../Data";
import Link from "next/link";
import db from "../../utils/db"
import Product from '../../models/Product';
export default function FeaturedProducts() {
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    pauseOnHover: true,
    appendDots: (dots) => <ul> {dots} </ul>,
    customPaging: () => (
      <div className=" bg-slate-400 rounded-full w-3 h-3 btn-dots"></div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [Favorite, setFavorite] = React.useState(data.products);
  function toggleFavorite() {
    setFavorite((prevContact) => {
      return {
        ...prevContact,
        isFavorite: !prevContact.isFavorite,
      };
    });
  }
  return (
    <section className="TrendingCourses my-16 py-10 px-4 bg-slate-200">
      <div className="container overflow-hidden">
        <div className=" grid grid-cols-12">
          <div className="col-span-12">
            <h2 className=" font-medium text-center text-3xl uppercase">
              Featured Products
            </h2>
            <div className="line-2 mt-3"></div>
          </div>
          <div className="col-span-12 mt-8">
            <Slider {...settings}>
              {data.products.map((item) => (
                <div className="my-10 px-2" key={item.id}>
                  <div className="bg-white rounded-lg pb-8 px-4">
                    <div className=" flex justify-center items-center  ">
                      <img className=" w-1/2" src={item.image} alt="" />
                    </div>
                    <div className=" text-center">
                      <Link href={`/products/${item.slug}`} >
                        <a className=" text-color_1 text-2xl">{item.name}</a>
                      </Link>
                      
                      {item.star}
                      <span className=" mt-2 block text-xl font-bold">
                        ${item.price}
                      </span>
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
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}


