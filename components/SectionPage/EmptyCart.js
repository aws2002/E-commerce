import Link from "next/link";
import Layout from "../Layouts/Layout";
import { FaStarHalfAlt, FaStar, FaRegStar } from "react-icons/fa";
import Image from "next/image";
import ProductScreen from "../../components/SectionPage/ProductScreen";
export default function EmptyCart() {

  return (
    <>
      <section className="empty-cart px-5 py-5">
        <div className=" grid container grid-cols-12">
          <div className=" col-span-full bg-color_22 py-5 rounded-md mb-3">
            <ul>
              {[
                { id: 1, titel: "Back", href: "/" },
                { id: 2, titel: "Shopping Cart", href: "" },
              ].map((item) => (
                <li
                  className=" inline-block text-color_1 font-medium"
                  key={item.id}
                >
                  <Link
                    href={item.href}
                    className=" hover:text-color_5 transition-all"
                  >
                    {item.titel}
                  </Link>{" "}
                  <span className=" text-3xl">/</span>
                </li>
              ))}
              <li className=" inline-block text-color_1 font-medium text-opacity-75">
                Cart
              </li>
            </ul>
          </div>
          <div className="col-span-12  m-auto text-center">
            <h3 className=" font-bold text-4xl text-black text-opacity-80">
              Your shopping cart is empty
            </h3>
            <div className=" flex justify-center py-5">
              <Image
                width={400}
                height={400}
                src="/asset 33.svg"
                alt=""
                className=" w-3/5"
              />
            </div>
          </div>
        </div>
      </section>
      <ProductScreen titel={"Recently viewed"}/>
    </>
  );
}
EmptyCart.Layout = Layout;
