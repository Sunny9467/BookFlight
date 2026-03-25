import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10">
      
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg flex overflow-hidden">
        
        {/* LEFT - BANNER */}
        <div className="hidden md:flex w-1/2 bg-blue-400 text-white items-center justify-center p-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Join Us</h1>
            <p>Create your account & start booking flights easily</p>
            {/* <img
              src="https://images.unsplash.com/photo-1502920917128-1aa500764cbd"
              alt="banner"
              className="mt-6 rounded-xl"
            /> */}
          </div>
        </div>

        {/* RIGHT - SIGNUP */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          
          <h2 className="text-2xl font-bold text-center mb-6">Create Account</h2>

          {/* SOCIAL SIGNUP */}
          <button className="w-full cursor-pointer flex items-center justify-center gap-2 border py-2 rounded-lg mb-3 hover:bg-blue-300 transition">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
              className="w-5 h-5"
            />
            Sign up with Google
          </button>

          <button className="w-full cursor-pointer flex items-center justify-center gap-2 border py-2 rounded-lg mb-4 hover:bg-blue-300 transition">
            <img
              src="https://cdn-icons-png.flaticon.com/512/124/124010.png"
              className="w-5 h-5"
            />
            Sign up with Facebook
          </button>

          {/* OR */}
          <div className="text-center mb-4 text-gray-500">OR</div>

          {/* NAME */}
          <input
            type="text"
            placeholder="Full Name"
            className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
          />

          {/* EMAIL */}
          <input
            type="email"
            placeholder="Enter Email"
            className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
          />

          {/* PASSWORD */}
          <input
            type="password"
            placeholder="Create Password"
            className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
          />

          {/* CONFIRM PASSWORD */}
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
          />

          {/* SIGNUP BTN */}
          <button className="w-full cursor-pointer bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-300 transition">
            Create Account
          </button>

          {/* LOGIN LINK */}
          <p className="text-center text-sm mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 cursor-pointer hover:underline">
              Login
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}