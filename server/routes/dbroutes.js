const path = require('path')
const low = require('lowdb')
const fileSync = require('../node_modules/lowdb/adapters/FileSync')



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
    
    }

}