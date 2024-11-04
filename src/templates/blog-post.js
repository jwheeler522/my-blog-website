import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import ReadingProgress from '../components/ReadingProgress';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { motion } from 'framer-motion';
import OptimizedImage from '../components/OptimizedImage';
import CallToAction from '../components/CallToAction';

const BlogPostTemplate = ({ data }) => {
  const post = data.mdx;
  const featuredImage = post.frontmatter.image ? getImage(post.frontmatter.image) : null;

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  console.log('Products:', post.frontmatter.products);
  console.log('BlogPostTemplate data:', data);

  return (
    <Layout>
      <ReadingProgress />
      <Seo 
        title={post.frontmatter.title || "Default Title"} 
        description={post.excerpt || "Default description"}
      />
      <motion.article 
        initial="initial"
        animate="animate"
        variants={stagger}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <motion.div variants={fadeIn} className="mb-12">
          {featuredImage && (
            <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden mb-8">
              <GatsbyImage 
                image={featuredImage} 
                alt={post.frontmatter.title} 
                className="w-full h-full transform hover:scale-105 transition-transform duration-300"
                imgStyle={{ objectFit: 'cover' }}
              />
            </div>
          )}
          <div className="text-center">
            <motion.div 
              variants={fadeIn}
              className="flex items-center justify-center space-x-4 mb-6 text-sm text-slate-600 dark:text-slate-400"
            >
              <time className="gradient-text font-medium">{post.frontmatter.date}</time>
              <span>•</span>
              <span>{post.frontmatter.author}</span>
            </motion.div>
            <motion.h1 
              variants={fadeIn}
              className="text-5xl font-bold mb-6 gradient-text"
            >
              {post.frontmatter.title}
            </motion.h1>
          </div>
        </motion.div>

        <motion.div 
          variants={fadeIn}
          className="prose lg:prose-xl dark:prose-invert mx-auto"
          dangerouslySetInnerHTML={{ __html: post.body }}
        />
        
        {post.frontmatter.hasAffiliateLinks && post.frontmatter.products && (
          <motion.section 
            variants={fadeIn}
            className="mt-16 card p-8"
          >
            <h2 className="text-3xl font-bold mb-8 text-center gradient-text">
              Recommended Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {post.frontmatter.products.map((product, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  whileHover={{ scale: 1.02 }}
                  className="card p-6"
                >
                  {product.image && (
                    <OptimizedImage 
                      image={product.image}
                      alt={product.name}
                      className="mb-4 rounded-lg"
                    />
                  )}
                  <h3 className="text-xl font-bold mb-2 gradient-text">{product.name}</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold gradient-text">
                      ${product.price}
                    </span>
                    <a 
                      href={product.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center px-4 py-2 gradient-bg text-white rounded-lg transition-all duration-200 hover:shadow-lg"
                    >
                      Buy Now
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}
      </motion.article>
    </Layout>
  );
};

export default BlogPostTemplate;

export const query = graphql`
  query BlogPostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        author
        image {
          childImageSharp {
            gatsbyImageData(
              width: 800
              height: 450
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
        hasAffiliateLinks
        products {
          name
          price
          description
          link
          image {
            childImageSharp {
              gatsbyImageData(
                width: 800
                height: 450
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
      body
    }
  }
`;