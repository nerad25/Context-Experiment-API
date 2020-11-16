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
const getDateCreatedByExpIDController = require('./client/get-dateCreated-controller')
const getTableDataController = require('./client/get-tableData-controller')
const getIsActiveController = require('./client/get-isActive-controller')

const postAddUserController = require('./client/post-addUser-controller')
const postAddSubjectController = require('./client/post-addSubject-controller')
const postAddExperimentController = require('./client/post-addExperiment-controller')
const postAddQuestionController = require('./client/post-addQuestion-controller')
const postAddOptionController = require('./client/post-addOption-controller')
const postAddAnswerController = require('./client/post-addAnswer-controller')


module.exports = function(app) {
  app.get('/users', getUsersController)
  app.get('/subjects', getSubjectsController)
  app.get('/experiments', getExperimentsController)
  app.get('/experiments/TableData',getTableDataController)
  app.get('/experiments/isActive/:status',getIsActiveController)
  app.get('/experiments/byId/:id', getExperimentByIdController)
  app.get('/experiments/:timeLimit', getExperimentBytimeLimitController)
  app.get('/experiments/dateCreated/:expID',getDateCreatedByExpIDController)
  app.get('/experiments/participants/:expID',getNumParticipantsByExpIDController)
  app.get('/experiments/:expId/:timeLimit', getExperimentByIdAndtimeLimitController)
  app.get('/questions', getQuestionsController)
  app.get('/options', getOptionsController)
  app.get('/answers', getAnswersController)

  app.post('/users/addUser', postAddUserController)
  app.post('/users/addSubject/:id/:age/:gender', postAddSubjectController)
  app.post('/experiment/addExperiment/:timeLimit/:experimentName/:dateCreated', postAddExperimentController)
  app.post('/experiment/addQuestion/:itemName/:associatedExpId/:att1/:att2/:decoyTargetA/:decoyTargetB/:target/:unavaliable', postAddQuestionController)
  app.post('/experiment/addOption/:letter/:itemName/:associatedExpID/:value1/:value2', postAddOptionController)
  app.post('/experiment/addAnswer/:subjectID/:itemName/:associatedExpID/:decisionTime/:selectedOption/:dateTaken', postAddAnswerController)
}
