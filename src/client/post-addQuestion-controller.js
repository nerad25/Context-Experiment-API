const postAddQuestion = require('../db/post-addQuestion')
const withTransaction = require('../db/transaction/with-transaction')

module.exports = async (req, res) => {
    try {
        const params = { itemName: req.params.itemName, associatedExpId: req.params.associatedExpId, 
        att1: req.params.att1, att2: req.params.att2, decoyTargetA: req.params.decoyTargetA, 
        decoyTargetB: req.params.decoyTargetB, target: req.params.target, unavaliable: 
        req.params.unavaliable }

        return withTransaction(postAddQuestion, res, 200, params)
    } catch(e) {
        console.error(e)
        res.status(500).send(`Something went wrong trying to retrieve experiments: ${e.message}`)
    }
}