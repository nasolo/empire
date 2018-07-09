

const schema = `

type serviceRequest {
  
    owner: String
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
    getAllTeamMembers: [team]
}
type followupdata {
  updatedDate: String
  description: String
}


type team
{
    owner: String
    team_Id: Int 
    teamName: String,
    id: String
    position: String
    fName: String
    lName: String    
    admin: String
    servicesRequests: [serviceRequest]

  }

  type Query {
   
    getAllTeamMembers: [team]

  }
`


module.exports = schema;