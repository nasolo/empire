

const resolvers = {
    Query: {
        getAllServiceRequests: (root, args, {models}) => {
        
            return models.serviceRequest.findAll()
        },

        getServiceRequest: (root, args, {models, id}) =>{

            return models.serviceRequest.findOne(id)

        }
    }
  };


  module.exports = resolvers;