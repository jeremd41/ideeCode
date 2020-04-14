import React, { Component } from "react"

import email from "../images/email.png"

class Emailing extends Component {
    render () {
        return (
            <section className="emailing">
                <div className="img-container">
                    <img src={email} alt="Illustration Email"/>
                </div>
                <div className="content"> 
                    <h2>Envie d'être un V.I.P,<span>un very important partenaire ?</span></h2>
                    <div className="input-container">
                        <label for="ipt-email">Laissez-nous votre e-mail pour être informé !</label>
                        <div className="input">
                            <form>
                                <input  type="email" className="input-email" id="ipt-email" placeholder="E-mail"/>
                                <button className="submit-email">Devenir V.I.P</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Emailing