import React, { Component } from 'react'

import FormationImg from '../../images/solutions-img1.png'

class ContentSolutions extends Component {
    render () {
        return (
            <section className="content-solutions">
                <div className="container">
                    <div className="content">
                        <h3>Stratégies / Conseils / Formation</h3>
                        <p>La transformation digital dans toutes les entreprises n’est plus à prouver. La vraie problématique réside ailleurs... La solution universel n’existe pas, chaque secteur, chaque entreprise fait face à ses propres difficultés et contraintes du quotidien. Notre défi si vous l’acceptez, balayer vos pertes de temps et vous aidez à mieux servir vos clients chaque jours.</p>
                    </div>
                </div>
                <div className="container">
                    <div className="content">
                        <h3>Développement / Déploiement</h3>
                        <p>Nous sommes spécialisés en développement web et mobile. SaaS, Api REST, E-commerce, Marketplace,gestion de contenu serverless, site vitrine... Formé aux dernières méthodes et technologies du marché, nous mettons tout en œuvres pour allier performances et efficacités!</p>
                    </div>
                </div>
                <div className="container">
                    <div className="content">
                        <h3>Maintenance / Hébergement</h3>
                        <p>Avoir une application fonctionnelle et performante c'est bien mais la maintenir au top de sa forme c'est mieux. Les technologies évolues vite même très vite ! Nous veillons quotidiennement à l'évolution de celle-ci afin d'optimiser aux maximum nous applications présentes et future. Alors qui sont les mieux placé pour maintenir votre application ?</p>
                    </div>
                </div>
            </section>
        )
    }
}

export default ContentSolutions