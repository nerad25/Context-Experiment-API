const postAddQuestion = require('../db/post-addExperiment')
const withTransaction = require('../db/transaction/with-transaction')

module.exports = async (req, res) => {
    try {
        const params = { timeLimit: req.params.timeLimit, experimentName: req.params.experimentName, dateCreated: req.params.dateCreated }

        return withTransaction(postAddExperiment, res, 200, params)
    } catch(e) {
        console.error(e)
        res.status(500).send(`Something went wrong trying to retrieve experiments: ${e.message}`)
    }
}