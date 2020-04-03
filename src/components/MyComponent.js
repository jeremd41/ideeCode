import React, { Component } from 'react'

class MyComponent extends Component {
    state={
      dynamiqueClass:"" 
    }
    handleClick=() =>{
      this.setState({
       dynamiqueClass:"ma-super-class" 
      })
    }
    handleClick2=() =>{
        this.setState({
            dynamiqueClass:""
        })
    }
    render() {
      return (
        <section>
            <button onClick={this.handleClick}>Badass</button>
            <button onClick={this.handleClick2}>Return</button>
            <div className={"transi class-initial " + this.state.dynamiqueClass} />
        </section>
      )
    }
  }

export default MyComponent