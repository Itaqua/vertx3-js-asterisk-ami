import "./setup"
import {BASE_DIR} from "../conf/application"

const verticles = [
  "mod-accm-web"
]

//Start Verticles
verticles.forEach(verticle => {
  vertx.deployVerticle(`${BASE_DIR}/${verticle}/index.js`, (complete, err) => {
      if(!err) {
          console.log(`Verticle [${verticle}] Started`)
      }else console.error("ERROR: ", err)
  })  
})