import React, { Component } from 'react'
import SEO from "../components/seo"
import Layouti from '../components/layouti'
import HeroVidTitle from '../components/herovidtitle'
import ContentSolutions from '../components/cpn-solutions/contentsolutions'
import Client from "../components/cpn-index/client"
import Emailing from '../components/emailing'

import solutionsvid from '../images/solutions.mp4'

class Solutions extends Component {
    render () {
        return (
            <Layouti bgnav="accueil" btnnav="btn-grey" bgfooter1="accueil1" bgfooter2="accueil2">
                <SEO title="Solutions" />
                <HeroVidTitle videobg={solutionsvid} title="Solutions"/>
                <Client />
                <ContentSolutions/>
                <Emailing/>
            </Layouti>
        )
    }
}

export default Solutions