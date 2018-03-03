
const Joi = require('joi');

var installerSchema = {

    fname: Joi.string().required(),
    id: Joi.number().required(),
    lname: Joi.string().required(),
    phone: Joi.number().max(11).required(),
    status: Joi.string().required(),
    type: Joi.string().required()

}


module.exports = installerSchema