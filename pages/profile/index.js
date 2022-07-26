import React from "react";
import LayoutProfile from "../../components/Layouts/LayoutProfile";

export default function Profile() {
  return <section className="profile">
    <div className=" grid grid-cols-12">
      <div className=" col-span-8">
        <h3 className=" text-2xl font-semibold">My Profile</h3>
        <div className=" grid grid-cols-12 mt-10">
          <div className=" col-span-5">
            <p className=" text-xl font-semibold text-slate-500">Name</p>
          </div>
          <div className=" col-span-7">
            <p className=" text-xl font-semibold">Osama</p>
          </div>
          <div className=" col-span-5">
            <p className=" text-xl font-semibold text-slate-500">Email</p>
          </div>
          <div className=" col-span-7">
            <p className=" text-xl font-semibold">Osama</p>
          </div>
          <div className=" col-span-5">
            <p className=" text-xl font-semibold text-slate-500">Password</p>
          </div>
          <div className=" col-span-7">
            <p className=" text-xl font-semibold">Osama</p>
          </div>
          <div className=" col-span-5">
            <p className=" text-xl font-semibold text-slate-500">Confirm password</p>
          </div>
          <div className=" col-span-7">
            <p className=" text-xl font-semibold">Osama</p>
          </div>
          
          
        </div>
      </div>
    </div>
  </section>;
}
Profile.Layout = LayoutProfile;
