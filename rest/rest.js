var express = require('express');
var bodyparser = require("body-parser")
var events = require("../eventsEngine/events")

var init = function(port){
    var app = express();
    app.use(bodyparser.json())

    app.post("/monitor",function(req,res){
        var data = req.body
        events.emitMonitor(data)
        res.send(JSON.stringify({"status":"monitoring"}))
        res.end()
    })

    /*app.post("/connect",function(req,res){
        
        res.end()
    })*/

    app.listen(port, function () {
        console.log('Server listening on port '+port+'!');
    })
}

module.exports = {
    init
}



