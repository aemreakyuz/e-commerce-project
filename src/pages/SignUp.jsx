import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Header from "../layout/Header";
import NavBar from "../layout/NavBar";
import axiosInstance from "../api/axios";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    watch,

    formState: { errors, isValid },
  } = useForm({ mode: "onBlur" });

  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState({});

  const onSubmit = (data) => {
    setIsLoading(true);

    if (data.role === "customer" || data.role === "admin") {
      axiosInstance
        .post("/signup", data)
        .then((res) => {
          console.log("Server response:", res.data);
          setUserData({
            name: res.name,
            email: res.email,
            password: res.password,
            role_id: res.role === "admin" || "customer",
          });
          setIsLoading(false);
        })
        .catch((err) => {
          console.log("Error:", err.message);
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
    console.log({ userData });
  };

  const roles = ["Admin", "Store"];

  return (
    <>
      <Header />
      <NavBar />
      <div className="flex bg-[#23856D] h-full w-full py-16 ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-2 mx-auto "
        >
          <div>
            <label
              htmlFor="name"
              className="ml-3 text-sm font-bold text-gray-700 "
            >
              Full Name
            </label>
            <input
              id="name"
              className=" bg-white w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl "
              type="text"
              placeholder="Enter your full name"
              {...register("name", {
                required: { value: true, message: "Full name is required" },
                minLength: {
                  value: 3,
                  message: "You must enter at least 3 characters",
                },
              })}
            />
            {errors["name"] && (
              <p role="alert" className="ml-3 text-md  text-red-600 pt-2 ">
                {errors["name"]?.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="email"
              className="ml-3 text-sm font-bold text-gray-700 "
            >
              Email
            </label>
            <input
              autoComplete="true"
              id="email"
              className=" bg-white w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl "
              type="email"
              placeholder="Enter your mail"
              {...register("email", {
                required: { value: true, message: "Email is required" },
                pattern: {
                  value:
                    /^(([^<>()[\]\.,;:\s@"]+(\.[^<>()[\]\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Invalid email",
                },
              })}
            />
            {errors["email"] && (
              <p role="alert" className="ml-3 text-sm  text-red-600 pt-2 ">
                {errors["email"]?.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="password"
              className="ml-3 text-sm font-bold text-gray-700 "
            >
              Password
            </label>
            <input
              id="password"
              className="bg-white w-full content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none "
              type="password"
              placeholder="Enter your password"
              {...register("password", {
                required: { value: true, message: "Password is required" },
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long.",
                },

                pattern: {
                  value:
                    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\-]).+$/,
                  message:
                    "Password must contain at least one number, one lower case letter, one upper case letter and a special character.",
                },
              })}
            />
            {errors["password"] && (
              <p role="alert" className="ml-3 text-sm  text-red-600 pt-2 ">
                {errors["password"]?.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="passwordConfirmation"
              className="ml-3 text-sm font-bold text-gray-700 "
            >
              Password Confirmation
            </label>
            <input
              id="passwordConfirmation"
              className="bg-white w-full content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none "
              type="password"
              placeholder="Enter your password"
              {...register("passwordConfirmation", {
                validate: (password) => {
                  return (
                    watch("password") === password || "Password does not match."
                  );
                },
              })}
            />

            {errors["passwordConfirmation"] && (
              <p role="alert" className="ml-3 text-sm  text-red-600 pt-2 ">
                {errors["passwordConfirmation"]?.message}
              </p>
            )}
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="role"
              className="ml-3 text-sm font-bold text-gray-700 "
            >
              Role
            </label>
            <select
              id="role_id"
              value={watch("role") || "customer"}
              {...register("role")}
              className="bg-white w-1/2 content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none "
            >
              <option
                key={3}
                value={"customer"}
                defaultValue={"customer"}
                className="bg-white"
              >
                Customer
              </option>
              {roles.map(
                (role) =>
                  role !== "customer" && (
                    <option key={role.id} className="bg-white">
                      {role.charAt(0).toUpperCase() + role.slice(1)}
                    </option>
                  )
              )}
            </select>
            {watch("role")?.toLowerCase() === "store" && (
              <div className="flex flex-col gap-2 pt-2">
                <div className="">
                  <label
                    htmlFor="storeName"
                    className=" ml-3 text-sm font-bold text-gray-700 "
                  >
                    Store Name
                  </label>
                  <input
                    id="storeName"
                    className=" bg-white w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl "
                    type="text"
                    placeholder="Enter your store name"
                    {...register("storeName", {
                      required: {
                        value: true,
                        message: "Store name is required",
                      },
                      minLength: {
                        value: 3,
                        message:
                          "Store Name should be at least 3 characters long",
                      },
                      maxLength: {
                        value: 35,
                        message:
                          "Store Name cannot be longer than 30 characters.",
                      },
                    })}
                  />
                  {errors["storeName"] && (
                    <p
                      role="alert"
                      className="ml-3 text-sm  text-red-600 pt-2 "
                    >
                      {errors["storeName"]?.message}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="storePhone"
                    className="ml-3 text-sm font-bold text-gray-700 "
                  >
                    Store Phone
                  </label>
                  <input
                    id="storePhone"
                    className="bg-white w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl  "
                    type="tel"
                    placeholder="Enter your store phone | +90XXXXXXXXXX"
                    {...register("storePhone", {
                      required: {
                        value: true,
                        message: "Store phone is required",
                      },
                      pattern: {
                        value:
                          /^((\+|00)90|0)?\s?5\d{2}\s?\d{3}\s?\d{2}\s?\d{2}$/,
                        message: "Invalid phone number",
                      },
                    })}
                  />
                  {errors["storePhone"] && (
                    <p
                      role="alert"
                      className="ml-3 text-sm  text-red-600 pt-2 "
                    >
                      {errors["storePhone"]?.message}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="storeTaxNumber"
                    className="ml-3 text-sm font-bold text-gray-700 "
                  >
                    Store Tax Number
                  </label>
                  <input
                    id="storeTaxNumber"
                    className="bg-white w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl "
                    type="text"
                    placeholder="Enter your store tax number | TXXXXVXXXXXX"
                    {...register("storeTaxNumber", {
                      required: {
                        value: true,
                        message: "Store tax number is required",
                      },
                      pattern: {
                        value: /^T\d{4}V\d{6}$/,
                        message: "Invalid tax number",
                      },
                    })}
                  />
                  {errors["storeTaxNumber"] && (
                    <p
                      role="alert"
                      className="ml-3 text-sm  text-red-600 pt-2 "
                    >
                      {errors["storeTaxNumber"]?.message}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="storeIBAN"
                    className="ml-3 text-sm font-bold text-gray-700 "
                  >
                    Store IBAN:
                  </label>
                  <input
                    id="storeIBAN"
                    className="bg-white w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl "
                    type="text"
                    placeholder="Enter your store IBAN | TRXXXXXXXXXXXXXXXXXXXXXXXX"
                    {...register("storeIBAN", {
                      required: {
                        value: true,
                        message: "Store IBAN is required",
                      },
                      pattern: {
                        value:
                          /^TR\d{2}\s?(\d{4}\s?){1}(\d{1})(\d{3}\s?)(\d{4}\s?){3}(\d{2})\s?$/,
                        message: "Invalid IBAN",
                      },
                    })}
                  />
                  {errors["storeIBAN"] && (
                    <p
                      role="alert"
                      className="ml-3 text-sm  text-red-600 pt-2 "
                    >
                      {errors["storeIBAN"]?.message}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
          <button
            type="submit"
            disabled={!isValid}
            className="w-full flex justify-center text-2xl bg-gradient-to-r disabled:opacity-50 from-green-500 to-green-600  hover:bg-gradient-to-l hover:from-green-500 hover:to-green-600 text-gray-100 p-3  rounded-full  font-semibold  shadow-lg cursor-pointer transition ease-in duration-300"
          >
            Sign up
          </button>
        </form>
      </div>
    </>
  );
}
