import React, { Component } from "react"
import { Link } from "gatsby"

import code from "../images/code.mp4"

class HeroVid extends Component {
    render() {
        return (
            <div>
                <video autoplay muted loop id="myVideo">
                <source src={code} type="video/mp4"/>
                </video>

                <div class="content">
                <h1>Heading</h1>
                <p>Lorem ipsum...</p>
                <button id="myBtn" onclick="myFunction()">Pause</button>
                </div>
            </div>
        )
    }
}

export default HeroVid