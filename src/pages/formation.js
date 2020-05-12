import React, { Component } from "react"
import SEO from "../components/seo"
import Layouti from "../components/layouti"
import HeroVidTitle from "../components/herovidtitle"
import ContentFormation from "../components/cpn-formation/contentformation"

import formationvid from "../images/formation.mp4"

class Formation extends Component {
    render() {
        return (
        <Layouti bgnav="formation" btnnav="btn-blue" bgfooter1="formation1" bgfooter2="accueil2">
            <SEO title="Formation" />
            <HeroVidTitle videobg={formationvid} title="Formations"/>
            <ContentFormation/>
        </Layouti>
        )
    }
}

export default Formation