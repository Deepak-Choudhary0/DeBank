'use client'

import React from 'react';

const PasswordResetForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle password reset logic here
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-3xl font-semibold mb-4">Password Reset</h2>
      <form onSubmit={handleSubmit} className="max-w-xs w-full">
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring focus:ring-red-200"
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 text-white bg-red-500 rounded-lg hover:bg-red-600 transition-colors"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default PasswordResetForm;
