const getExperimentByIdAndtimeLimit = require('../db/get-experiment-by-id-and-time-limit.js')
const withTransaction = require('../db/transaction/with-transaction')

module.exports = async (req, res) => {
    try {
        const params = {timeLimit: req.params.timeLimit, expId: req.params.expId}
        return withTransaction(getExperimentByIdAndtimeLimit, res, 200, params)
    } catch(e) {
        console.error(e)
        res.status(500).send(`Something went wrong trying to retrieve experiments: ${e.message}`)
    }
}