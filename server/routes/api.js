var express = require('express');
var router = express.Router();
const Joi = require('joi');
const instSchema = require('../models/installers')
const InstContr = require('../controllers/InstallersController')

const options = {

    abortEarly: false


}

router.get('/:resource', function(req, res){

    var resource = req.params.resource
    
    if(resource == "getInstallers")
      var listOfinstallers = InstContr.find()
      console.log(listOfinstallers)

    res.json(listOfinstallers)

})

router.post('/addinstaller',function(req, res, next){
  const postData = req.body

  Joi.validate(postData, instSchema, options, (err, value, next)=>{
     
    if(err){
     
      return res.status(403).json(err)
    }

  // const addInst = InstContr.create(req.body)
  // return res.json(addInst)
    

  })
    

})

module.exports = router