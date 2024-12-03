import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";

const IndexPage = ({ data }) => {
  const posts = data.allMdx.edges;

  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-8">Welcome to My Blog!</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map(({ node }) => (
          <div key={node.id} className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold">{node.frontmatter.title}</h2>
            {node.frontmatter.image && (
              <img
                src={node.frontmatter.image}
                alt={node.frontmatter.title}
                className="w-full h-auto rounded-lg mt-4"
              />
            )}
            <p className="mt-4">{node.excerpt}</p>
            <Link
              to={node.fields.slug}
              className="text-blue-600 hover:underline mt-4 block"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx {
      edges {
        node {
          id
          frontmatter {
            title
            image
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default IndexPage;
