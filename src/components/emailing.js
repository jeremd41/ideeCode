import React, {useState} from "react"
import addToMailchimp from 'gatsby-plugin-mailchimp'

import email from "../images/email.png"

const Emailing = () => {
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
                        <form onSubmit={handleSubmit}>
                            <input onChange={handleChange} value={inputEmail} type="email" className="input-email" id="ipt-email" placeholder="E-mail"/>
                            <button type="submit" className="submit-email">Devenir V.I.P</button>
                        </form>
                        <p className="input-result">{sendEmail ?"Merci ! A bientôt dans votre boite mail":""}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Emailing