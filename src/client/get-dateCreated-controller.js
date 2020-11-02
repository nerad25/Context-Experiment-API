const getDateCreatedById = require('../db/get-dateCreated-by-experimentID')
const withTransaction = require('../db/transaction/with-transaction')

module.exports = async (req, res) => {
    try {
        const params = {expID: req.params.expID}
        return withTransaction(getDateCreatedById, res, 200, params)
    } catch(e) {
        console.error(e)
        res.status(500).send(`Something went wrong trying to retrieve experiments: ${e.message}`)
    }
}