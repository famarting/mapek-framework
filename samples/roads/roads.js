var framework = require("../../mapek") 
var node = framework.node

var mapk = node(__dirname+"/mapek.ini")
var net = mapk.network

mapk.monitor(function(data,next){

    if(data.type==="TRAFFIC_SIGNAL"){
        next(data)
    }

    console.log(data)

})

mapk.process(function(data){

    console.log("Sending")
    net.send("cars",data)
    
})