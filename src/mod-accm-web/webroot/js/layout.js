import "./app.styl"
import ampersandMixin from "ampersand-react-mixin"
import React          from "react"
import NavHelper      from "./components/nav-helper"
import Header         from "./components/header"

export default React.createClass({
  displayName: 'Layout',
  mixins: [ampersandMixin],

  render () {
    const {me, pageName} = this.props

    return (
      <NavHelper>
        <Header me={me} pageName={pageName}/>
        {this.props.children}
      </NavHelper>
    )
  }
})