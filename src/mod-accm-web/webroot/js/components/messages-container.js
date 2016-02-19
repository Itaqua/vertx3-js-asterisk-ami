import React          from 'react'
import ampersandMixin from "ampersand-react-mixin"

export default React.createClass({
  mixins: [ampersandMixin],

  render() {
    const {messages} = this.props
    console.log(messages)
    const messagesList = messages.map(msg => {
      return (
        <div key={msg.id} className="row">
          <img className="col-md-2" src={msg.whoAvatar}/>
          <div className="col-md-10">
            {msg.who}<br/>{msg.message}
          </div>
        </div>
      )
    })

    return (
      <div className="daMessages">{messagesList}</div>
    )
  },
})