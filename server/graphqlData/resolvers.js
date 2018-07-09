

const resolvers = {
    Query: {
        getAllTeamMembers: (root, args, { models }, info) =>{
             
            return models.team.findAll()
        }
    },
    team: {
        servicesRequests(getAllTeamMembers, {models}, context) {

                return context.models.serviceRequest.findAll(getAllTeamMembers.owner)
}
    }
};


  module.exports = resolvers;