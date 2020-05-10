import React from 'react'
import { Link, graphql, useStaticQuery } from "gatsby"

import PostSquare from '../postsquare'

import exImgPost from '../../images/post.png'

export default () => {
    const data = useStaticQuery(graphql`
      query acceuilBlogPost {
        allContentfulBlogPost(limit: 4) {
          edges {
            node {
              slug
              id
              title
              tags
              featuredImage {
                fluid(maxWidth: 1200, maxHeight: 500){
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
    console.log(blogPost)
    return (
        <section className="blog-accueil">
        <h2>Le blog'</h2>
        <div className="blog-container">
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
            <Link to="/blog/" className ="suite-btn">Voir tout les articles</Link>
        </div>
    </section>
    )
  }