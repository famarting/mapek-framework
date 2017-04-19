"use strict";


//Singleton pattern for things context
exports.emitter = (function () {
 
  // Instance stores a reference to the Singleton
  var instance;
 
  function init() {
 
    // Singleton
 
    // Private methods and variables
    var EventEmitter = require('events').EventEmitter;

    var eventEmitter = new EventEmitter();

    //should come from properties
    var maxListeners = 50;
         
    eventEmitter.setMaxListeners(maxListeners)

    return {
      // Public methods and variables
      getEmitter: function(){
          return eventEmitter;
      }
    };
 
  };
 
  return {
 
    // Get the Singleton instance if one exists
    // or create one if it doesn't
    getInstance: function () {
 
      if ( !instance ) {
        console.log("Im a new instance of eventEmitter")
        instance = init();
      }
 
      return instance;
    }
 
  };
 
})();