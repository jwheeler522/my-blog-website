<<<<<<< HEAD
import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const OptimizedImage = ({ image, alt, className }) => {
  const imageData = getImage(image);
  
  if (!imageData) {
    return null;
  }

  return (
    <figure className={className}>
      <GatsbyImage
        image={imageData}
        alt={alt}
        className="rounded-lg"
      />
      {alt && (
        <figcaption className="text-sm text-center text-gray-600 dark:text-gray-400 mt-2">
          {alt}
        </figcaption>
      )}
    </figure>
  );
};

=======
import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const OptimizedImage = ({ image, alt, className }) => {
  const imageData = getImage(image);
  
  if (!imageData) {
    return null;
  }

  return (
    <figure className={className}>
      <GatsbyImage
        image={imageData}
        alt={alt}
        className="rounded-lg"
      />
      {alt && (
        <figcaption className="text-sm text-center text-gray-600 dark:text-gray-400 mt-2">
          {alt}
        </figcaption>
      )}
    </figure>
  );
};

>>>>>>> 1b1e9e5396a10c00e925cce370ac6724f53e72c3
export default OptimizedImage;