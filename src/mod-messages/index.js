import address from "./event-address"

const messages = []

const eventBus = vertx.eventBus()

eventBus.consumer(address.messages, messageHandler)

function messageHandler(message){
  const msg = message.body()
  console.log(msg)

  const messageActions = {
    add(msg){
      msg.id = guid()
      messages.push(msg)

      emit("added", msg)
    },

    delete(id){
      const idx = messages.findIndex(t => id == t.id)
      if(idx >= 0){
        const oldMsg = messages.splice(idx,1)[0]  
        emit("deleted", oldMsg.id)
      }
    },

    change(msg){
      const idx = messages.findIndex(t => msg.id == t.id)
      if(idx >= 0){
        messages[idx]=msg
        emit("changed", msg)
      }else{
        message.reply({status:"ko", message:"msg don't exists"})
      }
    },

    all(){
      message.reply(messages)
    }
  }

  const fun = (messageActions[msg.action] || function(){ console.error("Undefined action: " + msg.action) })
  fun(msg.message)
}

function emit(action, message){
  eventBus.publish(address.messagesEvent, {action, message})
}


function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}