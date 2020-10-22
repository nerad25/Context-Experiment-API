module.exports = (transaction, recieveMySqlResults) => transaction.query('SELECT * FROM ANSWERS', recieveMySqlResults)
