var http = require('http')

exports.sendMonitor = function(spec,json){
    var path = "/monitor"
    var request = new http.ClientRequest({
        hostname: spec.hostname,
        port: spec.port,
        path: path,
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Content-Length": Buffer.byteLength(JSON.stringify(json))
        }
    })

    request.on('response', function (response) {
        data = ""
        response.setEncoding('utf8');
        response.on('data', function (chunk) {
            data += chunk
        });
        response.on('end',()=>{
            //
            //console.log("Data received "+data)    
        })
    })

    request.end(JSON.stringify(json))
}

