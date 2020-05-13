import React, { Component } from "react"



class HeroImgTitle extends Component {
    render() {
        const style={
            backgroundImage: `url(${this.props.bgImg})`
        }
        return (
            <section className="hero-img-title" style={style}>
                <div className="bg-img" />

                <div className="content">
                    <h2>{this.props.title}</h2>
                </div>
            </section>
        )
    }
}

export default HeroImgTitle