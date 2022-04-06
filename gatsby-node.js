const { create } = require('domain');
const path = require('path'); 

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  
  return graphql(`
  {
    allWpPost {
      nodes {
        slug
        title
        content
      }
    }
    allWpPage {
      nodes {
        title
        uri
        content
      }
    }
  }  
  `)
  .then(result => {
    
    result.data.allWpPost.nodes.forEach(( node ) => {
      createPage({
          path: `blog/${node.slug}`,
          component: path.resolve('./src/templates/Post.js'),
          context: {
            slug: node.slug,
            title: node.title,
            content: node.content
          }
        })
      });
      result.data.allWpPage.nodes.forEach(( node ) => {  
        createPage({
          path: `/pages${node.uri}`,
          component: path.resolve('./src/templates/Page.js'),
          context: {
            title: node.title,
            content: node.content
          }
        });
      })
  })
  .finally(() => {
    createPage({
      path: "/using-dsg",
      component: require.resolve("./src/templates/using-dsg.js"),
      context: {},
      defer: true,
    })
  })
}