import React from "react";
import Slider from "react-slick";
import Image from "next/image";
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
    appendDots: (dots) => <ul> {dots} </ul>,
    customPaging: () => (
      <div className=" bg-slate-400 rounded-full w-3 h-3 btn-dots"></div>
    ),
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
  const dataHeroSections = [
    {
      id: "1",
      name: "PlayStation 5",
      img: "/assets/PS5.webp",
      saveUp: "Save up to $39.99",
      text: "Lightning-fast download speed with super-fast SSD storage",
    },
    {
      id: "2",
      name: "APPLE AIRPODS",
      img: "/assets/APPLE AIRPODS.png",
      saveUp: "Save up to $49.99",
      text: "AirPods are the best-selling headphones in the world",
    },
  ];
  return (
    <section className="HeroSections mb-10 bg-slate-200">
      <div className=" container py-10">
        <div className=" grid grid-cols-1 gap-10">
          <Slider {...settings}>
            {dataHeroSections.map(({id,img,name,text,saveUp}) => (
              <div key={id}>
                <div className="col-span-1">
                  <div className=" grid grid-cols-12">
                    <div className=" col-span-6 flex items-center">
                      <div>
                        <p className=" text-color_1 text-3xl m-0">
                          {saveUp}
                        </p>
                        <h1 className=" text-color_1 text-6xl uppercase">
                          {name}
                        </h1>
                        <p className=" text-color_1 text-3xl">
                          {text}
                        </p>
                        <a
                          href=""
                          className=" bg-main px-4 py-3 text-2xl text-color_1 rounded-2xl"
                        >
                          Shop now
                        </a>
                      </div>
                    </div>
                    <div className="col-span-6 w-full">
                      <Image src={img} width={1000} height={1000} className=" w-full" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
