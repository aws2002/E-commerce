import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordFill } from "react-icons/ri";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Layout from "../../components/Layouts/Layout";
import { useForm } from "react-hook-form";
import { getError } from "../../utils/error";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import axios from "axios";
export default function Register() {
  const { data: session } = useSession();

  const router = useRouter();
  const { redirect } = router.query;

  useEffect(() => {
    if (session?.user) {
      router.push(redirect || "/");
    }
  }, [router, session, redirect]);

  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm();
  const submitHandler = async ({ name, email, password }) => {
    try {
      await axios.post("/api/auth/signup", {
        name,
        email,
        password,
      });

      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });
      if (result.error) {
        toast.error(result.error);
      }
    } catch (err) {
      toast.error(getError(err));
    }
  };
  return (
    <>
      <Head>
        <title>Register</title>
        <meta name="keywords" content="osama" />
      </Head>
      <section className="sign-in">
        <div className=" grid grid-cols-12">
          <div className=" md:col-span-5 col-span-full md:px-32 px-12 md:py-10">
            {/* <span className=" text-6xl">👋</span> */}
            <h2 className="md:mt-3 mt-0 text-4xl font-bold text-opacity-80 mb-4 text-black">
              Login.
            </h2>
            <p className=" text-color_1 font-medium text-xl">
              Login with your data that you entered during registration
            </p>
            <form onSubmit={handleSubmit(submitHandler)}>
              <div>
                <label
                  htmlFor="name"
                  className="block font-medium text-color_1 mt-5 mb-1 text-md"
                >
                  User name *
                </label>

                <div className="relative">
                  <HiOutlineMail className=" absolute top-3 left-3 text-2xl text-color_1" />
                  <input
                    placeholder="Name"
                    type="text"
                    {...register("name", {
                      required: "Please enter name",
                    })}
                    className="font-medium w-full bg-color_22 pl-11 py-3 focus:ring-2 rounded-lg border-2 focus:outline-none focus:border-indigo-500 focus:ring-indigo-500"
                    id="name"
                    autoFocus
                  ></input>
                  {errors.name && (
                    <div className="text-red-500 ">
                    {errors.name.message}
                  </div>
                  )}
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block font-medium text-color_1 mt-5 mb-1 text-md"
                >
                  Email address *
                </label>

                <div className="relative">
                  <HiOutlineMail className=" absolute top-3 left-3 text-2xl text-color_1" />
                  <input
                    placeholder="E-mail"
                    type="email"
                    {...register("email", {
                      required: "Please enter email",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                        message: "Please enter valid email",
                      },
                    })}
                    className="font-medium w-full bg-color_22 pl-11 py-3 focus:ring-2 rounded-lg border-2 focus:outline-none focus:border-indigo-500 focus:ring-indigo-500"
                    id="email"
                    autoFocus
                  ></input>
                  {errors.email && (
                    <div className="text-red-500 ">
                    {errors.email.message}
                  </div>
                  )}
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block font-medium text-color_1 mt-5 mb-1 text-md"
                >
                  Password *
                </label>

                <div className="relative">
                  <RiLockPasswordFill className=" absolute top-3 left-3 text-2xl text-color_1" />
                  <input
                    placeholder="*******"
                    type="password"
                    {...register("password", {
                      required: "Please enter password",
                      minLength: {
                        value: 6,
                        message: "password is more than 5 chars",
                      },
                    })}
                    className="font-medium w-full bg-color_22 pl-11 py-3 focus:ring-2 rounded-lg border-2 focus:outline-none focus:border-indigo-500 focus:ring-indigo-500"
                    id="password"
                  ></input>
                  {errors.password && (
                    <div className="text-red-500 ">
                    {errors.password.message}
                  </div>
                  )}
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block font-medium text-color_1 mt-5 mb-1 text-md"
                >
                  Confirm Password *
                </label>

                <div className="relative">
                  <HiOutlineMail className=" absolute top-3 left-3 text-2xl text-color_1" />
                  <input
                    placeholder="*******"
                    type="password"
                    {...register("confirmPassword", {
                      required: "Please enter confirm password",
                      validate: (value) => value === getValues("password"),
                      minLength: {
                        value: 6,
                        message: "confirm password is more than 5 chars",
                      },
                    })}
                    className="font-medium w-full bg-color_22 pl-11 py-3 focus:ring-2 rounded-lg border-2 focus:outline-none focus:border-indigo-500 focus:ring-indigo-500"
                    id="confirmPassword"
                  ></input>
                  {errors.confirmPassword && (
                    <div className="text-red-500 ">
                    {errors.confirmPassword.message}
                  </div>
                  )}
                  {errors.confirmPassword &&
                    errors.confirmPassword.type === "validate" && (
                      <div className="text-red-500 ">Password do not match</div>
                    )}
                </div>
              </div>
              
              <button className=" block bg-main font-medium w-full mt-8 py-3 rounded-lg">
                Sign up now
              </button>
              <div className=" grid grid-cols-12 mt-3 gap-x-4">
                <div className="col-span-5">
                  <div className=" bg-color_1 border bg-opacity-50 rounded-lg mt-3"></div>
                </div>
                <div className="col-span-2 text-center">
                  <span className=" text-lg text-color_1">or</span>
                </div>
                <div className="col-span-5">
                  <div className=" bg-color_1 border bg-opacity-50 rounded-lg mt-3"></div>
                </div>
                <div className="col-span-12 text-center mt-3 md:mb-0 mb-5">
                  <p className=" font-medium text-color_1">
                  Have an account ? {" "}
                    <Link href={`/register?redirect=${redirect || "/"}`}>
                      <a className=" text-color_5">Login</a>
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
          <div className="md:col-span-7 col-span-12 h-full text-center py-4 flex justify-center items-center">
            <Image
              src="/assets/imglogin.svg"
              width={1000}
              height={500}
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
}

Register.Layout = Layout;
