import Router from './router'
import app    from 'ampersand-app'
import Me     from './models/me'

// just to debug...
//window.app = app

app.extend({
  init (){
    this.DOM = document.getElementById('root')
    
    this.me = new Me()
    this.me.fetchInitialData()
    this.router = new Router()
    this.router.history.start()
  }
})

app.init()