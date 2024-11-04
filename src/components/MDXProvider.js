import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import InfoBox from '../components/mdx/InfoBox';
import StatsGrid from '../components/mdx/StatsGrid';

const components = {
  InfoBox,
  StatsGrid,
  h1: props => (
    <h1 {...props} className="text-4xl md:text-5xl font-bold my-8 gradient-text" />
  ),
  h2: props => (
    <h2 {...props} className="text-3xl font-semibold my-6 gradient-text" />
  ),
  p: props => (
    <p {...props} className="text-lg text-slate-700 dark:text-slate-300 my-4 leading-relaxed" />
  ),
  a: props => (
    <a {...props} className="text-blue-500 hover:text-blue-600 underline" />
  )
};

export const wrapMDX = children => (
  <MDXProvider components={components}>
    {children}
  </MDXProvider>
);