import React, { Component } from "react"
import Img from "gatsby-image"

class HeroImgTitle extends Component {
    render() {
        return (
            <section className="hero-vid-title">
                <Img fluid={this.props.bgImg} />

                <div className="content">
                    <h2>{this.props.title}</h2>
                </div>
            </section>
        )
    }
}

export default HeroImgTitle