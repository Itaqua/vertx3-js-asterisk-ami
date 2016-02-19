import Collection from "ampersand-collection"
import EventBus   from "vertx3-eventbus-client"
import address    from "../../../../mod-messages/event-address"

var eb;
function emit(action, message){
  eb.send(address.messages, {action:action, message:message})
}

export default Collection.extend({
  initialize(){
    const messagesEventHandler = (err, success)=>{
      if(!err){
        var message = success.body
        //Instead of using a Switch Statement, Full Functional!
        var todosActions = {
          added: msg => {
            this.add(msg)
          },
          //TODO: To implement later
          //changed: ()=>{},
          //deleted: ()=>{}
        }
        console.log(message)

        var fun = (todosActions[message.action] || function(){ console.error("Undefined action: " + message.action) })
        fun(message.message)
      }
    }

    function registerEventBus(){
      console.log("connecting to vert.x Event Buss")
      eb = new EventBus("/eventbus/")

      eb.onopen = ()=>{
        console.log("vert.x EB connected!");
        
        eb.registerHandler(address.messagesEvent, messagesEventHandler)
        //TODO: We need to load the first load of the messages
        /*
          eb.send(address.todos, {action:"all"}, (err, success)=>{
          if(!err){
            const todos = success.body
            //this.setState({todos})
            console.log(todos)
          }
        })*/
      }
      eb.onclose = ()=>{
        console.log("closed vert.x EB")
        setTimeout(()=>{ registerEventBus() }, 5000)
      }  
    }

    registerEventBus()
  },

  addMessage(who, msg){
    const message = {
      who      : who.email,
      whoAvatar: who.avatar_url,
      message  : msg
    }
    emit("add", message)
  }
})