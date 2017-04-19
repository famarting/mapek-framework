var http = require('http')

exports.request = function(options,json,callback){

    var req = {
        hostname: options.hostname,
        port: options.port,
        path: options.path,
        method: options.method
    }

    if(options.method != "GET"){
        req.headers = {
            "Content-Type": "application/json",
            "Content-Length": Buffer.byteLength(JSON.stringify(json))
        }
    }

    var request = new http.ClientRequest(req)

    if(options.method == "GET"){
        request.end()
    }else{
        request.end(JSON.stringify(json))
    }

    request.on('response', function (response) {
        data = []
        response.setEncoding('utf8');
        response.on('data', function (chunk) {
            data.push(chunk)
        });
        response.on('end',function(){
            if(callback){
                callback(data.toString())
            }
        })
    })
}

