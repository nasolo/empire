
const Joi = require('joi');

var installerSchema = {

    fname: Joi.string().required().label('First Name'),
    id: Joi.number().required().label('ID'),
    lname: Joi.string().required().label('Last Name'),
    phone: Joi.number().max(11).required().label('Phone Number'),
    status: Joi.string().required().label('Status'),
    type: Joi.string().required().label('Type')


}

module.exports = installerSchema