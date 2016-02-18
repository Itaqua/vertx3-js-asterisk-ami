import app    from "ampersand-app"
import State  from "ampersand-state"
import md5    from "md5"
import "../vertx"

export default State.extend({  
  initialize(){
    this.email = window.sessionStorage.email
    this.on('change:email', this.onEmailChange)
  },

  session: {
    email: 'string',
    avatar_url: 'string'
  },

  register(email){
    this.email = email
    app.router.redirectTo('/peers')
  },

  onEmailChange(){
    window.sessionStorage.email = this.email
    this.fetchInitialData()
  },

  fetchInitialData () {
    if(this.email){
      this.avatar_url = `http://www.gravatar.com/avatar/${md5(this.email)}`
    }else{
      this.avatar_url = ''
    }
  },
})
