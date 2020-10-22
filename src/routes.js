const getExperimentsController = require('./client/get-experiments-controller')
const getExperimentByIdController = require('./client/get-experiment-by-id-controller')
const getSubjectsController = require('./client/get-subjects-controller')
const getUsersController = require('./client/get-users-controller')
const getQuestionsController = require('./client/get-questions-controller')


module.exports = function(app) {
  app.get('/users', getUsersController)
  app.get('/subjects', getSubjectsController)
  app.get('/experiments', getExperimentsController)
  app.get('/experiments/:id', getExperimentByIdController)
  app.get('/questions', getQuestionsController)
}
