const postAddOption = require('../db/post-addOption')
const withTransaction = require('../db/transaction/with-transaction')

module.exports = async (req, res) => {
    try {
        const params = { letter: req.params.letter, itemName: req.params.itemName, 
        associatedExpID: req.params.associatedExpID, value1: req.params.value1, value2: req.params.value2}

        return withTransaction(postAddOption, res, 200, params)
    } catch(e) {
        console.error(e)
        res.status(500).send(`Something went wrong trying to retrieve experiments: ${e.message}`)
    }
}