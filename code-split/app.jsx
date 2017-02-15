import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor() {
    super()
    this.state = {}

    this.onclick = this.onclick.bind(this)
  }
  async onclick() {
    const { Hello } = await import('./hello.jsx')
    this.setState({ Hello: <h1>Hello world</h1> })
    
  }
  
  render() {
    let Hello = this.state.Hello || (<h1>1111</h1>)
    return <div>
      {Hello}
      <button onClick={this.onclick}>点击我</button>
    </div>  
  }
}

ReactDOM.render(<App />, document.getElementById('root'))