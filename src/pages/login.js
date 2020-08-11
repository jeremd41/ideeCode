import React, {useState} from "react"
import addToMailchimp from 'gatsby-plugin-mailchimp'

import Layouti from "../components/layouti"
import email from "../images/email2.png"

const Login =  () => {
    const [inputEmail, setEmail] = useState("");
    const [sendEmail, setSend] = useState(false);

    const handleChange = (e) => {
        setEmail(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addToMailchimp(inputEmail)
        setEmail("")
        setSend(true)
    }
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
                                <form onSubmit={handleSubmit}>
                                    <input onChange={handleChange} value={inputEmail}  type="email" className="input-email" id="ipt-email" placeholder="E-mail"/>
                                    <button type="submit" className="submit-email">Envoyer</button>
                                </form>
                                <p className="input-result">{sendEmail ?"Merci ! A bientôt dans votre boite mail":""}</p>
                            </div>
                        </div>
                    </div>
                </section>
                </div>
            </Layouti>
        )
}

export default Login