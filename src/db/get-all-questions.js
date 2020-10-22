module.exports = (transaction, recieveMySqlResults) => transaction.query('SELECT * FROM QUESTION', recieveMySqlResults)
