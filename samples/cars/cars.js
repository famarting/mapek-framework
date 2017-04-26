var framework = require("../../mapek") 

var node = framework.node
var knowledge = framework.knowledge
var http = framework.http

var mapk = node(__dirname+"/mapek.ini")

var net = mapk.network

mapk.monitor(function(data,next){
    if(data.type && data.type==="TRAFFIC_SIGNAL"){
        var cars = knowledge.get("cars")
        for(car in cars){
            var carstatus = cars[car]
            var indications = {}
            indications.carId = carstatus.carId
            indications.hostname = carstatus.hostname
            indications.port = carstatus.port
            indications.stop = false
            next(indications)
            
        }
    }
})

mapk.monitor(function(data,next){
    if(data.type && data.type==="CAR_MSG"){
        var id = data.carId
        var cars = knowledge.get("cars")
        if(cars){
            cars[id] = data
        }else{
            cars = {}
            cars[id] = data
        }
        knowledge.save("cars",cars)
    }
})


mapk.process(function(data){
    var opts = {}
    opts.hostname = data.hostname
    opts.port = data.port
    opts.path = "/engine/forward"
    opts.method = "GET"
    http.request(opts)
})