'use client'
import React from 'react';

const SignUpForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign-up logic here
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-3xl font-semibold mb-4">Sign Up</h2>
      <form onSubmit={handleSubmit} className="max-w-xs w-full">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring focus:ring-green-200"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring focus:ring-green-200"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring focus:ring-green-200"
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 text-white bg-green-500 rounded-lg hover:bg-green-600 transition-colors"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
