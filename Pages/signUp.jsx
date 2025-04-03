import React from 'react';

const Signup = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg p-10 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          {/* Full Name Input */}
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-lg font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-5 py-3 mt-2 border rounded-md focus:ring-2 focus:ring-orange-400 focus:outline-none"
              placeholder="Enter your name"
              required
              aria-label="Full Name"
            />
          </div>

          {/* Email Input */}
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-lg font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-5 py-3 mt-2 border rounded-md focus:ring-2 focus:ring-orange-400 focus:outline-none"
              placeholder="Enter your email"
              required
              aria-label="Email Address"
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-lg font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-5 py-3 mt-2 border rounded-md focus:ring-2 focus:ring-orange-400 focus:outline-none"
              placeholder="Enter your password"
              required
              aria-label="Password"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-5 py-3 text-lg text-white bg-orange-500 rounded-md hover:bg-orange-600 focus:ring-2 focus:ring-orange-400 focus:outline-none"
          >
            Sign Up
          </button>
        </form>

        {/* Redirect to Login */}
        <p className="text-center text-base text-gray-600 mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-orange-500 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
