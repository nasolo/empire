const path = require('path')
const low = require('lowdb')
const fileSync = require('../node_modules/lowdb/adapters/FileSync')
const lodashId = require('lodash-id')



module.exports = {

    loadDatabase: function(dburl){

        const adapter = new fileSync(dburl)
        return low(adapter)
         
    },

    _installersdb: {
        path: path.join(__dirname, '../database/installersdb.json'),
        defaults: {
            installers: []
        }
    
    },
    _serviceRequestdb: {
        path: path.join(__dirname, '../database/serviceRequestDatabase.json'),
        defaults: {
            serviceRequests: []
        }
    
    }

    
}