const srController = require('../controllers/serviceRequestController')
const installers = require('../controllers/InstallersController')
const team = require('../controllers/teamController')

var models = {

    serviceRequest: srController,
    installers: installers,
    team: team

}

module.exports = models