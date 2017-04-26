# MAPEK-FRAMEWORK

The first framework to implement a MAPE-K Loop.
This project enable the community to create auto-adaptative systems based on
a simple version of the MAPE-K Loop.

Information about auto-adaptative software and the MAPE-K loop: http://www.uio.no/studier/emner/matnat/ifi/INF5360/v12/undervisningsmateriale/MAPE-K%20adap%20control%20loop.pdf

This framework is avaiable as an npm module: https://www.npmjs.com/package/mapek

# Getting started

It's mandatory to create a .ini or .properties file and pass it the path when instantiating a mapekloop
This framework automatically creates a REST api wich only supports:
- POST http://..../monitor and a JSON in the body of the request

Calling this api fires a monitor event with the JSON received in the REST interface. 
Furthermore it's possible to easily pass data from the monitor phase to the process phase.

It's also possible to create networks of MAPE-K loops with the configuration file and the network module.

# Example of use
First of all 
```
npm install --save mapek 
```
And then
```
var mapek = require("mapek");

var loop = mapek.node("mapek.properties");
var network = loop.network;


loop.monitor(function(data, next){
    console.log("Monitoring "+JSON.stringify(data));
    data.modified = true; //for example
    //calling next we can send data to process phase
    next(data);
});

loop.process(function(data){
   //do something with the data
   //for example, this sends the JSON called data to the monitor phase of anotherMapekLoop
   network.send("anotherMapekLoop",data);
});

//in the configuration file
[rest]
port=8080
[network]
anotherMapekLoop.hostname=localhost
anotherMapekLoop.port=9999
```

There is a couple of example implementations in the samples folder.


# Future plans

  - create a cloud service to share the configurations
  - improve the properties system
  - Implement a generic repository to enable diferent types of databases
  - add more phases to the loop(analysis,execute)

# About

This project was created initially with research purposes, but can be extended and 
improved with the help and support of the community.
  