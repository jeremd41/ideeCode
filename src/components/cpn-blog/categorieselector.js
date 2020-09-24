import React, { Component }  from 'react'

import { Link } from "gatsby"

class CategorieSelector extends Component {
    render () {
        return (
            <section className="categories-selector">
                <Link to="/blog/" className="exemple1">Saas</Link>
                <Link to="/blog/" className="exemple2">Javascript</Link>
                <Link to="/blog/" className="exemple3">Framework</Link>
                <Link to="/blog/" className="exemple4">Front-end</Link>
                <Link to="/blog/" className="exemple5">Back-end</Link>
                <Link to="/blog/" className="exemple6">E-commerce</Link>
                <Link to="/blog/" className="exemple7">CMS</Link>
            </section>
        )
    }
}

export default CategorieSelector