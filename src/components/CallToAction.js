import React from 'react';
import { Link } from 'gatsby';

const CallToAction = ({ type = 'newsletter', product = null }) => {
  if (type === 'product' && product) {
    return (
      <div className="my-8 p-6 bg-red-50 dark:bg-gray-800 rounded-lg text-center">
        <h3 className="text-2xl font-bold mb-4">{product.name}</h3>
        <p className="mb-6">{product.description}</p>
        <a
          href={product.affiliateLink}
          className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          Check Price on Amazon
        </a>
      </div>
    );
  }

  return (
    <div className="my-8 p-6 bg-red-50 dark:bg-gray-800 rounded-lg text-center">
      <h3 className="text-2xl font-bold mb-4">Get More Money-Saving Tips</h3>
      <p className="mb-6">Join our community and receive exclusive budgeting strategies!</p>
      <Link
        to="/subscribe"
        className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors"
      >
        Subscribe Now
      </Link>
    </div>
  );
};

export default CallToAction;