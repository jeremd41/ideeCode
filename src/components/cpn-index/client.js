import React, { Component } from 'react'

import Client1 from "../../images/client1.png"
import Client2 from "../../images/client2.png"
import Client3 from "../../images/client3.png"
import Client4 from "../../images/client4.svg"

class Client extends Component {
    render() {
        return (
            <section className="client-container">

                <h2>Ils m'ont fait confiance !</h2>

                <div className="client">
                    <img src={Client1}/>
                    <img src={Client2}/>
                    <img src={Client3}/>
                    <img src={Client4}/>
                </div>

            </section>
        )
    }
}

export default Client 