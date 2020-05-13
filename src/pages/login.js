import React, {Component} from "react"

import Layouti from "../components/layouti"
import email from "../images/email2.png"

class Login extends Component{
    render(){
        return(
            <Layouti bgnav="accueil" btnnav="btn-grey" bgfooter1="accueil1" bgfooter2="formation2">
                <div style={{marginTop: 100}}>
                <section className="top-login">
                    <h2>L'espace client / formation n'est pas encore disponible !</h2>
                    <h3>Envie d'être prévenu de l'évolution de cette espace ? Des suggestions ?</h3>
                </section>
                <section className="emailing">
                    <div className="img-container">
                        <img style={{borderRadius: 7}} src={email} alt="Illustration Email"/>
                    </div>
                    <div className="content"> 
                        <div className="input-container">
                            <label for="ipt-email">Laissez-nous votre plus belle adresse mail :)</label>
                            <div className="input">
                                <form>
                                    <input  type="email" className="input-email" id="ipt-email" placeholder="E-mail"/>
                                    <button className="submit-email">Envoyer</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                </div>
            </Layouti>
        )
    }
}

export default Login