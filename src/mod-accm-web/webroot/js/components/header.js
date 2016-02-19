import React from 'react'

export default React.createClass({
  render() {
    const {me, pageName} = this.props
    const menuList = ["Home", "Peers", "Contact"].map(name => {
      const nameLow = name.toLowerCase()
      const clazz = (nameLow == pageName)? "active" : ""
      return (<li key={nameLow} className={clazz}><a href={nameLow}>{name}</a></li>)
    }) 

    const user = (me.email)?
        <li id="header-user">
          <a href="/unregister">
            unregister: {me.email}&nbsp;
            <img src={me.avatar_url}/>
          </a>
        </li>:<span></span>

    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="/peers">vertx-js-asterisk-ami</a>
          </div>
          <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              {menuList}
            </ul>
            <ul className="nav navbar-nav navbar-right">
              {user}
            </ul>
          </div>          
        </div>
      </nav>
    )
  },
})