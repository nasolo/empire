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

        res.status(401)
        res.json(err.details)
    }


  })
    
    // const addInst = InstContr.create(req.body)
        //res.json(addInst)
})


module.exports = router