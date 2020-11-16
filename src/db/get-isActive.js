module.exports = (transaction, recieveMySqlResults, params) => transaction.query('SELECT experimentName FROM EXPERIMENT WHERE isActive=?', [params.status], recieveMySqlResults)
