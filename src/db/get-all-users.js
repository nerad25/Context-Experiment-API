module.exports = (transaction, recieveMySqlResults) => transaction.query('SELECT * FROM USER', recieveMySqlResults)
