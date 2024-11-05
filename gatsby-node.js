const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  createTypes(`
    type Mdx implements Node {
      frontmatter: MdxFrontmatter
    }

    type MdxFrontmatter {
      title: String!
      date: Date! @dateformat
      author: String
      image: File @fileByRelativePath
      hasAffiliateLinks: Boolean
      products: [Product]
    }

    type Product {
      name: String!
      price: Float!
      description: String
      link: String!
      image: File @fileByRelativePath
    }
  `);
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    const slug = createFilePath({ node, getNode, basePath: `posts` });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allMdx {
        nodes {
          id
          fields {
            slug
          }
          frontmatter {
            products {
              name
              price
              description
              link
              image {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    console.error(result.errors);
    throw result.errors;
  }

  result.data.allMdx.nodes.forEach((node) => {
    const slug = node.fields.slug;
    const componentPath = path.resolve(`src/templates/blog-post.js`);

    createPage({
      path: slug,
      component: componentPath,
      context: {
        slug: slug,
      },
    });
  });
};
