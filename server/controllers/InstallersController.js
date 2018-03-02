
const path = require('path')
const dburl = path.join(__dirname, '../database/lokidatabase.json')
const dbroute = require('../routes/dbroutes')

module.exports = {
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