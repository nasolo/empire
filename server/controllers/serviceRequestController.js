
const path = require('path')
const dbroute = require('../routes/dbroutes')
const shortid = require('shortid')

//load database and database collection
const db = dbroute.loadDatabase(dbroute._serviceRequestdb.path)
const collection = db.defaults(dbroute._serviceRequestdb.defaults).get('serviceRequests')

module.exports = {
    find: function(){

        return dbroute.loadDatabase(dbroute._serviceRequestdb.path).get('serviceRequests');
        
    },


    findById: function(id){

       return collection.find({id: id}).value()

    },
    create: function(serviceRequestData){
           // console.log(serviceRequestData.rowvalue)
           var srObject = {};
           var rowHeader = serviceRequestData.rowHeader
           var rowvalue = serviceRequestData.rowvalue
            var getCollectionId = function(collection, sr){

                var getSr = collection.find({srnumber: sr}).value()

                return getSr ? getSr.id : false

                 
            }

            
           rowHeader.map((srs, index) =>{ 
              
            //create null ogject value if row vaule is null, empty or undefined
            if(rowvalue[index] == "undefined" || rowvalue[index] == "" || rowvalue[index] == null){
                    var srRowValue = ""                   
               }else{
                srRowValue = rowvalue[index]                   
               }
               

        //since this is the object key remove all white spaces and # 
          var newObjKey = srs.split('').filter(function(x, i){
                return x !== " "
           }).map(x =>{
                if(x == "#"){
                    return "number"
                }else{
                    return x.toLowerCase()
                }
           }).join('')
           
           srObject["id"] = shortid.generate()
            srObject[newObjKey] = srRowValue;
                
                
            return srObject;
                
             });
      
             

            //check if the collection is in database by srnumber, if true asign currect sr object else push new object
             
            if(getCollectionId(collection, srObject.srnumber)){
                console.log(collection.size().value())
                
                return collection.find({id: getCollectionId(collection, srObject.srnumber)}).assign(srObject).write()
                
            }else{
                console.log(collection.size().value())

                return collection.push(srObject).write()
            }

    },
    update: function(id, obj){
        
        return collection.find({id: id}).assign(obj).value()

    },
    delete: function(id){

        return collection.remove({id: id}).write()

    }



}