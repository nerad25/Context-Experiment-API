module.exports = (transaction, recieveMySqlResults, params) => transaction.query('SELECT dateCreated FROM experiment WHERE expID=?', [params.expID],  recieveMySqlResults)
