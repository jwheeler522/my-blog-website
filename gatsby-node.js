const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  // Only run on MDX nodes
  if (node.internal.type === "Mdx") {
    // Automatically generate slugs based on the file path
    const slug = createFilePath({
      node,
      getNode,
      basePath: "posts",
    });

    // Clean the slug and remove the file extension (e.g. ".md")
    const cleanSlug = slug.replace(/\.(md|markdown)$/, "");

    // Create a 'slug' field on each MDX node
    createNodeField({
      node,
      name: "slug",
      value: cleanSlug,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Fetch all MDX nodes and their slug fields
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          id
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
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
            products {
              name
              price
              description
              link
              image {
                childImageSharp {
                  gatsbyImageData(
                    width: 400
                    height: 400
                    placeholder: BLURRED
                  )
                }
              }
            }
          }
        }
      }
    }
  `);

  // Handle errors during the GraphQL query
  if (result.errors) {
    console.error(result.errors);
    throw new Error("Error fetching MDX data.");
  }

  // Create a page for each MDX node
  result.data.allMdx.nodes.forEach((node) => {
    const slug = node.fields.slug; // Get the slug from the node fields
    const componentPath = path.resolve("src/templates/blog-post.js"); // Path to your blog-post template

    createPage({
      path: slug, // URL path for the page (e.g., "/blog/my-first-post")
      component: componentPath, // Template to use for the page
      context: {
        slug: slug, // Pass the slug as context for querying data in the template
      },
    });
  });
};
