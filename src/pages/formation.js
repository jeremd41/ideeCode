import React, { Component } from "react"
import SEO from "../components/seo"
import Layouti from "../components/layouti"
import HeroImgTitle from "../components/heroImgtitle"
import ContentFormation from "../components/cpn-formation/contentformation"

import formationHero from "../images/formation-img.jpg"


class Formation extends Component {
    render() {
        return (
        <Layouti bgnav="formation" btnnav="btn-blue" bgfooter1="formation1" bgfooter2="accueil2">
            <SEO title="Formation" />
            <HeroImgTitle bgImg={formationHero} style={{color: "white"}} title="Formations"/>
            <ContentFormation/>
        </Layouti>
        )
    }
}

export default Formation