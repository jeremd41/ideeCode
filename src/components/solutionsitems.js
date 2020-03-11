import React, { Component } from 'react'
import { Link } from "gatsby"


class SolutionsItems extends Component {
    render() {
        return (
            <section className="solutions-items">
                <img src={this.props.iconSolutionsItems} alt={this.props.iconAltSolutionsItems}/>
                <h3>{this.props.titleSolutionsItems}</h3>
                <p>{this.props.pSolutionsItems}</p>
                <Link to={this.props.linkSolutionsItems}>En savoir plus</Link>
            </section>
        )
    }
}

export default SolutionsItems