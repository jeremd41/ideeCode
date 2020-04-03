import React, { Component } from 'react'
import { Link } from "gatsby"

import Computer from "../../images/computer.png"

class ContentFormation extends Component {
    render() {
        return (
            <section className="content-formation">
                <h3>Tout les monde n’a pas les moyens De payer une équipe de développement</h3>
                <div className="container">
                    <div className="text">
                        <p>Vous avez besoin d’un site vitrine ?</p>
                        <p>Vous souhaitez une application pour gérer vos réservation et prise de RDV en ligne ?</p>
                        <p>Une landing page à votre image ?</p>
                    </div>
                    <div className="img">
                        <img src={Computer} alt=""/>
                    </div>
                </div>
                <p>Ici formez-vous et développer par vous-même vos propres besoins.</p>
                <div className="btn">
                    <Link to="//">Consulter le catalogue</Link>
                </div>
                <p>Chaque formation est accompagné d’un dossier avec tous les outils nécessaires.</p>
            </section>
        )
    }
}

export default ContentFormation