import Slider from "react-slick";
import React from "react";
import data from "../Data";
export default function FeaturedCategories() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 4,
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

  return (
    <section className="TrendingCourses my-16 py-5 px-4">
      <div className="container overflow-hidden">
        <div className=" grid grid-cols-12">
          <div className="col-span-12">
            <h2 className=" font-medium text-3xl uppercase">Featured Categories</h2>
            <div className="line mt-3"></div>
          </div>
          <div className="col-span-12 mt-8">
            <Slider {...settings}>
              {data.products.map((item,index) => (
                <div className="my-10 px-2" key={index}>
                  <div className=" flex justify-center items-center rounded-lg bg-slate-200">
                    <img className=" w-1/2" src={item.image} alt="" />
                  </div>
                  <h2 className=" text-center mt-5 uppercase text-xl text-color_1">
                    {item.name}
                  </h2>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
