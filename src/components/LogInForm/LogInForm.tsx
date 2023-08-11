'use client'
import React from 'react';

const LogInForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle Log-in logic here
    console.log('Success');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-3xl font-semibold mb-4">Log In</h2>
      <form onSubmit={handleSubmit} className="max-w-xs w-full">
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default LogInForm;