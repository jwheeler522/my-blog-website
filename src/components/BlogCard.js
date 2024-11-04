<<<<<<< HEAD
import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
import { motion } from 'framer-motion';

const BlogCard = ({ post }) => {
  const featuredImage = post.frontmatter.image ? getImage(post.frontmatter.image) : null;

  return (
    <motion.article
      whileHover={{ y: -4, scale: 1.02 }}
      className="group bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
    >
      <Link to={post.fields.slug} className="block h-full">
        <div className="aspect-w-16 aspect-h-9 rounded-t-xl overflow-hidden">
          {featuredImage ? (
            <GatsbyImage 
              image={featuredImage} 
              alt={post.frontmatter.title} 
              className="w-full h-full transform group-hover:scale-105 transition-transform duration-300"
              imgStyle={{ objectFit: 'cover' }}
              loading="lazy"
            />
          ) : (
            <StaticImage
              src="../../src/images/golfFun.webp"
              alt="Default blog image"
              className="w-full h-full transform group-hover:scale-105 transition-transform duration-300"
              imgStyle={{ objectFit: 'cover' }}
              loading="lazy"
            />
          )}
        </div>
        <div className="p-6">
          <div className="flex items-center mb-3">
            <time className="text-sm font-medium gradient-text">
              {post.frontmatter.date}
            </time>
            <span className="mx-2 text-gray-400">•</span>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {post.frontmatter.author}
            </span>
          </div>
          <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100 line-clamp-2 group-hover:gradient-text transition-all">
            {post.frontmatter.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 line-clamp-3 mb-4">
            {post.excerpt}
          </p>
          <div className="flex items-center gradient-text font-medium group-hover:translate-x-2 transition-transform duration-300">
            Read more
            <svg className="w-5 h-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

=======
import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
import { motion } from 'framer-motion';

const BlogCard = ({ post }) => {
  const featuredImage = post.frontmatter.image ? getImage(post.frontmatter.image) : null;

  return (
    <motion.article
      whileHover={{ y: -4, scale: 1.02 }}
      className="group bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
    >
      <Link to={post.fields.slug} className="block h-full">
        <div className="aspect-w-16 aspect-h-9 rounded-t-xl overflow-hidden">
          {featuredImage ? (
            <GatsbyImage 
              image={featuredImage} 
              alt={post.frontmatter.title} 
              className="w-full h-full transform group-hover:scale-105 transition-transform duration-300"
              imgStyle={{ objectFit: 'cover' }}
              loading="lazy"
            />
          ) : (
            <StaticImage
              src="../../src/images/golfFun.webp"
              alt="Default blog image"
              className="w-full h-full transform group-hover:scale-105 transition-transform duration-300"
              imgStyle={{ objectFit: 'cover' }}
              loading="lazy"
            />
          )}
        </div>
        <div className="p-6">
          <div className="flex items-center mb-3">
            <time className="text-sm font-medium gradient-text">
              {post.frontmatter.date}
            </time>
            <span className="mx-2 text-gray-400">•</span>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {post.frontmatter.author}
            </span>
          </div>
          <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100 line-clamp-2 group-hover:gradient-text transition-all">
            {post.frontmatter.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 line-clamp-3 mb-4">
            {post.excerpt}
          </p>
          <div className="flex items-center gradient-text font-medium group-hover:translate-x-2 transition-transform duration-300">
            Read more
            <svg className="w-5 h-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

>>>>>>> 1b1e9e5396a10c00e925cce370ac6724f53e72c3
export default BlogCard;