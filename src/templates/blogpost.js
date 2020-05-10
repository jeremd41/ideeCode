import React, { Component } from 'react'
import { Link, graphql} from "gatsby"
import SEO from "../components/seo"
import Img from "gatsby-image"
import Layouti from "../components/layouti"
import PostSquare from "../components/postsquare"



const BlogPost = ({ data }) => {
    console.log(data)
    const details = data.contentfulBlogPost;
    return (
        <Layouti bgnav="article" btnnav="btn-grey" bgfooter1="article1" bgfooter2="formation1">
        <SEO title={details.title} description={details.excerpt.excerpt} />
        <section className="post">
            <div className="postflex">
                <article>
                    <div className="categories-container">
                        {details.tags.map(item =>{
                            return(
                                <Link to="/blog/" className="categories exemple1">{item}</Link>
                            )
                        })}
                    </div>
                    <h2 className="title-post">{details.title}</h2>
                    <p className="excerpt-post">{details.excerpt.excerpt}</p>
                    <p className="author-post">{details.datePublication} par <strong>Jérémy DIARD</strong></p>
                    <Img className="image-post" fluid={details.featuredImage.fluid} alt="test" />
                    <p className="body-blogpost" dangerouslySetInnerHTML={{__html:details.body.childMarkdownRemark.html}} />
                </article>
                <div className="sidebar-post">
                </div>
            </div>
            
            <div className="same-categories">
                <h2>Dans la même catégorie</h2>
                <div className="container">
                    {data.allContentfulBlogPost.edges.map(item =>{
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
            </div>
        </section>
    </Layouti>
    );
  };
  
  export default BlogPost;
  
  export const pageQuery = graphql`
    query ($slug: String!) {
        contentfulBlogPost(slug: { eq: $slug }) {
        datePublication(fromNow: true, locale: "fr")
        slug
        title
        excerpt {
            excerpt
        }
        body {
            childMarkdownRemark {
                html
            }
        }
        featuredImage {
            fluid(maxWidth: 1200){
                ...GatsbyContentfulFluid
            }
        }
        tags
        }
        allContentfulBlogPost(limit: 2) {
            edges {
              node {
                slug
                id
                title
                tags
                featuredImage {
                    fluid(maxWidth: 1200){
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
  `;