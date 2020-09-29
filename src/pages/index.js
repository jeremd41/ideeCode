import React, { Component } from "react"
import SEO from "../components/seo"
import Layouti from "../components/layouti"
import HeroVidButton from "../components/cpn-index/herovidbutton"
import SolutionsContainer from "../components/cpn-index/solutionscontainer"
import FormationsContainer from "../components/cpn-index/formationscontainer"
import Client from "../components/cpn-index/client"
import BlogContainer from "../components/cpn-index/blogcontainer"
import Emailing from "../components/emailing"

import "../components/scss/reset.css"
import "../components/scss/style.scss"


class index extends Component {
  render() {
    return (
        <Layouti bgnav="accueil" btnnav="btn-grey" bgfooter1="accueil1" bgfooter2="formation2">
          <SEO title="Accueil" />
          <HeroVidButton/>
          <SolutionsContainer/>
          <FormationsContainer/>
          <Client/>
          <BlogContainer/>
          <Emailing/>
        </Layouti>
    )
  }
}

export default index
