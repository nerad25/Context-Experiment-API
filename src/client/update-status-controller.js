const updateExperimentStatus = require('../db/update-experimentStatus')
const withTransaction = require('../db/transaction/with-transaction')

module.exports = async (req, res) => {
    try {
        const params = {expName: req.params.expName, status: req.params.status}
        return withTransaction(updateExperimentStatus, res, 200, params)
    } catch(e) {
        console.error(e)
        res.status(500).send(`Something went wrong trying to retrieve experiments: ${e.message}`)
    }
}