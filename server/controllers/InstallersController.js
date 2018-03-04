
const path = require('path')
const dburl = path.join(__dirname, '../database/lokidatabase.json')
const dbroute = require('../routes/dbroutes')

module.exports = {
    find: function(){

            db = dbroute.loadDatabase(dbroute._installersdb.path)
            return db.get("installers")
            .value()

    },
    findById: function(){

    },
    create: function(instData){
        
        db = dbroute.loadDatabase(dbroute._installersdb.path)
        db.defaults(dbroute._installersdb.defaults).get('installers')
        .push({
        id: instData.id,
        fname: instData.fname,
        lname: instData.lname,
        status: instData.status,    
        phoneNumber: instData.phone
    })
        .write()
        
        return db.getState()

            


    },
    update: function(){

    },



}