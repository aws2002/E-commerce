import React from "react";
import Layout from "../../components/Layouts/Layout";
import Link from "next/link";

import { IoCloseSharp } from 'react-icons/io5';
export default function Cart() {
  return (
    <section className="Cart my-10">
      <div className="container">
        <div className=" titel">
          <span className=" text-xl text-slate-400 font-semibold">
            Bake /{" "}
            <span>
              <a href="" className=" text-color_1 hover:text-color_1">
                Shopping Cart
              </a>
            </span>
          </span>
        </div>
        <div className=" grid grid-cols-12 gap-4 my-8">
          <div className=" col-span-9 bg-slate-200 p-5 rounded-lg">
            <div className=" grid grid-cols-12">
              <div className=" col-span-full">
                <div className=" grid grid-cols-12 gap-4">
                <div className=" col-span-12 flex justify-end">
                    <IoCloseSharp className=" text-2xl"/>
                  </div>
                  <div className=" col-span-3">
                    <img src="./assets/APPLE AIRPODS.png" alt="" />
                  </div>
                  <div className=" col-span-4 mt-3">
                    <p className=" text-2xl font-bold">
                      Apple iPhone 11 Pro 256GB Memory
                    </p>
                  </div>
                  <div className=" col-span-3">asd</div>
                  <div className=" col-span-2 flex justify-center items-center">
                    <span className=" text-2xl font-bold">$499.99</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" col-span-3 bg-slate-200 rounded-lg h-56">
            <div className=" p-5">
              <h4 className=" font-bold text-3xl">Subtotal (3) items</h4>
              <p className=" font-bold text-2xl">$989.97</p>
            </div>
            <hr className=" bg-slate-500 h-[2px] opacity-25" />
            <div className=" p-5 text-center">
              <a
                href=""
                className=" bg-main px-8 py-3 font-semibold text-lg rounded-md text-black hover:text-black "
              >
                Proceed to checkout
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
Cart.Layout = Layout;
