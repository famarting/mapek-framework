
var http = require("./httpTemplate")

var init = function(props){
    
    var nodes = props.network

    var send = function(name,data){

        node = nodes[name]
        if(!node){
            throw new Error("Network node "+name+" doesn't exists in mapek.ini")
        }

        http.sendMonitor(node,data)

    }

    return {send}
}

module.exports = init