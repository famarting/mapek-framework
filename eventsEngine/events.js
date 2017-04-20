"use strict";

var emitterSingelton = require("./eventSingelton.js");

const EVENT_MONITOR = "MONITOR"
const EVENT_PROCESS = "PROCESS"


var emitter = emitterSingelton.emitter.getInstance().getEmitter()

//internal

/*
*   Emit a monitor event
*/
var emitMonitor = function(data){
    emitter.emit(EVENT_MONITOR,data)
}

var listenMonitor = function(callback,process){
    emitter.on(EVENT_MONITOR,function(data){
        callback(data,process)
    })
}

var emitProcess = function(data){
    emitter.emit(EVENT_PROCESS,data)
}

var listenProcess = function(callback){
    emitter.on(EVENT_PROCESS,function(data){
        callback(data)
    })
}

module.exports = {
    emitMonitor,listenMonitor,
    emitProcess,listenProcess
}




