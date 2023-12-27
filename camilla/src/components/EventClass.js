import React, { Component } from 'react'

export class EventClass extends Component {
    clickHandler(){
        console.log("clicked the classbutton")

    }
  
    render() {
    return (
      <div>
        <button onClick={this.clickHandler}>click me - class component</button>

      </div>
    )
  }
}

export default EventClass