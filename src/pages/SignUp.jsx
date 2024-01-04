import React from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
    isValid,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  const roles = ["Admin", "Store"];

  return (
    <div className="flex bg-red-400 h-full w-full ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col  gap-4  w-1/2 mx-auto"
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
            className=" bg-white w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
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
            <p role="alert" className="ml-3 text-sm font-bold text-red-600 ">
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
            className=" bg-white w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
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
            <p role="alert" className="ml-3 text-sm font-bold text-red-600 ">
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
            className="bg-white w-full content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-indigo-500"
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
            <p role="alert" className="ml-3 text-sm font-bold text-red-600 ">
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
            className="bg-white w-full content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-indigo-500"
            type="password"
            placeholder="Enter your password"
            {...register("passwordConfirmation", {
              validate: (fieldValue) => {
                return "Password does not match";
              },
            })}
          />
          {errors["passwordConfirmation"] && (
            <p role="alert" className="ml-3 text-sm font-bold text-red-600 ">
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
            id="role"
            value={watch("role") || "customer"}
            {...register("role")}
            className="bg-white w-1/2 content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-indigo-500"
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
            <>
              <div>
                <label
                  htmlFor="storeName"
                  className=" ml-3 text-sm font-bold text-gray-700 "
                >
                  Store Name
                </label>
                <input
                  id="storeName"
                  className=" bg-white w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
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
                    className="ml-3 text-sm font-bold text-red-600 "
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
                  className="bg-white w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500 "
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
                    className="ml-3 text-sm font-bold text-red-600 "
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
                  className="bg-white w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
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
                    className="ml-3 text-sm font-bold text-red-600 "
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
                  className="bg-white w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
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
                    className="ml-3 text-sm font-bold text-red-600 "
                  >
                    {errors["storeIBAN"]?.message}
                  </p>
                )}
              </div>
            </>
          )}
        </div>
        <button
          type="submit"
          disabled={!isValid}
          className="w-full flex justify-center text-2xl bg-gradient-to-r disabled:opacity-50 from-indigo-500 to-blue-600  hover:bg-gradient-to-l hover:from-blue-500 hover:to-indigo-600 text-gray-100 p-3  rounded-full  font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
        >
          Sign up
        </button>
      </form>
    </div>
  );
}

export default SignUp;
