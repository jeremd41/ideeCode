import React, { Component } from 'react'
import SolutionsItems from '../cpn-index/solutionsitems'

import siteVitrineIcon from '../../images/site-vitrine-icon.png'
import eCommerceIcon from '../../images/e-commerce-pme-icon.png'
import marketPlaceIcon from '../../images/marketplace-icon.png'
import saasIcon from '../../images/saas-icon.png'

class SolutionsContainer extends Component {
    render () {
        return (
            <section className="solutions-component">
                <h2>Plusieurs solutions selon votre projet</h2>
                <div className="solutions-container">
                    <SolutionsItems 
                        iconSolutionsItems={siteVitrineIcon} 
                        iconAltSolutionsItems="Icône Site Vitrine" 
                        titleSolutionsItems="Site Vitrine" 
                        pSolutionsItems="Nous avons les compétences pour développer des site vitrine et blog avec des solutions d’hébergements gratuit !" 
                        linkSolutionsItems="/solutions/"/>
                    <SolutionsItems 
                        iconSolutionsItems={eCommerceIcon} 
                        iconAltSolutionsItems="Icône E-Commerce PME" 
                        titleSolutionsItems="E-Commerce PME" 
                        pSolutionsItems="Développer votre boutique physique grâce à un e-commerce qui fera grimper votre chiffre d’affaire !" 
                        linkSolutionsItems="/solutions/"/>
                    <SolutionsItems 
                        iconSolutionsItems={marketPlaceIcon} 
                        iconAltSolutionsItems="Icône Market Place" 
                        titleSolutionsItems="Marketplace" 
                        pSolutionsItems="Lancer votre marketplace et faite rencontrer l’offre et la demande sur une plateforme dédiée !" 
                        linkSolutionsItems="/solutions/"/>
                    <SolutionsItems 
                        iconSolutionsItems={saasIcon} 
                        iconAltSolutionsItems="Icône SAAS" 
                        titleSolutionsItems="Saas" 
                        pSolutionsItems="Développement de SAAS avec les dernières technologies web !" 
                        linkSolutionsItems="/solutions/"/>
                </div>
            </section>
        )
    }
}

export default SolutionsContainer