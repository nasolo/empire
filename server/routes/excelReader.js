var express = require('express');
var router = express.Router();

//import controller find create
const serviceRequestController = require('../controllers/serviceRequestController')


var Excel = require('exceljs');

var filename = './excelfiles/srDataLuna.csv'

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

    if(resource == "import"){
    var workbook = new Excel.Workbook();
    var options = {
        dateFormats: ['DD/MM/YYYY']
    }
    var xlsxData = workbook.csv.readFile(filename, options)
        .then((data)=>{
            var xlsdata = []
            var worksheet = workbook.getWorksheet(1)
                 worksheet.eachRow({ includeEmpty: true }, function(row, rowNumber) {
                    if(rowNumber > 1 ){
                        return xlsdata.push({                
                            rowHeaders: worksheet.getRow(1).values,
                            rowValues: row.values
                            })
                        }  
                     })
                     return xlsdata
        
                 }).then((xlsdata)=>{
                    return serviceRequestController.create(xlsdata) 
                }).then((newDatabaseState)=>{      
                    return res.json({
                            confirmation: 'succuess',
                            resource: resource,
                            dataBaseState: newDatabaseState
                         })
                    }).catch(e => console.log(e))
                }

})


module.exports = router