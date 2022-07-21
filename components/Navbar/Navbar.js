import { useContext, useEffect, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useSession } from 'next-auth/react';
import { Store } from "../../contexts/Store";
import { FaUserAlt, FaShoppingCart, FaBookmark } from "react-icons/fa";
const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const { status, data: session } = useSession();
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const [cartItemsCount, setCartItemsCount] = useState(0);
  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart.cartItems]);
  return (
    <Disclosure as="nav" className=" bg-color_1">
      {({ open }) => (
        <>
          <div className=" container">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <Link href={"/"}>
                    <span className=" text-white block lg:hidden text-xl w-auto hover:text-white">
                      <span className=" text-main">Pro</span>Shop
                    </span>
                  </Link>
                  <Link href={"/"}>
                    <span className=" text-white text-3xl hidden lg:block h-8 w-auto hover:text-white">
                      <span className=" text-main">Pro</span>Shop
                    </span>
                  </Link>
                </div>
                <div className="hidden sm:block sm:ml-6 mxAuto w-1/3 pt-2">
                  <input
                    type="text"
                    className=" w-full font-medium py-1 focus:ring-2 rounded-md focus:outline-none focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Link href={"/"}>
                  <a className="bg-gray-800 mx-2 p-3 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <FaBookmark />
                  </a>
                </Link>
                {/* <Link href={"/login"}>
                  <a className="bg-gray-800 mx-2 p-3 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <FaUserAlt/>
                    </a>
                </Link> */}
                {status === "loading" ? (
                  "Loading"
                ) : session?.user ? (
                  session.user.name
                ) : (
                  <Link href="/login">
                    <a className="p-2">Login</a>
                  </Link>
                )}
                <Link href={"/cart"}>
                  <a className="bg-gray-800 mx-2 p-3 relative rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <FaShoppingCart />
                    {cartItemsCount > 0 && (
                      <span className="rounded-full bg-red-600 -top-1 -right-1 absolute w-4 h-4 text-center text-xs font-bold text-white">
                        {cartItemsCount}
                      </span>
                    )}
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
