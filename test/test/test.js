var framework = require("../../mapek") 
var node = framework.node
var net = framework.network
var knowledge = framework.knowledge
var http = framework.http

mapk = node()

mapk.monitor(function(data,next){

    if(data.type && data.type==="TRAFFIC_SIGNAL"){
        console.log(data)
    }
})

mapk.monitor(function(data,next){
    next(data,"folwald","testteeo")
})

mapk.process(function(data,forward,test){
    console.log(data)
    console.log(forward)
    console.log(test)
})