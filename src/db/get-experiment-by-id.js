module.exports = (transaction, recieveMySqlResults, params) => transaction.query('SELECT * FROM EXPERIMENT WHERE expID=?', [params.id],  recieveMySqlResults)
