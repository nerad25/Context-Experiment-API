const postAddAnswer = require('../db/post-addAnswer')
const withTransaction = require('../db/transaction/with-transaction')

module.exports = async (req, res) => {
    try {
        const params = { subjectID: req.params.subjectID, itemName: req.params.itemName, 
        associatedExpID: req.params.associatedExpID, decisionTime: req.params.decisionTime, 
        selectedOption: req.params.selectedOption, dateTaken: req.params.dateTaken}

        return withTransaction(postAddAnswer, res, 200, params)
    } catch(e) {
        console.error(e)
        res.status(500).send(`Something went wrong trying to retrieve experiments: ${e.message}`)
    }
}