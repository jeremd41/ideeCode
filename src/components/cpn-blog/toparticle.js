import React, { Component } from 'react'

import PostSquare from '../postsquare'

import exImgPost from '../../images/post.png'

class TopArticle extends Component {
    render () {
        return (
            <section className="top-article">
                <div className="title">
                    <h2>Article à la une</h2>
                </div>
                <div className="article">
                    <PostSquare imgpostsquare={exImgPost} altpostsquare="Exemple d'image de Post (avec vidéo)" />
                    <PostSquare imgpostsquare={exImgPost} altpostsquare="Exemple d'image de Post (avec vidéo)" />
                </div>
            </section>
        )
    }
}

export default TopArticle