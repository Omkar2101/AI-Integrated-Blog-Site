import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login as authLogin } from '../store/authSlice';
import { Button, Input } from "./index";
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";
import { useForm } from "react-hook-form";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const login = async (data) => {
    setError("");
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(authLogin(userData));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div className='flex items-center justify-center w-full min-h-screen bg-gradient-to-r from-gray-400 via-white-500 to-black-500'>
      <div className='mx-auto w-full max-w-lg bg-gray-500 rounded-xl p-10 shadow-lg border border-black/10'>
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            
          </span>
        </div>
        <h2 className="text-center text-3xl font-bold leading-tight">Sign in to your account</h2>
        <p className="mt-2 text-center text-base text-black/60">
          Don&apos;t have any account?&nbsp;
          <Link
            to="/signup"
            className="font-medium text-black transition-all duration-200 hover:underline"
          >
            Sign Up
          </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit(login)} className='mt-8'>
          <div className='space-y-5'>
            <Input
              label="Email: "
              placeholder="Enter your email"
              type="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              {...register("email", {
                required: true,
                validate: {
                  matchPattern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                }
              })}
            />
            <Input
              label="Password: "
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              {...register("password", {
                required: true,
              })}
            />
            <Button
              type="submit"
              className="w-full px-4 py-2 bg-black text-white rounded-md hover:bg-gray-600 transition duration-200"
            >
              Sign in
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
