var express = require('express');
var router = express.Router();

//import controller find create
const serviceRequestController = require('../controllers/serviceRequestController')


var Excel = require('exceljs');

var filename = './excelfiles/srData.xlsx'

router.get('/:resource', function(req, res){

    var resource = req.params.resource

    if(resource == "getall"){

       return res.json({
            confirmation: 'succuess',
            resource: resource,
            dataBaseState: serviceRequestController.find()
    })
}

if(resource == "getbyid"){

    var id = "SyuWidIGxzm"
    return res.json({
        confirmation: 'succuess',
        resource: resource,
        dataBaseState: serviceRequestController.findById(id)

})
}

    if(resource == "importexceldata"){
    var workbook = new Excel.Workbook();
    workbook.xlsx.readFile(filename)
        .then((data)=>{
            var worksheet = data.getWorksheet(1)
            
             worksheet.eachRow({ includeEmpty: true }, function(row, rowNumber) {

               if(rowNumber > 1 ){ 
                   
                    return serviceRequestController.create({
                    
                        rowHeader: worksheet.getRow(1).values,
                        rowvalue: row.values
                    
                    })
        
                }  

               })
        }).then(data =>{
            
            res.json({
                confirmation: 'succuess',
                resource: resource,
                dataBaseState: serviceRequestController.find()
                
            })
        })
   
    }



})


module.exports = router