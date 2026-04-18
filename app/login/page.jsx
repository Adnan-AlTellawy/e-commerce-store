"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [currentState, setCurrentState] = useState("Login"); // Login or Sign Up
  const router = useRouter();

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    router.push("/");
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
      dir="ltr"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
        <p className="text-3xl font-black tracking-tighter">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>

      {currentState === "Login" ? null : (
        <input
          type="text"
          className="w-full px-3 py-2 border border-gray-800 rounded-lg outline-none"
          placeholder="Full Name"
          required
        />
      )}

      <input
        type="email"
        className="w-full px-3 py-2 border border-gray-800 rounded-lg outline-none"
        placeholder="Email Address"
        required
      />
      <input
        type="password"
        className="w-full px-3 py-2 border border-gray-800 rounded-lg outline-none"
        placeholder="Password"
        required
      />

      <div className="w-full flex justify-between text-sm mt-[-8px] px-1">
        <p className="cursor-pointer text-gray-400 hover:text-orange-600 transition">
          Forgot your password?
        </p>
        {currentState === "Login" ? (
          <p
            onClick={() => setCurrentState("Sign Up")}
            className="cursor-pointer font-bold text-orange-600"
          >
            Create account
          </p>
        ) : (
          <p
            onClick={() => setCurrentState("Login")}
            className="cursor-pointer font-bold text-orange-600"
          >
            Login Here
          </p>
        )}
      </div>

      <button className="bg-black text-white font-bold px-8 py-2 mt-4 rounded-lg hover:bg-orange-600 transition-all duration-300 w-full">
        {currentState === "Login" ? "Sign In" : "Sign Up"}
      </button>
    </form>
  );
};

export default LoginPage;
