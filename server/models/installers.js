var mongoose = require('mongoose')

var ZoneSchema = new mongoose.Schema({

    id:{type: Number, default:''},
    firstname: {type: String, default:''},
    lastname: {type: String, default:''},
    companyname: {type: String, default:''},
    totalCrew: {type: Object, default:{}},
    yards: {type: String, default: ''},
    specialareas: {type: String, },
    specialday: {type: Number, default: 0},
    phoneNumber: {type: Number, default: 0}

})


module.exports = mongoose.mode('ZoneSchema', ZoneSchema)