import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'

import PostSquare from '../postsquare'

export default () => {
    const data = useStaticQuery(graphql`
      query topBlogPost {
        allContentfulBlogPost(limit: 2) {
          edges {
            node {
              slug
              id
              title
              tags
              featuredImage {
                fluid(maxWidth: 1200, maxHeight: 600){
                    ...GatsbyContentfulFluid
                }
              }
              datePublication(fromNow: true, locale: "fr")
              excerpt {
                excerpt
              }
            }
          }
        }
      }
    `)
    const blogPost = data.allContentfulBlogPost.edges
    return (
      <section  className="last-article">
          <div className="title">
              <h2>Notre selection</h2>
          </div>
          <div className="article">
            {blogPost.map(item =>{
                    return(
                      <PostSquare
                      key={item.node.id}
                      slug={"/blog/"+ item.node.slug}
                      imgpostsquare={item.node.featuredImage.fluid} 
                      altpostsquare="Exemple d'image de Post (avec vidéo)"
                      title={item.node.title}
                      excerpt={item.node.excerpt.excerpt}
                      date={item.node.datePublication}
                      tags={item.node.tags} />
                    )
                })}
          </div>
      </section>
    )
  }