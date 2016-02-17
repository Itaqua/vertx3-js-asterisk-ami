import React     from 'react'
import ReactDOM  from 'react-dom'


const Hola = React.createClass({
  render() {
    return (
      <div>Hola Mundo</div>
    )
  },
})

ReactDOM.render(<Hola/>, document.getElementById('root'))