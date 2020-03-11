import React, { Component } from 'react'

class PostSquare extends Component {
    render () {
        return (
            <section>
                <div>
                    <img src={this.props.imgpostsquare} alt={this.props.altpostsquare}/>
                </div>
                <div>

                </div>
            </section>
        )
    }
}

export default PostSquare