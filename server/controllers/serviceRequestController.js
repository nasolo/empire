
const path = require('path')
const dbroute = require('../routes/dbroutes')
const shortid = require('shortid')
const _ = require('lodash')


//load database and database collection
const db = dbroute.loadDatabase(dbroute._serviceRequestdb.path)
const collection = db.defaults(dbroute._serviceRequestdb.defaults).get('serviceRequests')
let getCollectionId =  function(collection, sr){ 
        var getSr = collection.find({srnumber: sr}).value()
        return getSr ? getSr.id : false
    }



    let sanitizeRowValues = function(rowvalues){
        return  rowvalues.map((rowvalue, arr, i) => {
            
            if(rowvalue == "undefined" || rowvalue == "" || rowvalue == null){
                return " "                
            }
            else{
             return rowvalue                  
       }
    })
}

let sanitizeRowHeaders = function(rowHeaders){

    return rowHeaders.map(rowHeaders => rowHeaders.map((rowHeader, i, arr) => {
      
            return rowHeader.split('').filter(function(x, i, arr){
                
                return x !== " "
            })
            .map(x =>{
                return x == "#" ? "number" : x.toLowerCase()})
            .join('')
        
         })
    )

}


let combineHeaderAndVaules = (headerArray, valuesArray)=>{
       
    let  headers = headerArray
     let values = valuesArray

     let srObject = []

      headers.map((header, i, arr)=>{

        console.log(values[i])
          
        srObject.push(_.zipObject(arr[i], values[i]))

        return srObject

     })


     return srObject


}

let mergeId = (obj)=>{
    return obj.map(obj => {
        id = {
                id: shortid.generate(),
                followuphistory: []
        }
        return _.merge(id, obj)
    })
}

let importData = async (data)=>{

    function updateDatabase(srId, sr){
        let updatedDbState = collection.find({id: srId}).value().followuphistory.push({
                updatedDate: Date.now(),
                description: sr.description
             })  
            collection.find({id: srId}).assign(updatedDbState).write()

    return collection.find().value()
  
    }

     function insertDatabase(sr){
         collection.push(sr).write()
            return  collection.find().value()
    }


      return data.map(sr =>{    
         let srId = getCollectionId(collection, sr.srnumber)
            return srId ? updateDatabase(srId, sr) : insertDatabase(sr)
     })
     
}


module.exports = {
    findAll: function(owner){

        if(owner) return collection.filter({owner: owner}).value()

        return collection.value();
        
    },


    findOne: function(id){
        console.log(id)
       return collection.find({id: id}).value()

    },
    create: async function(xlsData){

        let srHeaders = await sanitizeRowHeaders(xlsData.map(srData =>  srData.rowHeaders))
        let srValues = await xlsData.map(srData => srData.rowValues)
        let serviceRecords = await mergeId(combineHeaderAndVaules(srHeaders, srValues))
     
       return importData(serviceRecords)



    },
    update: function(id, obj){
        
        return collection.find({id: id}).assign(obj).value()

    },
    delete: function(id){

        return collection.remove({id: id}).write()

    }



}