import Slider from "react-slick";
import React from "react";
import { FaStarHalfAlt, FaStar, FaRegStar } from "react-icons/fa";
import Bookmark from "../Tools/Bookmark";
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
          dots: true,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const DataFeaturedProducts = [
    {
      id: 1,
      img: "/assets/laptop.png",
      titel: "LAPTOP",
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
    },
    {
      id: 2,
      img: "/assets/iphone11-removebg-preview.png",
      titel: "COMPUTER COMPONENTS",
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
    },
    {
      id: 3,
      img: "/assets/laptop.png",
      titel: "DEVICES",
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
    },
    {
      id: 4,
      img: "/assets/laptop.png",
      titel: "ACCESSORIES",
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
    },
    {
      id: 5,
      img: "/assets/laptop.png",
      titel: "ACCESSORIES",
      prise: "$799.99",
      star: (
        <i className="text-center block text-main">
          <FaStar className=" inline text-xl" />
          <FaStar className=" inline text-xl" />
          <FaStar className=" inline text-xl" />
          <FaStar className=" inline text-xl" />
        </i>
      ),
      isFavorite: false,
    },
  ];
  const [Favorite, setFavorite] = React.useState(DataFeaturedProducts);
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
              {DataFeaturedProducts.map((item) => (
                <div className="my-10 px-2" key={item.id}>
                  <div className="bg-white rounded-lg pb-8 px-4">
                    <div className=" flex justify-center items-center  ">
                      <img className=" w-1/2" src={item.img} alt="" />
                    </div>
                    <div className=" text-center">
                      <h4 className=" text-color_1 text-2xl">{item.titel}</h4>
                      {item.star}
                      <span className=" mt-2 block text-xl font-bold">
                        {item.prise}
                      </span>
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
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
