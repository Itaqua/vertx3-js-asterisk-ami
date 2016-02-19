import React from 'react'
import MessagesContainer from "../components/messages-container"

export default React.createClass({
  render() {
    const {me} = this.props

    return (
      <div className="container">
        <div className="starter-template">
          <p className="lead">Right now is just a live chat-room</p>
          <div className="row">
            <div className="col-lg-6 col-lg-offset-3">
              <div className="input-group">
                <input ref="email" type="text" className="form-control" placeholder="message" onKeyDown={this.onKeyDown}/>
                <div className="input-group-btn">
                  <button type="button" className="btn btn-primary" onClick={this.onSend}>Send</button>
                </div>
              </div>
              <MessagesContainer messages={me.messages}/>
            </div>
          </div>
        </div>
      </div>
    )
  },

  onSend(){
    const {email} = this.refs
    const value = email.value.trim()
    if(value.length > 0){ 
      const {me} = this.props
      email.value = ""
      me.messages.addMessage(me, value)
    }
  },

  onKeyDown(event){
    if(event.keyCode == 13 || event.which == 13){
      this.onSend()
    }
  }
})