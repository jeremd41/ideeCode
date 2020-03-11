import React, { Component } from 'react'

import PostSquare from '../components/postsquare'

import exImgPost from '../images/post.png'

class BlogContainer extends Component {
    render () {
        return (
            <section>
                <PostSquare imgpostsquare={exImgPost} altpostsquare="Exemple d'image de Post (avec vidéo)" />
            </section>
        )
    }
}

export default BlogContainer