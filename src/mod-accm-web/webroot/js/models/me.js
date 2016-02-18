import State  from 'ampersand-state'
import md5    from 'md5'

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
    
  },

  onEmailChange(){
    window.sessionStorage.email = this.email
    this.fetchInitialData()
  },

  fetchInitialData () {
    if(this.token){
      this.avatar_url = `http://www.gravatar.com/avatar/${md5(email)}`
    }else{
      this.avatar_url = undefined
    }
  },
})
