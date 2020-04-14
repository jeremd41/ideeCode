import React, { Component } from 'react'
import SEO from "../components/seo"
import Layouti from '../components/layouti'
import HeroVidTitle from "../components/herovidtitle"
import ContentContact from "../components/cpn-contact/contentcontact"
//import MyComponent from "../components/MyComponent"

import contactvid from "../images/contact.mp4"

class Contact extends Component {
    render () {
        return (
            <Layouti bgnav="accueil" btnnav="btn-grey" bgfooter1="accueil1" bgfooter2="accueil2">
                <SEO title="Contact" />
                <HeroVidTitle videobg={contactvid} title="Contact"/>
                <ContentContact/>
            </Layouti>
        )
    }
}

export default Contact 