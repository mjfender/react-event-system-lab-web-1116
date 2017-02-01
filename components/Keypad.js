import React from 'react'

class Keypad extends React.Component {
  constructor() {
    super()
    this.keypadHandler = this.keypadHandler.bind(this)
  }

  keypadHandler(event){
     console.log('Entering password...');
  }

  render() {
    return(
        <input type="password" onKeyUp = {this.keypadHandler}/>

    )
  }
}

module.exports = Keypad;