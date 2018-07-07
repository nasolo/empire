

const schema = `

type serviceRequests {
    
    id: String
    company: String
    followuphistory:[followupdata]
    businessunit: String
    serviceregion: String
    storenumber: String 
    srnumber: String
    accountnumber: String
    opened: String
    area: String
    owner: String
    subarea: String
    summary: String
    createdby: String
    lastname: String
    mainphonenumber: String 
    status: String
    substatus: String,
    priority: String,
    product: String
    ordernumberlink: String
    resolutioncomments: String
    collectamount: String
    address: String
    city: String
    state: String
    zipcode: Int,
    country: String
    originalcompletiondate: String
    paymentterms: String
    firstname: String
    parentproductline: String
    productline: String
    description: String
    closed: String
    resolution: String
    srtype: String
    county: String
    escalatedsource: String
    datemodified: String
    serviceordernumber: String
    serviceordernumberlink: String
    opportunitysource: String
    opportunitysubsource: String
}
type followupdata {
  updatedDate: String
  description: String
}


type team
{
    team_Id: Int 
    teamName: String,
    teamMembers: [teamMembers]
  }
       


type teamMembers {
  id: String
  position: String
  fName: String
  lName: String
  owner: String
  admin: String
}


  type Query {
    getAllServiceRequests: [serviceRequests]!
    getServiceRequest(id: String!): serviceRequests!
    getAllTeam: team!
    getTeam(id: String): team!

  }
`


module.exports = schema;