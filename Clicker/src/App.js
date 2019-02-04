import React, {Component} from 'react'

class App extends Component{
  constructor(){
    super()
    this.state = { counter : 0}
  }
  increment = () => {
    this.setState({counter : this.state.counter +1 })
  }
  decrement = () => {
    this.setState({counter : this.state.counter -1 })
  }
  reset = () => {
    this.setState({counter : 0 })
  }
  render(){
    return(
      <div>
        <div className = "mainDiv"> {this.state.counter}
          <div className = "subDivContainer">
            <div className = "subDiv" onClick = {this.increment}> + </div>
            <div className = "subDiv" onClick = {this.reset}>R</div>
            <div className = "subDiv" onClick = {this.decrement}> - </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App