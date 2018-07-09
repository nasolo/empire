
const path = require('path')
const dbroute = require('../routes/dbroutes')
const _ = require('lodash')


//load database and database collection
const db = dbroute.loadDatabase(dbroute.team.path)
const collection = db.defaults(dbroute.team.defaults).get('team')

module.exports = {
    findAll: function(owner){

        if(owner) return collection.find({owner: owner}).value
     
        return collection.value()

    },
    findOne: function(id, owner){

        return collection.find({id: id, owner: owner}).value()

    },
    create: function(instData){



    },
    update: function(){

    },



}