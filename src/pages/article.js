import React, { Component } from "react"
import SEO from "../components/seo"
import Layouti from "../components/layouti"
import HeroVidTitle from "../components/herovidtitle"
import Post from "../components/cpn-article/post"


import postvid from "../images/post.mp4"

class Article extends Component {
    render() {
        return (
            <Layouti bgnav="article" btnnav="btn-grey" bgfooter1="article1" bgfooter2="article2">
                <SEO title="Article" />
                <HeroVidTitle videobg={postvid} title="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed"/>
                <Post/>
            </Layouti>
        )
    }
}

export default Article