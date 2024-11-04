<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const Seo = ({ title = "Default Title", description = "Default description" }) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `);

  return (
    <Helmet>
      <title>{title} | {site.siteMetadata.title}</title>
      <meta name="description" content={description || site.siteMetadata.description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Helmet>
  );
};

=======
import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const Seo = ({ title = "Default Title", description = "Default description" }) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `);

  return (
    <Helmet>
      <title>{title} | {site.siteMetadata.title}</title>
      <meta name="description" content={description || site.siteMetadata.description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Helmet>
  );
};

>>>>>>> 1b1e9e5396a10c00e925cce370ac6724f53e72c3
export default Seo;