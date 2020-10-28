module.exports = (transaction, recieveMySqlResults, params) => transaction.query('SELECT * FROM EXPERIMENT WHERE timeLimit=?', [params.timeLimit],  recieveMySqlResults)
