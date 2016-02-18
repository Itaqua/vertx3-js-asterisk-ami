import {EventBus} from "vertx-eventbus-client"
import address    from "../../event-address"

console.log("connecting to vert.x Event Buss")
        
var eb;

function todosEventHandler(err, success){
  if(!err){
    var message = success.body
    var todosActions = {
      added: this.addTodo,
      changed: this.changeTodo,
      deleted: this.deleteTodo
    }
    console.log(message)

    //var fun = (todosActions[message.action] || function(){ console.error("Undefined action: " + message.action) })
    //fun(message.message)
  }
}

function registerEventBus(){
  eb = new EventBus("/eventbus/")

  eb.onopen = ()=>{
    console.log("vert.x EB connected!");
    
    eb.registerHandler(address.todosEvent, todosEventHandler)
    eb.send(address.todos, {action:"all"}, (err, success)=>{
      if(!err){
        const todos = success.body
        //this.setState({todos})
        console.log(todos)
      }
    })
  }
  eb.onclose = ()=>{
    console.log("closed vert.x EB")
    setTimeout(()=>{ this.registerEventBus() }, 5000)
  }  
}

