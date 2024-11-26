import React from "react";
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
import { motion } from 'framer-motion';

const BlogPage = ({ data }) => {
  const posts = data.allMdx.nodes || [];

  // Motion animation container for staggered children
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Motion animation for each post
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <Layout>
      <Seo title="Blog" description="Read our latest articles" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Latest Articles</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Discover insights and strategies to improve your financial well-being
          </p>
        </motion.div>

        {/* Post grid container */}
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {posts.map((post) => {
            const featuredImage = post.frontmatter.image ? getImage(post.frontmatter.image) : null;

            return (
              <motion.article key={post.id} variants={item} className="card group">
                <Link to={post.fields.slug} className="block h-full">
                  <div className="aspect-w-16 aspect-h-9 rounded-t-xl overflow-hidden">
                    {featuredImage ? (
                      <GatsbyImage 
                        image={featuredImage} 
                        alt={post.frontmatter.title} 
                        className="w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                        imgStyle={{ objectFit: 'cover' }}
                      />
                    ) : (
                      <StaticImage
                        src="../../src/images/golfFun.webp"
                        alt="Default blog image"
                        className="w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                        imgStyle={{ objectFit: 'cover' }}
                      />
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <time className="text-sm font-medium gradient-text">
                        {post.frontmatter.date}
                      </time>
                      <span className="mx-2 text-slate-400">•</span>
                      <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                        {post.frontmatter.author}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold mb-3 text-slate-900 dark:text-slate-100 line-clamp-2 group-hover:gradient-text transition-all">
                      {post.frontmatter.title}
                    </h2>
                    <p className="text-slate-600 dark:text-slate-300 line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gradient-text font-medium group-hover:translate-x-2 transition-transform duration-300">
                      Read more
                      <svg className="w-5 h-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path 
                          fillRule="evenodd" 
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" 
                          clipRule="evenodd" 
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
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

export default BlogPage;
