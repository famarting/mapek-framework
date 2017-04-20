# MAPEK-FRAMEWORK

The first framework written in NodeJs to implement a MAPEK Loop.
This project enable the community to create auto-adaptative systems based on
a simple version of the MAPE-K Loop.

Information about auto-adaptative software and the MAPE-K loop: http://www.uio.no/studier/emner/matnat/ifi/INF5360/v12/undervisningsmateriale/MAPE-K%20adap%20control%20loop.pdf

# Getting started

It's mandatory to create a .ini or .properties file and pass it the path when instantiating a mapekloop
This framework automatically creates a REST api wich only supports:
- POST http://..../monitor and a JSON in the body of the request

Calling this api fires a chain of events and give the developer an easy way to do something with 
the data received in two phases.
It's also possible to create networks of MAPE-K loops with the mandatory configuration file and a provided network module.

Example:
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

There is a couple of example implementations to show the use of the actual api.


# Future plans

  - create a npm module
  - create a cloud service to share the configurations
  - improve the properties system
  - Implement a generic repository to enable diferent types of databases
  - add more phases to the loop(analysis,execute)

# About

This project was created initially with research purposes, but can be extended and 
improved with the help and support of the community.
  