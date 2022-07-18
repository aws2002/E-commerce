import React from "react";
import Slider from "react-slick";
export default function HeroSections() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
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
  return (
    <section className="HeroSections my-10 bg-slate-200">
      <div className=" container">
        <div className=" grid grid-cols-1">
          <Slider {...settings}>
            <div className="col-span-1">
              <div className=" grid grid-cols-12">
                <div className=" col-span-6">asdf</div>
                <div className=" col-span-6">asdf</div>
              </div>
            </div>
            <div className="col-span-1">asdasd</div>
          </Slider>
        </div>
      </div>
    </section>
  );
}
