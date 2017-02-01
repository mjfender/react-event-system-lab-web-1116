import React from 'react'

class EyesOnMe extends React.Component {
  constructor() {
    super()
    this.blurHandler = this.blurHandler.bind(this)
    this.focusHandler = this.focusHandler.bind(this)
  }

  focusHandler(event){
    console.log('Good!');
  }

  blurHandler(event){
    console.log('Hey! Eyes on me!')
  }

  render() {
    return (
      <form>
        <button onFocus = {this.focusHandler} onBlur= {this.blurHandler}/>
      </form>

    )
  }
}

module.exports = EyesOnMe;