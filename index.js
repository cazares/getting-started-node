var server = require("./server");
var router = require("./router");
var handlers = require("./requestHandlers");

var handle = {}
handle["/"] = handle ["/start"] = handlers.start;
handle["/upload"] = handlers.upload;

server.start(router.route, handle);
