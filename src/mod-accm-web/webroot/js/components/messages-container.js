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
          <img src={msg.whoAvatar}/>
          <strong>{msg.who}: </strong>{msg.message}
        </div>
      )
    }).reverse()

    return (
      <div className="daMessages">{messagesList}</div>
    )
  },
})