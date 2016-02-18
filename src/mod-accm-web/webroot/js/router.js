import app       from 'ampersand-app'
import Router    from 'ampersand-router'
import React     from 'react'
import ReactDOM  from 'react-dom'
import Layout    from './layout'
//Pages
import Home      from "./pages/home"
import Register  from "./pages/register"
import Contact   from "./pages/contact"

function requiresRegister(handlerName) {
  return function () {
    if (app.me.token) {
      this[handlerName].apply(this, arguments)
    } else {
      this.redirectTo('/register')
    }
  }
}

function renderPage(page, opts = {layout: true}) {
  if (opts.layout) {
    page = (
      <Layout me={app.me}>
        {page}
      </Layout>
    )
  }

  ReactDOM.render(page, app.DOM)
}

export default Router.extend({
  routes:{
    ''           :'public',
    'register'   :'register',
    'unregister' :'unregister',
    'contact'    :'contact',
    'peers'      : requiresRegister('peers'),
    '*fourOhfour': 'fourOhfour'
  },

  public (){
    renderPage(<Home/>)
  },

  register(){
    if(app.me.token) app.router.redirectTo('/')
    else renderPage(<Register me={app.me}/>)
  },

  contact(){
    renderPage(<Contact/>)
  },

  unregister(){
    window.sessionStorage.clear()
    window.location = '/'
  },

})