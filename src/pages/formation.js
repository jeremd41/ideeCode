import React, { Component } from "react"
import SEO from "../components/seo"
import Layouti from "../components/layouti"

class Formation extends Component {
    render() {
        return (
            <Layouti bgnav="formation" btnnav="btn-blue" bgfooter1="formation1" bgfooter2="formation2">
            <SEO title="Formation" />
            <div>
              <h1>Hello les nuls !</h1>
            </div>
            <input type="text" placeholder="entre moi j'aime ça" />
          </Layouti>
        )
    }
}

export default Formation