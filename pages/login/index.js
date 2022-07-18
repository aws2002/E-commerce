import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordFill } from "react-icons/ri";
import Link from "next/link";
import React from "react";
import Head from "next/head";
import FormInput from "../../components/Tools/FormInput";
import Image from 'next/image'
export default function SignIn() {
  const [values, setValues] = React.useState({
    email: "",
    password: "",
  });
  const inputs = [
    {
      id: 1,
      titel: "Email address *",
      type: "email",
      name: "email",
      placeholder: "E-mail",
      icon: (
        <HiOutlineMail className=" absolute top-3 left-3 text-2xl text-color_1" />
      ),
      errorMessage: "Email must be a valid address, e.g. test@gmail.com",
      pattern: "^([a-zd.-]+)@([a-zd-]+).([a-z]{2,8})(.[a-z]{2,8})?$",
      required: true,
    },
    {
      id: 2,
      titel: "Password *",
      type: "password",
      name: "password",
      placeholder: "**********",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      icon: (
        <RiLockPasswordFill className=" absolute top-3 left-3 text-2xl text-color_1" />
      ),
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <>
      <Head>
        <title>Sign In</title>
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
            <form action="" onSubmit={handleSubmit}>
              {inputs.map((input) => (
                <FormInput
                  key={input.id}
                  {...input}
                  value={values[input.name]}
                  onChange={onChange}
                />
              ))}
            </form>
            <div className=" grid grid-cols-2 mt-3">
              <div className="col-span-1">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 inline text-color_1"
                >
                  Remember me
                </label>
              </div>
              <div className="col-span-1 ml-auto">
                <Link href="/forgot-password">
                  <a className="text-color_1">Forgot password?</a>
                </Link>
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
                  Don have an account?{" "}
                  <Link href="/sign-up">
                    <a className=" text-color_5">Signup here</a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="md:col-span-7 col-span-12 h-full text-center py-4 flex justify-center items-center">
            <Image src="/assets/imglogin.svg"  width={1000} height={500} alt=""/>
          </div>
        </div>
      </section>
    </>
  );
}
