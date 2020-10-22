const createTransaction = require('./create-transaction')

module.exports = async (work, res, successCode) => {
    const transaction = createTransaction()

    const recieveMySqlResults = (error, results) => {
      if(error) {
          throw error
      }
        
      res.status(successCode).send(results)
    }
    
    try {
        await work(transaction, recieveMySqlResults)
        await transaction.end()
    } catch(e) {
        console.error(e.message)
        await transaction.rollback()
        throw e
    }
}