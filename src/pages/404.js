import React, { Component } from "react"

import SEO from "../components/seo"

class NotFoundPage extends Component {
  render () {
    return (
        <section className="not-found">
          <SEO title="Erreur 404 : Page Introuvable" />
          <h2>404</h2>
          <p>Même nous, on sait pas comment vous avez fait pour arriver ici !</p>
        </section>
    )
  }
}

export default NotFoundPage
