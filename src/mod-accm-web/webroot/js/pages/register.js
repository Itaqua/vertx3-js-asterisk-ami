import React from 'react'

export default React.createClass({
  render() {
    const {me} = this.props
    return (
      <div className="container">
        <div className="starter-template">
          <p className="lead">Register using your email to interact</p>
          <div className="row">
            <div className="col-lg-6 col-lg-offset-3">
              <div className="input-group">
                <input ref="email" type="text" className="form-control" placeholder="email" />
                <div className="input-group-btn">
                  <button type="button" className="btn btn-primary" onClick={this.onRegister}>Register</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },

  onRegister(e){
    const {email} = this.refs
    this.props.me.register(email.value)
  }
})