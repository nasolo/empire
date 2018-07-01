

const schema = `

type getAllServiceRequests {
    
    id: String
    company: String
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

  type Query {
    getAllServiceRequests: [getAllServiceRequests]
  }
`


module.exports = schema;