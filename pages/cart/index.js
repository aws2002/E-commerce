import React, { useContext } from "react";
import Layout from "../../components/Layouts/Layout";
import Link from "next/link";
import EmptyCart from "../../components/SectionPage/EmptyCart";
import { Store } from "../../contexts/Store";
import { IoCloseSharp } from "react-icons/io5";
import Image from "next/image";
import dynamic from "next/dynamic";
function Cart() {
  const { state, dispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;
  const removeItemHandler = (item) => {
    dispatch({ type: "CART_REMOVE_ITEM", payload: item });
  };
  const updateCartHandler = (item, qty) => {
    const quantity = Number(qty);
    dispatch({ type: "CART_ADD_ITEM", payload: { ...item, quantity } });
  };
  return (
    <Layout>
      {cartItems.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="grid md:grid-cols-4 md:gap-5 container my-10">
          <div className="overflow-x-auto md:col-span-3">
            <table className="min-w-full ">
              <thead className="border-b">
                <tr>
                  <th className="p-5 text-left">Item</th>
                  <th className="p-5 text-right">Quantity</th>
                  <th className="p-5 text-right">Price</th>
                  <th className="p-5">Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.slug} className="border-b">
                    <td>
                      <Link href={`/product/${item.slug}`}>
                        <a className="flex items-center">
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={150}
                            height={150}
                          ></Image>
                          &nbsp;
                          <span className=" text-lg">{item.name}</span>
                        </a>
                      </Link>
                    </td>
                    <td className="p-5 text-right">
                      <select
                        value={item.quantity}
                        onChange={(e) =>
                          updateCartHandler(item, e.target.value)
                        }
                      >
                        {[...Array(item.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="p-5 text-right font-bold text-xl">
                      ${item.price}
                    </td>
                    <td className="p-5 text-center">
                      <button onClick={() => removeItemHandler(item)}>
                        <IoCloseSharp className="h-5 w-5"></IoCloseSharp>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="card p-5 bg-slate-200 rounded-lg">
            <ul>
              <li>
                <div className="pb-3 text-xl">
                  <p className=" text-2xl font-semibold">
                    Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)})
                    items
                  </p>
                  <p className=" text-3xl font-bold">
                    ${cartItems.reduce((a, c) => a + c.quantity * c.price, 0)}
                  </p>
                </div>
              </li>
              <li>
                <button
                  onClick={() => router.push("login?redirect=/shipping")}
                  className="primary-button w-full bg-main py-3 rounded-lg text-xl font-semibold"
                >
                  Check Out
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default dynamic(() => Promise.resolve(Cart), { ssr: false });

