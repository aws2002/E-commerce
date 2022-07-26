import { useContext, useEffect, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import Cookies from "js-cookie";
import { useRouter } from 'next/router';
import { Store } from "../../contexts/Store";
import { FiSearch } from "react-icons/fi";
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
  const router = useRouter();
  const { status, data: session } = useSession();
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const [cartItemsCount, setCartItemsCount] = useState(0);
  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart.cartItems]);
  const logoutClickHandler = () => {
    Cookies.remove("cart");
    dispatch({ type: "CART_RESET" });
    signOut({ callbackUrl: "/login" });
  };
  const [query, setQuery] = useState("");
  const queryChangeHandler = (e) => {
    setQuery(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    router.push(`/search?query=${query}`);
  };
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
                <div className="flex-shrink-0 flex items-center cursor-pointer">
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
                  <div className=" grid grid-cols-12">
                    <form className=" col-span-full" onSubmit={submitHandler}>
                      <div className=" grid grid-cols-12">
                        <div className=" col-span-11">
                          <input
                            onChange={queryChangeHandler}
                            name="query"
                            type="text"
                            placeholder="Search products"
                            className=" w-full px-2 font-medium py-1 rounded-tl-md rounded-bl-md focus:outline-none"
                          />
                        </div>
                        <div className=" col-span-1 bg-main flex justify-center items-center rounded-tr-md rounded-br-md">
                          <button type="submit">
                            <FiSearch className=" text-xl" />
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Link href={"/"}>
                  <a className="bg-gray-800 mx-2 p-3 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <FaBookmark />
                  </a>
                </Link>

                {status === "loading" ? (
                  "Loading"
                ) : session?.user ? (
                  <Menu as="div" className="ml-3 relative z-50">
                    <Menu.Button className="bg-gray-800 p-2 text-white flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      {session.user.name}
                    </Menu.Button>

                    <Transition
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <Link href="/profile">
                              <a
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Your Profile
                              </a>
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Settings
                            </a>
                          )}
                        </Menu.Item>
                        {session.user.isAdmin && (
                          <Menu.Item>
                            <Link href="/admin/dashboard">
                              <a
                                className={classNames(
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                {" "}
                                Admin Dashboard
                              </a>
                            </Link>
                          </Menu.Item>
                        )}
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                              href="#"
                              onClick={logoutClickHandler}
                            >
                              Logout
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
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
