import React, { Component } from 'react'

import Client1 from "../../images/client1.png"
import Client2 from "../../images/client2.svg"
import Client3 from "../../images/client3.png"
import Client4 from "../../images/client4.svg"
import Client5 from "../../images/client5.png"
import Client6 from "../../images/fireblog.png"
import Client7 from "../../images/client6.png"


class Client extends Component {
    render() {
      const slides =[
          {
            client: Client1,
            name:"Zebra",
            link:"https://www.zebra.com/fr/fr.html"
          },
          {
            client: Client2,
            name:"Pandore",
            link:"https://www.pandore.io/"
          },
          {
            client: Client3,
            name:"Salesforces",
            link:"https://www.salesforce.com/fr/"
          },
          {
            client: Client4,
            name:"Orvéa",
            link:"https://www.orvea.fr/"
          },
          {
            client: Client5,
            name:"Prestashop",
            link:"https://www.prestashop.com/fr"
          },
          {
            client: Client6,
            name:"Fireblog",
            link:"https://fireblogcms.com/"
          },
          {
            client: Client7,
            name:"Enzym",
            link:"https://enzym.io/"
          },
      ]

        return (
            <section className="client-container">
                <h2>Nos clients et partenaires </h2>
                <div className="client">
                   {slides.map((item,key)=>{
                     return(
                      <div className="client-item" key={key}>
                        <img src={item.client} alt={item.name} />
                      </div>
                     )
                   })}
                </div>
            </section>
        )
    }
}

export default Client 