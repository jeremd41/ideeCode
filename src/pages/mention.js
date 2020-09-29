import React, { Component } from "react"
import SEO from "../components/seo"
import Layouti from "../components/layouti"

import "../components/scss/reset.css"
import "../components/scss/style.scss"


class index extends Component {
  render() {
    return (
        <Layouti bgnav="accueil" btnnav="btn-grey" bgfooter1="accueil1" bgfooter2="formation2">
          <SEO title="Mentions légales" />
          <div className="mention">
            <h1>Mentions légales</h1>
            <p>En vigueur au 29/09/20</p>
            <p>Conformément aux dispositions des Articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004 pour la Confiance dans l’économie numérique, dite L.C.E.N., il est porté à la connaissance des Utilisateurs du site ideecode.fr les présentes mentions légales.
            La connexion et la navigation sur le site (indiquer le nom du site) par l’Utilisateur implique acceptation intégrale et sans réserve des présentes mentions légales.
            Ces dernières sont accessibles sur le site à la rubrique « Mentions légales ».</p>
            <h3>ARTICLE 1 : L’éditeur</h3>
            <p>L’édition et la direction de la publication du site ideecode.fr est assurée par Jérémy DIARD, domiciliée 18 rue de goumat, dont le numéro de téléphone est 06 60 72 63 86, et l'adresse e-mail jeremy.ideecode@gmail.com.</p>
            <h3>ARTICLE 2 : L’hébergeur</h3>
            <p>L'hébergeur du site ideecode.fr est la Société Netlify, dont le siège social est situé au San Francisco, Californie États-Unis </p>
            <h3>ARTICLE 3 : Accès au site</h3>
            <p>Le site est accessible par tout endroit, 7j/7, 24h/24 sauf cas de force majeure, interruption programmée ou non et pouvant découlant d’une nécessité de maintenance.
            En cas de modification, interruption ou suspension des services le site ideecode.fr ne saurait être tenu responsable.</p>
            <h3>ARTICLE 4 : Collecte des données</h3>
            <p>Le site est exempté de déclaration à la Commission Nationale Informatique et Libertés (CNIL) dans la mesure où il ne collecte aucune donnée concernant les utilisateurs.</p>
            <h3>ARTICLE 5 : Cookies</h3>
            <p>L’Utilisateur est informé que lors de ses visites sur le site, un cookie peut s’installer automatiquement sur son logiciel de navigation.
            En naviguant sur le site, il les accepte.
            Un cookie est un élément qui ne permet pas d’identifier l’Utilisateur mais sert à enregistrer des informations relatives à la navigation de celui-ci sur le site Internet. L’Utilisateur pourra désactiver ce cookie par l’intermédiaire des paramètres figurant au sein de son logiciel de navigation.</p>
            <h3>ARTICLE 6 : Propriété intellectuelle</h3>
            <p>Toute utilisation, reproduction, diffusion, commercialisation, modification de toute ou partie du site ideecode.fr,  sans autorisation de l’Editeur est prohibée et pourra entraînée des actions et poursuites judiciaires telles que notamment prévues par le Code de la propriété intellectuelle et le Code civil.</p>
          </div>
        </Layouti>
    )
  }
}

export default index