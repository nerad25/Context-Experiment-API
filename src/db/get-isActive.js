module.exports = (transaction, recieveMySqlResults, params) => transaction.query('SELECT expID, experimentName FROM EXPERIMENT WHERE isActive=?;', [params.status], recieveMySqlResults)
