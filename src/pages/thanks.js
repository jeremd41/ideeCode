import React, { Component } from "react"

import SEO from "../components/seo"
import Layouti from '../components/layouti'
import { Link } from "gatsby"

class Thanks extends Component {
  render () {
    return (
        <Layouti bgnav="accueil" btnnav="btn-grey" bgfooter1="accueil1" bgfooter2="accueil2">
            <section className="not-found">
                <SEO title="Message Reçu ! Merci ! :)" />
                <h2>Merci !</h2>
                <p>Nous avons bien reçu votre message. Nous répondons au plus vite ! :)</p>
                <Link to="/">Retour à l'acceuil</Link>
            </section>
        </Layouti>
        
    )
  }
}

export default Thanks