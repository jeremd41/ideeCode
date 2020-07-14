import React, { Component } from 'react'
import SEO from "../components/seo"
import Layouti from '../components/layouti'
import HeroImgTitle from "../components/heroImgtitle"
import ContentSolutions from '../components/cpn-solutions/contentsolutions'
import Client from "../components/cpn-index/client"
import Emailing from '../components/emailing'

import solutionHero from "../images/solution-img.jpg"

class Solutions extends Component {
    render () {
        return (
            <Layouti bgnav="accueil" btnnav="btn-grey" bgfooter1="accueil1" bgfooter2="formation2">
                <SEO title="Solutions" />
                <HeroImgTitle bgImg={solutionHero} title="Solutions"/>
                <div style={{marginTop: 50}}>
                    <Client />
                </div>
                <ContentSolutions/>
                <Emailing/>
            </Layouti>
        )
    }
}

export default Solutions