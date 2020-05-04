import React, { Component }  from 'react'

import { Link } from "gatsby"

class CategorieSelector extends Component {
    render () {
        return (
            <section className="categories-selector">
                <Link to="/blog/" className="exemple1">Lorem</Link>
                <Link to="/blog/" className="exemple2">Lorem</Link>
                <Link to="/blog/" className="exemple3">Lorem</Link>
                <Link to="/blog/" className="exemple4">Lorem</Link>
                <Link to="/blog/" className="exemple5">Lorem</Link>
                <Link to="/blog/" className="exemple6">Lorem</Link>
                <Link to="/blog/" className="exemple7">Lorem</Link>
            </section>
        )
    }
}

export default CategorieSelector