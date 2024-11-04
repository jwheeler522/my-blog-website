import React from 'react';

const SocialShare = ({ url, title }) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  return (
    <div className="flex space-x-4 my-8">
      <button
        onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`, '_blank')}
        className="text-white bg-blue-400 hover:bg-blue-500 px-4 py-2 rounded-lg flex items-center"
      >
        Share on Twitter
      </button>
      <button
        onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`, '_blank')}
        className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg flex items-center"
      >
        Share on Facebook
      </button>
      <button
        onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`, '_blank')}
        className="text-white bg-blue-800 hover:bg-blue-900 px-4 py-2 rounded-lg flex items-center"
      >
        Share on LinkedIn
      </button>
    </div>
  );
};

export default SocialShare;
