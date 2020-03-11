import React, { Component } from "react"
import { Link } from "gatsby"

import code from "../images/code.mp4"

class HeroVidButton extends Component {
    render() {
        return (
            <section className="hero-vid">
                <video autoPlay muted loop>
                    <source src={code} type="video/mp4"/>
                </video>

                <div className="content">
                    <h2>Faites le choix De la modernité</h2>
                    <p>Webizy vous accompagne dans la conception d’application web et mobile qui fera grandir votre entreprise..   </p>
                    <div>
                        <Link to="/contact/">Un Projet ?</Link>
                    </div>
                </div>
            </section>
        )
    }
}

export default HeroVidButton