import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="w-full bg-gray-100 min-h-screen">
      <header className="flex h-20 w-full items-center px-4 md:px-6 bg-blue-500 text-white">
        <div className="w-[150px]">
          <a href="#">
            <span className="sr-only">Home Shop</span>
          </a>
        </div>
        <div className="flex w-full justify-center">
          <nav className="hidden lg:flex">
            <ul className="flex space-x-4">
              <li>
                <Link to="/">Home</Link>
              </li>
              
            </ul>
          </nav>
        </div>
        <div className="ml-auto w-[150px]">
          {/* Add your admin-specific login button or component here */}
          <button className="text-blue-500 bg-white px-4 py-2 rounded border border-blue-500">
            Login
          </button>
        </div>
      </header>

      <main className="container mx-auto my-8 p-8 bg-white rounded shadow-lg max-w-md">
        <h1 className="text-2xl font-bold mb-4">Admin Login</h1>
        <form className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-600">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              placeholder="Enter your username"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
        </form>
      </main>
    </div>
  );
};

export default Login;
