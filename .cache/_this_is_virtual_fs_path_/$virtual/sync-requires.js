
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("C:\\Users\\Jeffrey.wheeler\\Desktop\\blog\\my-blog-website\\src\\pages\\404.js")),
  "component---src-pages-about-js": preferDefault(require("C:\\Users\\Jeffrey.wheeler\\Desktop\\blog\\my-blog-website\\src\\pages\\about.js")),
  "component---src-pages-blog-js": preferDefault(require("C:\\Users\\Jeffrey.wheeler\\Desktop\\blog\\my-blog-website\\src\\pages\\blog.js")),
  "component---src-pages-contact-js": preferDefault(require("C:\\Users\\Jeffrey.wheeler\\Desktop\\blog\\my-blog-website\\src\\pages\\contact.js")),
  "component---src-pages-index-js": preferDefault(require("C:\\Users\\Jeffrey.wheeler\\Desktop\\blog\\my-blog-website\\src\\pages\\index.js")),
  "component---src-templates-blog-post-js": preferDefault(require("C:\\Users\\Jeffrey.wheeler\\Desktop\\blog\\my-blog-website\\src\\templates\\blog-post.js"))
}

