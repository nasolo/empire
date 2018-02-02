import { create } from 'domain';

var Installer = require('../models/installers')

model.exports = {
    find: function(){
        Installer.find(params, function(err, Installers){

            if(err){
                callback(err, null)
                return 
            }
            callback(null, Installers)

        })
    },
    findById: function(){

    },
    create: function(){

    },
    update: function(){

    },



}