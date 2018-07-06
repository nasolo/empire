
const path = require('path')
const dbroute = require('../routes/dbroutes')
const _ = require('lodash')


//load database and database collection
const db = dbroute.loadDatabase(dbroute.team.path)
const collection = db.defaults(dbroute.team.defaults).get('team')

module.exports = {
    findAll: function(){

        return collection.find().value()

    },
    findById: function(id){

        return collection.find({id: id}).value()

    },
    create: function(instData){



    },
    update: function(){

    },



}