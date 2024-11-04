<<<<<<< HEAD
import React from "react";
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
import Seo from '../components/Seo'; 
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
import { motion } from 'framer-motion';

const IndexPage = ({ data }) => {
  const posts = data.allMdx.nodes || [];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <Layout>
      <Seo title="Welcome to My Blog" />
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20"
      >
        <h1 className="text-5xl font-extrabold text-center mb-6">Welcome to My Blog</h1>
        <p className="text-2xl max-w-2xl mx-auto leading-relaxed text-center">
          Discover expert insights and practical strategies to help you make informed financial decisions 
          and achieve your money goals.
        </p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center gap-6 mt-10"
        >
          <Link 
            to="/blog" 
            className="px-10 py-4 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Start Reading
          </Link>
          <Link 
            to="/about" 
            className="px-10 py-4 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Learn More
          </Link>
        </motion.div>
      </motion.div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(
      sort: { frontmatter: { date: DESC } }
      limit: 6
    ) {
      nodes {
        id
        excerpt
        fields {
          slug
        }
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
        }
      }
    }
  }
`;

=======
import React from "react";
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
import Seo from '../components/Seo'; 
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
import { motion } from 'framer-motion';

const IndexPage = ({ data }) => {
  const posts = data.allMdx.nodes || [];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <Layout>
      <Seo title="Welcome to My Blog" />
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20"
      >
        <h1 className="text-5xl font-extrabold text-center mb-6">Welcome to My Blog</h1>
        <p className="text-2xl max-w-2xl mx-auto leading-relaxed text-center">
          Discover expert insights and practical strategies to help you make informed financial decisions 
          and achieve your money goals.
        </p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center gap-6 mt-10"
        >
          <Link 
            to="/blog" 
            className="px-10 py-4 rounded-lg bg-white text-blue-600 font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Start Reading
          </Link>
          <Link 
            to="/about" 
            className="px-10 py-4 rounded-lg bg-white text-blue-600 font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Learn More
          </Link>
        </motion.div>
      </motion.div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(
      sort: { frontmatter: { date: DESC } }
      limit: 6
    ) {
      nodes {
        id
        excerpt
        fields {
          slug
        }
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
        }
      }
    }
  }
`;

>>>>>>> 1b1e9e5396a10c00e925cce370ac6724f53e72c3
export default IndexPage;