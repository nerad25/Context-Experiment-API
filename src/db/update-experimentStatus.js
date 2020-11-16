module.exports = (transaction, recieveMySqlResults, params) => transaction.query('UPDATE experiment SET isActive=? WHERE expID=?;', [params.status, params.expID],  recieveMySqlResults)
