const serviceRequestController = require('../controllers/serviceRequestController')

const resolvers = {
    Query: {
        getAllServiceRequests: () => { return serviceRequestController.find().value()}
    }
  };


  module.exports = resolvers;