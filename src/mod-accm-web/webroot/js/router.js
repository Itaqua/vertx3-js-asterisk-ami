import app       from 'ampersand-app'
import Router    from 'ampersand-router'
import React     from 'react'
import ReactDOM  from 'react-dom'
import Layout    from './layout'
//Pages
import Home      from "./pages/home"
import Register  from "./pages/register"
import Contact   from "./pages/contact"
import Peers     from "./pages/peers"
import FoF       from "./pages/404"

function requiresRegister(handlerName) {
  return function () {
    if (app.me.email) {
      this[handlerName].apply(this, arguments)
    } else {
      this.redirectTo('/register')
    }
  }
}

function renderPage(page) {
  page = (
    <Layout me={app.me} pageName={page.type.displayName}>
      {page}
    </Layout>
  )

  ReactDOM.render(page, app.DOM)
}

export default Router.extend({
  routes:{
    ''           :'home',
    'home'       :'home',
    'register'   :'register',
    'unregister' :'unregister',
    'contact'    :'contact',
    'peers'      : requiresRegister('peers'),
    '*fourOhfour': 'fourOhfour'
  },

  home (){
    renderPage(<Home/>)
  },

  register(){
    if(app.me.token) app.router.redirectTo('/')
    else renderPage(<Register me={app.me}/>)
  },

  contact(){
    renderPage(<Contact/>)
  },

  peers(){
    renderPage(<Peers/>)
  },

  unregister(){
    window.sessionStorage.clear()
    window.location = '/'
  },

  fourOhfour(){
    renderPage(<FoF/>)
  }

})