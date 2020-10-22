const getExperimentsController = require('./client/get-experiments-controller')
const getExperimentByIdController = require('./client/get-experiment-by-id-controller')

module.exports = function(app) {
  app.get('/experiments', getExperimentsController)
  app.get('/experiments/:id', getExperimentByIdController)
}
