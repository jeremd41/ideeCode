import React, { Component } from 'react'

import Client1 from "../../images/client1.png"
import Client2 from "../../images/client2.png"
import Client3 from "../../images/client3.png"
import Client4 from "../../images/client4.svg"
import Client5 from "../../images/client5.png"

class Client extends Component {
    render() {
        return (
            <section className="client-container">

                <h2>Nos clients et partenaires </h2>

                <div className="client">
                    <img src={Client1} alt="logo-client"/>
                    <img src={Client2} alt="logo-client"/>
                    <img src={Client3} alt="logo-client"/>
                    <img src={Client4} alt="logo-client"/>
                    <img src={Client5} alt="logo-client"/>
                </div>

            </section>
        )
    }
}

export default Client 