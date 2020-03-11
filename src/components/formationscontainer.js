import React, { Component } from 'react'

import { Link } from "gatsby"

class FormationContainer extends Component {
    render () {
        return (
            <section className="formation-container">
                <div className="container">
                    <div className="first">
                        <h2>Les formations</h2>
                        <p>Votre budget est limité mais vos croyez profondément à votre projet ? Des guides pas à pas pour réaliser et mettre en marche votre projet.</p>
                    </div>
                    <div className="second">
                        <Link to="/formations/">Accéder aux formations</Link>
                    </div>
                </div>
            </section>
        )
    }
}

export default FormationContainer