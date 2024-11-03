# My Blog Website

## Description
A Gatsby-based blog website featuring personal finance and budgeting tips.

## Installation

### Prerequisites
- [Node.js](https://nodejs.org/) (Ensure you have Node.js installed)
- [Gatsby CLI](https://www.gatsbyjs.com/docs/reference/gatsby-cli/) (Install using `npm install -g gatsby-cli`)

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/jwheeler522/my-blog-website.git
   ```
2. Navigate to the project directory:
   ```bash
   cd my-blog-website
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage
To start the development server, run:
gatsby develop

## Project Structure
- **`package.json`**: Contains the list of dependencies and scripts.
  ```json:my-blog-website/package.json
  startLine: 1
  endLine: 59
  ```

- **Content**: Markdown and MDX files for blog posts.
  - Example post: `your-first-post.md`
    ```markdown:my-blog-website/content/posts/your-first-post.md
    startLine: 1
    endLine: 13
    ```

- **Configuration**: Gatsby configuration files.
  - `gatsby-config.js`
    ```javascript:my-blog-website/gatsby-config.js
    startLine: 1
    endLine: 94
    ```
  - `gatsby-node.js`
    ```javascript:my-blog-website/gatsby-node.js
    startLine: 1
    endLine: 90
    ```

- **Pages**: React components for different pages.
  - `index.js`
    ```javascript:my-blog-website/src/pages/index.js
    startLine: 1
    endLine: 91
    ```
  - `blog.js`
    ```javascript:my-blog-website/src/pages/blog.js
    startLine: 8
    endLine: 137
    ```

- **Styles**: Tailwind CSS configuration and global styles.
  - `global.css`
    ```css:my-blog-website/src/styles/global.css
    startLine: 1
    endLine: 87
    ```

## Contributing


## License
