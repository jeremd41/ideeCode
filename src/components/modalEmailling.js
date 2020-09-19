import React, {useState} from "react"
import addToMailchimp from 'gatsby-plugin-mailchimp'

import Code from "../images/bullhorn-solid.svg"

const ModalEmailling = ({cache}) =>{
    const [email, setEmail]=useState("")
    const [sendEmail, setSend] = useState(false);

    const handleChange = (e) =>{
        setEmail(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addToMailchimp(email)
        setEmail("")
        setSend(true)
    }

    return(
        <div className="modal-emailling">
            <div className="modal-emailling-content">
                <button className="btnFermer" onClick={cache}>X</button>
                <div className="top-modal-emailling">
                    <div className="img-modal-emailling">
                        <img src={Code} alt="logo-code"/>
                    </div>
                    <div className="right-modal-emailling">
                        <h1>PAS SI VITE...</h1>
                        <p>Recevez mes secrets et astuces de développement qui vous aideront à gagner un temps précieux... </p>
                        <form onSubmit={handleSubmit}>
                            <label>Email*<input onChange={handleChange} value={email}/></label>
                            <p className="input-result">{sendEmail ?"Merci ! A bientôt dans votre boite mail":""}</p>
                            <button type="submit">Envoyer</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalEmailling