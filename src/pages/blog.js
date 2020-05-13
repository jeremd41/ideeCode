import React, { Component } from 'react'
import SEO from "../components/seo"
import Layouti from '../components/layouti'
import CategorieSelector from "../components/cpn-blog/categorieselector"
import TopArticle from "../components/cpn-blog/toparticle"
import LastArticle from "../components/cpn-blog/lastarticle"


class Blog extends Component {
    render () {
        return (
            <Layouti bgnav="article" btnnav="btn-grey" bgfooter1="article1" bgfooter2="article2">
                <SEO title="Blog" />
                <CategorieSelector/>
                <TopArticle/>
                <LastArticle/>
            </Layouti>
        )
    }
}

export default Blog

