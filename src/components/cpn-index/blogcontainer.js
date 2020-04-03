import React, { Component } from 'react'
import { Link } from "gatsby"

import PostSquare from '../postsquare'

import exImgPost from '../../images/post.png'

class BlogContainer extends Component {
    render () {
        return (
            <section className="blog-accueil">
                <h2>Le blog'</h2>
                <div className="blog-container">
                    <PostSquare imgpostsquare={exImgPost} altpostsquare="Exemple d'image de Post (avec vidéo)" />
                    <PostSquare imgpostsquare={exImgPost} altpostsquare="Exemple d'image de Post (avec vidéo)" />
                    <div className="break"></div>
                    <PostSquare imgpostsquare={exImgPost} altpostsquare="Exemple d'image de Post (avec vidéo)" />
                    <PostSquare imgpostsquare={exImgPost} altpostsquare="Exemple d'image de Post (avec vidéo)" />
                    <div className="break"></div>
                    <Link to="/blog/" className ="suite-btn">Voir tout les articles</Link>
                </div>
            </section>
        )
    }
}

export default BlogContainer