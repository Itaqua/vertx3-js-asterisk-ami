import React from 'react'

export default React.createClass({
  render() {
    return (
      <div className="container">
        <div className="starter-template">
          <p className="lead">Right now is just a live chat-room</p>
          <div className="row">
            <div className="col-lg-6 col-lg-offset-3">
              <div className="input-group">
                <input ref="email" type="text" className="form-control" placeholder="message" />
                <div className="input-group-btn">
                  <button type="button" className="btn btn-primary" onClick={this.onSend}>Send</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },

  onSend(e){

  }
})