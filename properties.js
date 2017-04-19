"use strict";

//Singleton pattern
module.exports = (function () {
 
  // Instance stores a reference to the Singleton
  var instance;
 
  function init(path) {
 
    // Singleton
 
    // Private methods and variables
    var PropertiesReader = require('properties-reader');

    var properties = PropertiesReader(path).path();

    console.log("Properties loaded "+ JSON.stringify(properties))

 
    return {
 
      // Public methods and variables
      get: function(){
          return properties
      }
 
    };
 
  };
 
  return {
 
    // Get the Singleton instance if one exists
    // or create one if it doesn't
    getInstance: function (path) {
 
      if ( !instance ) {
        instance = init(path);
      }
 
      return instance;
    }
 
  };
 
})();
