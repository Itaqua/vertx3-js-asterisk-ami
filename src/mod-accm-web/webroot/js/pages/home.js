import React from 'react'

export default React.createClass({
  displayName: "home",
  render() {
    return (
      <div className="container">
        <div className="starter-template">
          <h1>vertx-js-asterisk-ami</h1>
          <p className="lead">
            Example of combining Vertx.io and React.js for realtime communications and monitoring
          </p>
          <p className="lead">
          <small>
            click on <a href="/peers">Peers</a> to continue
          </small>
          </p>
        </div>
      </div>
    )
  },
})
