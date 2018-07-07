

const resolvers = {
    Query: {
        getAllServiceRequests: (root, args, {models}) => {
        
            return models.serviceRequest.findAll()
        },

        getServiceRequest: (root, args, {models, id}) =>{

            return models.serviceRequest.findOne(id)

        },

        getAllTeam: (root, args, {models}) =>{
            return models.team.findAll()
        },
        getTeam: (root, args, {models, id}) =>{
            return models.team.findOne(id)
        }
    }
  };


  module.exports = resolvers;