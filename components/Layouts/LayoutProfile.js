import Navbar from "../Navbar/Navbar";
import ScrollToTop from "../Tools/ScrollToTop";
import Link from "next/link";
import React from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { VscSettingsGear } from "react-icons/vsc";
import { FaSignOutAlt } from "react-icons/fa";

import {
  BsCardChecklist,
  BsBasket,
  BsCreditCard2Front,
  BsCartCheck,
  BsTrash,
} from "react-icons/bs";

export default function LayoutProfile({ children }) {
  const [active, setActive] = React.useState(1);
  return (
    <>
      <Navbar />
      <section className="my-5 px-4 flex items-center h-[80vh]">
        <div className=" container">
          <div className=" grid grid-cols-12 gap-8">
            <div className=" md:col-span-3 col-span-full bg-slate-200 p-6 rounded-lg">
              <div className="py-2 px-5 mb-4">
                  <div className=" grid grid-cols-2 gap-x-5">
                    <div className=" col-span-1 bg-main h-24 rounded-full w-24">

                    </div>
                    <div className=" col-span-1 flex items-center justify-end">
                        <h3 className=" font-semibold text-lg">Amy Mayer</h3>
                    </div>
                  </div>
              </div>
              <ul>
                {[
                  {
                    id: 1,
                    name: "Profile",
                    href: "/",
                    icon: <MdOutlineDashboard className=" inline text-lg" />,
                  },
                  {
                    id: 2,
                    name: "Notifcations",
                    href: "notifcations",
                    icon: <HiOutlinePencilAlt className=" inline text-lg" />,
                  },
                  {
                    id: 3,
                    name: "Settings",
                    href: "settings",
                    icon: <VscSettingsGear className=" inline text-lg" />,
                  },
                  {
                    id: 4,
                    name: "Wishlist",
                    href: "wishlist",
                    icon: <BsTrash className=" inline text-lg" />,
                  },
                ].map((item) => (
                  <div key={item.id}>
                    <Link href={`/profile/${item.href}`}>
                    <li
                      onClick={() => setActive(`${item.id}`)}
                      className={
                        active == item.id
                          ? `block w-full font-semibold mb-1 rounded-md hover:bg-white hover:text-black transition-all cursor-pointer py-2 px-5 bg-white text-black`
                          : `block w-full font-semibold mb-1 rounded-md hover:bg-white hover:text-black transition-all cursor-pointer py-2 px-5`
                      }
                    >
                     {item.icon}{" "}{item.name}
                    </li>
                  </Link>
                  </div>
                ))}
                <Link href={`/sign-in`}>
                  <li className="block w-full font-semibold mb-1 rounded-md hover:bg-white hover:text-black transition-all cursor-pointer py-2 px-5">
                    <FaSignOutAlt className=" inline text-lg" /> Sign Out
                  </li>
                </Link>
              </ul>
            </div>
            <div className=" col-span-9 bg-slate-200 p-6 rounded-lg">{children}</div>
          </div>
        </div>
      </section>
      <ScrollToTop />
    </>
  );
}
