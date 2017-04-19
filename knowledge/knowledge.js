"use strict"

var db = require("./db")

var knowledge = db.getInstance() 

var save = function(key, value){
    db.getInstance().save(key,value)
}

var remove = function(key){
    db.getInstance().remove(key)
}

var get = function(key){
    return db.getInstance().get(key)
}

module.exports = {
    save,
    remove,
    get
}