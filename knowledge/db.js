"use strict";

//Singleton pattern
module.exports = (function () {
 
  // Instance stores a reference to the Singleton
  var instance;
 
  function init() {
 
    // Singleton
 
    // Private methods and variables
    var knowledge = {}

 
    return {
        save: function(key, value){
            knowledge[key] = value
        },
        remove: function(key){
            delete knowledge[key]
        },
        get: function(key){
            return knowledge[key]
        }
    }
 
  };
 
  return {
 
    // Get the Singleton instance if one exists
    // or create one if it doesn't
    getInstance: function () {
 
      if ( !instance ) {
        instance = init();
      }
 
      return instance;
    }
 
  };
 
})();
