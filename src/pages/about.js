<<<<<<< HEAD
import React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';

const AboutPage = () => {
  return (
    <Layout>
      <Seo title="About" description="Learn more about our blog and its author" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text text-center">About Me</h1>
        <div className="prose lg:prose-xl dark:prose-invert mx-auto">
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-4">
            Hello! I’m Jeff, a passionate developer and creative thinker based in Rancho Cucamonga, California. With a background in dental technology, I've always been fascinated by the intersection of technology and everyday life. My journey into web development began as a side project, and I quickly discovered my love for coding and design. I thrive on building things from the ground up, whether it’s a dynamic blog template or a custom solution for small businesses.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-4">
            In my free time, I enjoy exploring new technologies and honing my skills in frameworks like Gatsby and React. I’m particularly interested in creating user-friendly, responsive designs that not only look great but also deliver an excellent user experience. My recent projects include developing a blog that focuses on DIY repair tips and building custom chatbots to help small businesses streamline their operations. I believe in the power of technology to make life easier and more enjoyable.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            When I’m not coding, you can find me enjoying the outdoors, spending time with my family, or diving into a good sci-fi novel. I’m always eager to connect with fellow developers, share ideas, and learn from others in the community. Whether you’re looking for collaboration opportunities or just want to chat about tech, feel free to reach out!
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            This blog is built with Gatsby and features modern web technologies.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
=======
import React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/Seo'

const AboutPage = () => {
  return (
    <Layout>
      <Seo title="About" description="Learn more about our blog and its author" />
      <h1 className="text-4xl font-bold mb-4">About Me</h1>
      <div className="prose lg:prose-xl">
        <p className="text-lg text-gray-600 mb-4">
          Welcome to my blog! I'm a passionate writer and developer sharing my thoughts and experiences.
        </p>
        <p className="text-lg text-gray-600">
          This blog is built with Gatsby and features modern web technologies.
        </p>
      </div>
    </Layout>
  )
}

export default AboutPage
>>>>>>> 1b1e9e5396a10c00e925cce370ac6724f53e72c3
