module.exports = (transaction, recieveMySqlResults) => transaction.query('SELECT * FROM OPTION', recieveMySqlResults)
