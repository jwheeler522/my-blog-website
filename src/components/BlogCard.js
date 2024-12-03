import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
import { motion } from 'framer-motion';

const BlogCard = ({ product, isFeatured }) => {
  const featuredImage = product.image ? getImage(product.image) : null;

  return (
    <motion.article
      whileHover={{ y: -4, scale: 1.02 }}
      className="group bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
    >
      <Link to={product.link} className="block h-full">
        <div className="aspect-w-16 aspect-h-9 rounded-t-xl overflow-hidden">
          {featuredImage ? (
            <GatsbyImage 
              image={featuredImage} 
              alt={product.name} 
              className="w-full h-full transform group-hover:scale-105 transition-transform duration-300"
              imgStyle={{ objectFit: 'cover' }}
              loading="lazy"
            />
          ) : (
            <StaticImage
              src="../../src/images/default-image.jpg"
              alt="Default product image"
              className="w-full h-full transform group-hover:scale-105 transition-transform duration-300"
              imgStyle={{ objectFit: 'cover' }}
              loading="lazy"
            />
          )}
        </div>
        <div className="p-6">
          <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100 line-clamp-2 group-hover:gradient-text transition-all">
            {product.name}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 line-clamp-3 mb-4">
            {isFeatured ? product.description : "Check out this amazing product!"}
          </p>
          <div className="text-gray-900 dark:text-gray-100 font-medium">
            ${product.price}
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

export default BlogCard;
