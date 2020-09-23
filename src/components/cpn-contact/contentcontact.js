import React, { Component } from "react"

import ContactTel from "../../images/contact-tel.png"
import ContactEmail from "../../images/contact-email.png"

class ContentContact extends Component {
  state = {
    nom: "",
    prenom: "",
    email:"",
    objet: "",
    message: "",
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="content-contact">
        <h1 className="title">
          Pour une demande d’informations, une prise de contact ?
        </h1>
        <h1 className="title">Remplissez le formulaire ci-dessous. </h1>
        <div className="cadre-form">
          <div className="img-part">
            <img src={ContactEmail} alt="contact" />
          </div>
          <div className="form-part">
            <form target="_blank" action="https://formsubmit.co/webizy.france@gmail.com" method="POST">
                <div className="form-part-info">
                    <label>
                        Nom <input 
                                name="nom" 
                                type="text" 
                                placeholder="John*" 
                                value={this.state.nom}
                                onChange={this.handleChange}
                                required
                            />
                    </label>
                    <label>
                        Prenom <input 
                                    name="prenom" 
                                    type="text" 
                                    placeholder="Doe*" 
                                    value={this.state.prenom}
                                    onChange={this.handleChange} 
                                    required 
                                />
                    </label>
                    <label>
                        E-mail <input 
                                    name="email" 
                                    type="email" 
                                    placeholder="johndoe@ideecode.fr*" 
                                    value={this.state.email} 
                                    onChange={this.handleChange}
                                    required 
                                />
                    </label>
                    <label>
                        Objet  <input 
                                    name="objet" 
                                    type="text" 
                                    placeholder="Votre demande*" 
                                    value={this.state.objet}
                                    onChange={this.handleChange}
                                    required 
                                />
                    </label>
                </div>
                <label className="input-message">
                    Message <textarea 
                                name="message" 
                                width="150" height="150" 
                                placeholder="Votre message ici*" 
                                value={this.state.message} 
                                onChange={this.handleChange}
                                required 
                            />
                </label>
                <button type="submit">Envoyer</button>
                <input type="text" name="_honey" style={{display:"none"}}/>
                <input type="hidden" name="_captcha" value="false"/>
                <input type="hidden" name="_next" value="http://localhost:8000/thanks"/>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default ContentContact