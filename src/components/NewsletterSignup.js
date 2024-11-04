import React, { useState } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await addToMailchimp(email);
      setStatus(result.result);
      setMessage(result.msg);
    } catch (error) {
      setStatus('error');
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="my-12 p-6 bg-red-50 dark:bg-gray-800 rounded-lg">
      <h3 className="text-2xl font-bold mb-4 text-red-700 dark:text-red-400">
        Get More Budgeting Tips
      </h3>
      <p className="mb-4 text-gray-600 dark:text-gray-300">
        Subscribe to receive exclusive money-saving strategies and financial insights.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-red-500 focus:border-transparent"
          required
        />
        <button
          type="submit"
          className="w-full bg-red-600 text-white py-3 px-6 rounded hover:bg-red-700 transition-colors"
        >
          Subscribe
        </button>
        {status && (
          <p className={`text-sm ${status === 'success' ? 'text-green-600' : 'text-red-600'}`}>
            {message}
          </p>
        )}
      </form>
    </div>
  );
};

export default NewsletterSignup;