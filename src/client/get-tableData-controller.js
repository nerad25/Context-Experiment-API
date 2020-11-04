const getAllTableData = require('../db/get-all-tableData')
const withTransaction = require('../db/transaction/with-transaction')

module.exports = async (req, res) => {
    try {
        return withTransaction(getAllTableData, res, 200)
    } catch(e) {
        console.error(e)
        res.status(500).send(`Something went wrong trying to retrieve experiments: ${e.message}`)
    }
}