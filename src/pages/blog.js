import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const Blog = ({ data }) => {
  const posts = data.allMdx.nodes;

  return (
    <div>
      <h1>Welcome to my blog!</h1>
      <div>
        {posts.map(post => {
          const image = getImage(post.frontmatter.image);
          return (
            <div key={post.frontmatter.title}>
              <h2>{post.frontmatter.title}</h2>
              {image && <GatsbyImage image={image} alt={post.frontmatter.title} />}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const query = graphql`
  query {
    allMdx {
      nodes {
        frontmatter {
          title
          image {
            childImageSharp {
              gatsbyImageData(width: 600, placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`;

export default Blog;
