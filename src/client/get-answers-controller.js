const getAllAnswers = require('../db/get-all-answers')
const withTransaction = require('../db/transaction/with-transaction')

module.exports = async (req, res) => {
    try {
        return withTransaction(getAllAnswers, res, 200)
    } catch(e) {
        console.error(e)
        res.status(500).send(`Something went wrong trying to retrieve experiments: ${e.message}`)
    }
}