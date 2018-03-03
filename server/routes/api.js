var express = require('express');
var router = express.Router();
const Joi = require('joi');
const instSchema = require('../models/installers')
const InstContr = require('../controllers/InstallersController')



router.get('/:resource', function(req, res){

    var resource = req.params.resource
    res.json({
        confirmation: 'succuess',
        resource: resource
    })

})

router.post('/addinstaller',function(req, res, next){
  const postData = req.body

  Joi.validate(postData, instSchema, (err, value)=>{

    if(err){

        
       return res.status(403).json(err)
    }

   const addInst = InstContr.create(req.body)
   return res.json(addInst)
    

  })
    

})


module.exports = router