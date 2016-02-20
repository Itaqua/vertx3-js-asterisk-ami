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
          <span class="col-xs-2"><img src={msg.whoAvatar}/></span>
          <span class="col-xs-10"><strong>{msg.who}: </strong>{msg.message}</span>
        </div>
      )
    }).reverse()

    return (
      <div className="daMessages">{messagesList}</div>
    )
  },
})