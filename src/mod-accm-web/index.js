import {BASE_DIR}    from "../../conf/application"
import Router        from "vertx-web-js/router"
import SockJSHandler from "vertx-web-js/sock_js_handler"
import StaticHandler from "vertx-web-js/static_handler"
import address       from "./event-address"

const ebHandler = SockJSHandler.create(vertx).bridge(
  {
    inboundPermitteds: [{
        address:address.todos
    }],
    outboundPermitteds: [{
        address:address.todosEvent
    }]
  }
)

//todo: Implement the events to the AMI

const router = Router.router(vertx)
router.route("/eventbus/*").handler(ebHandler.handle)

const staticHandler =  StaticHandler.create(`${BASE_DIR}/webroot`).handle

router.route().handler(rc =>{
  const path = rc.normalisedPath()
  console.log("Path: " + path)
  if(path != "/" && !path.startsWith("/js") && !path.startsWith("/themes")){
    console.log("reroute")
    rc.reroute("/")
  }
  staticHandler(rc)
})

// Start the web server and tell it to use the router to handle requests.
vertx.createHttpServer().requestHandler(router.accept).listen(8080)