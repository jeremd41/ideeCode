import React, { Component } from "react"

class HeroVidTitle extends Component {
    render() {
        return (
            <section className="hero-vid-title">
                <video autoPlay muted loop>
                    <source src={this.props.videobg} type="video/mp4"/>
                </video>

                <div className="content">
                    <h2>{this.props.title}</h2>
                </div>
            </section>
        )
    }
}

export default HeroVidTitle