const getExperimentsController = require('./client/get-experiments-controller')
const getExperimentBytimeLimitController = require('./client/get-experiment-by-time-limit-controller')
const getExperimentByIdController = require('./client/get-experiment-by-id-controller.js')
const getExperimentByIdAndtimeLimitController = require('./client/get-experiment-by-id-and-timeLimit-controller')

const getSubjectsController = require('./client/get-subjects-controller')
const getUsersController = require('./client/get-users-controller')
const getQuestionsController = require('./client/get-questions-controller')
const getOptionsController = require('./client/get-options-controller')
const getAnswersController = require('./client/get-answers-controller')
const getNumParticipantsByExpIDController = require('./client/get-num-participants-controller')

module.exports = function(app) {
  app.get('/users', getUsersController)
  app.get('/subjects', getSubjectsController)
  app.get('/experiments', getExperimentsController)
  app.get('/experiments/participants/:expID',getNumParticipantsByExpIDController)
  app.get('/experiments/byId/:id', getExperimentByIdController)
  app.get('/experiments/:timeLimit', getExperimentBytimeLimitController)
  app.get('/experiments/:expId/:timeLimit', getExperimentByIdAndtimeLimitController)

  app.get('/questions', getQuestionsController)

  app.get('/options', getOptionsController)
  app.get('/answers', getAnswersController)
}
