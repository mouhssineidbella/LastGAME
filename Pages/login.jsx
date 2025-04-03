import React from 'react';

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg p-10 h-[28rem] bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Login</h2>
        <form>
          {/* Email Input */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-lg font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-5 py-3 mt-2 border rounded-md focus:ring-2 focus:ring-orange-400 focus:outline-none"
              placeholder="Enter your email"
              required
            />
          </div>
          {/* Password Input */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-lg font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-5 py-3 mt-2 border rounded-md focus:ring-2 focus:ring-orange-400 focus:outline-none"
              placeholder="Enter your password"
              required
            />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-5 py-3 text-lg text-white bg-orange-500 rounded-md hover:bg-orange-600 focus:ring-2 focus:ring-orange-400 focus:outline-none"
          >
            Login
          </button>
        </form>
        <p className="text-center text-base text-gray-600 mt-6">
          Don't have an account?{' '}
          <a href="/signup" className="text-orange-500 hover:underline">
            Sign Up
          </a>
        </p>

      </div>
    </div>
  );
};

export default Login;
