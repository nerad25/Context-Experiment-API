const getExperimentById = require('../db/get-experiment-by-id')
const withTransaction = require('../db/transaction/with-transaction')

module.exports = async (req, res) => {
    try {
        const { timeLimit }= req.params.timeLimit
        return withTransaction(getExperimentById, res.params.timeLimit, 200)
    } catch(e) {
        console.error(e)
        res.status(500).send(`Something went wrong trying to retrieve experiments: ${e.message}`)
    }
}