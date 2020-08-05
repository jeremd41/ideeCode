import React, { Component } from 'react'
import SEO from "../components/seo"
import Layouti from '../components/layouti'
import HeroImgTitle from "../components/heroImgtitle"
import ContentContact from "../components/cpn-contact/contentcontact"


import contactHero from "../images/contact-img.jpg"

class Contact extends Component {
    render () {
        return (
            <Layouti bgnav="accueil" btnnav="btn-grey" bgfooter1="accueil1" bgfooter2="accueil2">
                <SEO title="Contact" />
                <ContentContact/>
            </Layouti>
        )
    }
}

export default Contact 