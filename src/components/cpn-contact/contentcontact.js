import React, { Component } from 'react'

import ContactTel from "../../images/contact-tel.png"
import ContactEmail from "../../images/contact-email.png"

class ContentContact extends Component {

    state ={
        alignHeadTel:" ",
        removeBtnTel:" ",
        removeMailTel:" ",
        displayFormTel:" ",
        indexFormTel:" ",
        alignHeadMel:" ",
        removeBtnMel:" ",
        removeTelMel:" ",
        displayFormMel:" ",
        indexFormMel:" ",
    }
     handleClickTel=() =>{
        this.setState({
            alignHeadTel:" transi align",
            removeBtnTel:" transi transformmoins",
            removeMailTel:" transi transformplus",
            displayFormTel:" display",
            indexFormTel:" index",
            displayFormMel:" ",
        })
    }
    handleClickReturnTel=() =>{
        this.setState({
            alignHeadTel:" transi",
            removeBtnTel:" transi",
            removeMailTel:" transi",
            displayFormTel:" delay",
            indexFormTel:" ",
        })
    }
    handleClickMel=() =>{
        this.setState({
            alignHeadMel:" transi align2",
            removeBtnMel:" transi transformplus",
            removeTelMel:" transi transformmoins",
            displayFormMel:" display",
            indexFormMel:" index",
            displayFormTel:" ",
        })
      }
    
    handleClickReturnMel=() =>{
        this.setState({
            alignHeadMel:" transi",
            removeBtnMel:" transi",
            removeTelMel:" transi",
            displayFormMel:" delay",
            indexFormMel:" ",
        })
      }
    render () {
        return (
            <section className="content-contact">
                <div className="title">
                    <h2>Comment souhaitez-vous être contacter ?</h2>
                </div>
                <div className="container">
                    <div className={"tel" + " " + this.state.removeTelMel}>
                        <h3 className={this.state.alignHeadTel}>Par téléphone, prenez rendez-vous !</h3>
                        <div className={"container-scnd" + " " + this.state.removeBtnTel}>
                            <div className="btn-container">
                                <button className="reset" onClick={this.handleClickTel}>téléphone</button>
                            </div>
                        </div>
                    </div>
                    <div className={"line" + " " + this.state.removeBtnTel + this.state.removeBtnMel}/>
                    <div className={"mail" + " " + this.state.removeMailTel}>
                        <h3 className={this.state.alignHeadMel}>Par e-mail, contactez-nous !</h3>
                        <div className={"container-scnd" + " " + this.state.removeBtnMel}>
                            <div className="btn-container">
                                <button className="reset" onClick={this.handleClickMel}>e-mail</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"container-form" + " " +  this.state.indexFormTel + this.state.displayFormMel}>
                    <div className="first-part">
                        <button className="reset return-btn" onClick={this.handleClickReturnTel}>Retour</button>
                        <form>
                            <div>
                                <label htmlFor="ipt-name">Prénom</label>
                                <input  type="text" className="ipt ipt-name" id="ipt-name" placeholder="Prénom" required/>
                            </div>
                            <div>
                                <label htmlFor="ipt-surname">Nom</label>
                                <input  type="text" className="ipt ipt-surname" id="ipt-surname" placeholder="Nom" required/>
                            </div>
                            <div>
                                <label htmlFor="ipt-email">Adresse E-Mail</label>
                                <input  type="email" className="ipt ipt-email" id="ipt-email" placeholder="Adresse E-mail" required/>
                            </div>
                            <div>
                                <label htmlFor="ipt-numbertel">Numéro de téléphone</label>
                                <input  type="tel" className="ipt ipt-numbertel" id="ipt-numbertel" placeholder="Numéro de téléphone" required/>
                            </div>
                            <div>
                                <label htmlFor="ipt-date">Date du rendez-vous</label>
                                <input  type="date" className="ipt ipt-date" id="ipt-date" placeholder="Date du rendez-vous" required/>
                            </div>
                            <div>
                                <label htmlFor="ipt-hour">Heure du rendez-vous</label>
                                <input  type="time" className="ipt ipt-hour" id="ipt-hour" placeholder="Heure du rendez-vous" required/>
                            </div>
                            <div className="radio-container">
                                <label htmlFor="ipt-check" className="label-check">J’accepte que l’on conserve mes données pour prendre le rendez-vous.</label>
                                <input  type="radio" className="ipt ipt-check" id="ipt-check" required/>
                            </div>
                            <input type="submit" value="Envoyer" className="ipt-submit"/>
                        </form>
                    </div>
                    <div className="second-part">
                        <img src={ContactTel} alt=""/>
                    </div>
                </div>
                <div className={"container-form" + " " + this.state.displayFormTel + this.state.indexFormMel}>
                    <div className="first-part">
                        <button className="reset return-btn" onClick={this.handleClickReturnMel}>Retour</button>
                        <form>
                            <div>
                                <label htmlFor="ipt-name">Prénom</label>
                                <input  type="text" className="ipt ipt-name" id="ipt-name" placeholder="Prénom" required/>
                            </div>
                            <div>
                                <label htmlFor="ipt-surname">Nom</label>
                                <input  type="text" className="ipt ipt-surname" id="ipt-surname" placeholder="Nom" required/>
                            </div>
                            <div>
                                <label htmlFor="ipt-email">Adresse E-Mail</label>
                                <input  type="email" className="ipt ipt-email" id="ipt-email" placeholder="Adresse E-mail" required/>
                            </div>
                            <div className="radio-container">
                                <label htmlFor="ipt-check" className="label-check">J’accepte que l’on conserve mes données pour prendre contact</label>
                                <input  type="radio" className="ipt ipt-check" id="ipt-check" required/>
                            </div>
                            <div>
                                <label htmlFor="ipt-object">Objet</label>
                                <input  type="text" className="ipt ipt-object" id="ipt-object" placeholder="Objet" required/>
                            </div>
                            <div>
                                <label htmlFor="ipt-msg">Message</label>
                                <textarea id="ipt-msg" placeholder="Message" required/>
                            </div>
                            <input type="submit" value="Envoyer" className="ipt-submit"/>
                        </form>
                    </div>
                    <div className="second-part">
                        <img src={ContactEmail} alt=""/>
                    </div>
                </div>
            </section>
        )
    }
}

export default ContentContact