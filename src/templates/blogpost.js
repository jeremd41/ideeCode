import React, { useState } from 'react'
import { Link, graphql} from "gatsby"
import SEO from "../components/seo"
import Img from "gatsby-image"
import Layouti from "../components/layouti"
import PostSquare from "../components/postsquare"

import addToMailchimp from 'gatsby-plugin-mailchimp'


const BlogPost = ({ data }) => {
    console.log(data)
    const details = data.contentfulBlogPost;

    const [inputEmail, setEmail] = useState("");
    const [sendEmail, setSend] = useState(false);

    const handleChange = (e) => {
        setEmail(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addToMailchimp(inputEmail)
        setEmail("")
        setSend(true)
    }

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
                    <ul className="group-btn-share">
                        <li className="btn-facebook"><a target="blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A//www.codeur.com/blog/user-generated-content-ugc/"><i className="fa fa-facebook-square " aria-hidden="true"></i>Partager</a></li>
                        <li className="btn-twitter"><a target="blank" href="https://twitter.com/intent/tweet?text=https%3A//www.codeur.com/blog/user-generated-content-ugc/"><i className="fa fa-twitter-square " aria-hidden="true"></i>Twitter</a></li>
                        <li className="btn-linkedin"><a target="blank" href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A//www.codeur.com/blog/user-generated-content-ugc/&title=Test&summary=&source="><i className="fa fa-linkedin-square " aria-hidden="true"></i>Linkedin</a></li>
                    </ul>
                    <div className="body-blogpost" dangerouslySetInnerHTML={{__html:details.body.childMarkdownRemark.html}} />
                </article>
                <div className="sidebar-post">
                    <div className="content-sidebar">
                        <div className="item-content-sidebar-1">
                            <h3>Vous-en voulez plus ?</h3>
                            <p> Nous partageons des techniques, des astuces et du contenu exclusivement par mail !</p>
                            <form onSubmit={handleSubmit}>
                                <label>Votre E-mail !
                                    <input onChange={handleChange}  type="text" className="ipt ipt-name" id="ipt-name" placeholder="Votre E-mail" required/>
                                </label>
                                <button>Envoyer !</button>
                            </form>
                            <p className="input-result">{sendEmail ?"Merci ! A bientôt dans votre boite mail":""}</p>
                        </div>    <div className="item-content-sidebar-2">
                            <h3>Nos réseaux !</h3>
                            <ul className="social-icon">
                                <li><a href="https://www.linkedin.com/"><i className="fa fa-linkedin-square fa-5x" aria-hidden="true"></i></a></li>
                                <li><a href="https://www.linkedin.com/"><i className="fa fa-youtube-play fa-5x" aria-hidden="true"></i></a></li>
                                <li><a href="https://www.linkedin.com/"><i className="fa fa-facebook-square fa-5x" aria-hidden="true"></i></a></li>
                                <li><a href="https://www.linkedin.com/"><i className="fa fa-instagram fa-5x" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                    </div>
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