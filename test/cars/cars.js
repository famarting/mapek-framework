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
            console.log("Iteranting car "+car)
            var carstatus = cars[car]
            var indications = {}
            indications.carId = carstatus.carId
            indications.hostname = carstatus.hostname
            indications.port = carstatus.port
            indications.stop = false
            //comparar data con carstatus para saber si hay que decirle al car que pare o que reduzca su velocidad o lo que sea

            next(indications)
            
        }
    }
})

mapk.monitor(function(data,next){
    if(data.type && data.type==="CAR_MSG"){
        //mensaje de un coche enviandonos sus datos
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

mapk.monitor(function(data,next){
    if(data.type && data.type==="ROUTE"){
        var opts = {}
        opts.hostname = "http://tambori.dsic.upv.es"
        opts.port = 8182
        opts.path = "/vehicles"
        opts.method = "POST"
        http.request(opts,data.route)
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