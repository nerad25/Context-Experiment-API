const postAddSubject = require('../db/post-addSubject')
const withTransaction = require('../db/transaction/with-transaction')

module.exports = async (req, res) => {
    try {
        const params = {id: req.params.id, age: req.params.age, gender: req.params.gender}

        return withTransaction(postAddSubject, res, 200, params)
    } catch(e) {
        console.error(e)
        res.status(500).send(`Something went wrong trying to retrieve experiments: ${e.message}`)
    }
}