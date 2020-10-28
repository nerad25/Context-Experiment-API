const getExperimentBytimeLimit = require('../db/get-experiment-by-time-limit')
const withTransaction = require('../db/transaction/with-transaction')

module.exports = async (req, res) => {
    try {
        const params = {timeLimit: req.params.timeLimit}
        return withTransaction(getExperimentBytimeLimit, res, 200, params)
    } catch(e) {
        console.error(e)
        res.status(500).send(`Something went wrong trying to retrieve experiments: ${e.message}`)
    }
}