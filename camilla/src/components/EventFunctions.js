import React from 'react'

function EventFunctions() {

    function clickHandler(){
        console.log("Clicked the functional button")
    }
  return (
    <div>
        <button onClick={clickHandler}>click me - functional component</button>
    </div>
  )
}

export default EventFunctions