const createTransaction = require('./create-transaction')

module.exports = async (work, res, successCode, params) => {
    const transaction = createTransaction()

    const recieveMySqlResults = (error, results) => {
      if(error) {
          throw error
      }
              
      res.status(successCode).send(results)
    }
    
    try {
        await work(transaction, recieveMySqlResults, params)
        await transaction.end()
    } catch(e) {
        console.error(e.message)
        await transaction.rollback()
        throw e
    }
}