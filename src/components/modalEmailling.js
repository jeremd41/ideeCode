import React, {useState} from "react"
import Code from "../images/bullhorn-solid.svg"

const ModalEmailling = ({cache}) =>{
    const [email, setEmail]=useState("")

    const handleChange = (e) =>{
        setEmail(e.target.value)
    }

    return(
        <div className="modal-emailling">
            <div className="modal-emailling-content">
                <div className="top-modal-emailling">
                    <div className="img-modal-emailling">
                        <img src={Code} alt="logo-code"/>
                    </div>
                    <div>
                        <h1>PAS SI VITE...</h1>
                        <p>Recevez mes secrets et astuces de développement qui vous aideront à gagner un temps précieux... </p>
                    </div>
                </div>
                <form>
                    <input onChange={handleChange} value={email}/>
                </form>
            </div>
        </div>
    )
}

export default ModalEmailling