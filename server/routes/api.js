var express = require('express');
var router = express.Router();
const InstContr = require('../controllers/InstallersController')

router.get('/:resource', function(req, res, next){

    var resource = req.params.resource
    res.json({
        confirmation: 'succuess',
        resource: resource
    })

})

router.post('/addinstaller', function(req, res, next){
    const addInst = InstContr.create(req.body)
        res.json(addInst)
})


module.exports = router