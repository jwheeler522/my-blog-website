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
