import React, { Component } from 'react'

import PostSquare from '../postsquare'

import exImgPost from '../../images/post.png'

class LastArticle extends Component {
    render () {
        return (
            <section className="last-article">
                <div className="title">
                    <h2>Les derniers articles</h2>
                </div>
                <div className="article">
                    <PostSquare imgpostsquare={exImgPost} altpostsquare="Exemple d'image de Post (avec vidéo)" />
                    <PostSquare imgpostsquare={exImgPost} altpostsquare="Exemple d'image de Post (avec vidéo)" />
                    <div className="break"></div>
                    <PostSquare imgpostsquare={exImgPost} altpostsquare="Exemple d'image de Post (avec vidéo)" />
                    <PostSquare imgpostsquare={exImgPost} altpostsquare="Exemple d'image de Post (avec vidéo)" />
                    <div className="break"></div>
                    <PostSquare imgpostsquare={exImgPost} altpostsquare="Exemple d'image de Post (avec vidéo)" />
                    <PostSquare imgpostsquare={exImgPost} altpostsquare="Exemple d'image de Post (avec vidéo)" />
                </div>
            </section>
        )
    }
}

export default LastArticle