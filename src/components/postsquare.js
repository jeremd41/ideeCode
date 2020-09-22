import React, { Component } from 'react'
import Img from "gatsby-image"

import { Link } from "gatsby"

class PostSquare extends Component {
    render () {
        return (
            <section className="postsquare">
                <Link to={this.props.slug} className="img-container">
                    <Img fluid={this.props.imgpostsquare} alt={this.props.altpostsquare}/>
                </Link>
                <div className="half-flex">
                    <div className="content-container">
                        <Link to={this.props.slug}>
                            <h3>{this.props.title}</h3>
                        </Link>
                        <p>{this.props.excerpt.substring(0, 60)}...</p>
                    </div>
                    <div className="categories-container">
                        {this.props.tags.map((item, key) => {
                            return(
                            <Link key={key}to="/blog/" className="categories exemple1">{item}</Link>
                            )
                        })}
                        <Link to="/blog/" className="categories exemple2">{this.props.date}</Link>
                    </div>
                </div>
            </section>
        )
    }
}

export default PostSquare