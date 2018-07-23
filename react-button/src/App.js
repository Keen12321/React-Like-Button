import React, { Component } from 'react'

class App extends Component {

	constructor(props) {
		super(props)
		this.state = {
			clicks: 0,
			like: "clicks"
		}
	}

	addLike = () => {
		if (this.state.clicks === 0) {
			this.setState({
				like: "like"
			}) 
		} else {
			this.setState({
				like: "likes"
			})
		}
		this.setState ({
			clicks: this.state.clicks + 1
		})
	}

  render() {
    return (
      <div className="App">
        <button onClick={this.addLike}>{this.state.clicks} {this.state.like}</button>
      </div>
    )
  }
}

export default App
