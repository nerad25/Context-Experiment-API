module.exports = (transaction, recieveMySqlResults) => transaction.query('SELECT * FROM EXPERIMENT', recieveMySqlResults)
