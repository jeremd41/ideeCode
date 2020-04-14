import React, { Component } from 'react'

import { Link } from "gatsby"

class PostSquare extends Component {
    render () {
        return (
            <section className="postsquare">
                <div className="img-container">
                    <img src={this.props.imgpostsquare} alt={this.props.altpostsquare}/>
                </div>
                <div className="half-flex">
                    <div className="content-container"> 
                        <h3>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed</h3>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est …</p>
                        <Link to="/article/">Lire la suite</Link>
                    </div>
                    <div className="categories-container">
                        <Link to="/blog/" className="categories exemple1">Lorem</Link>
                        <Link to="/blog/" className="categories exemple2">Lorem</Link>
                    </div>
                </div>
            </section>
        )
    }
}

export default PostSquare