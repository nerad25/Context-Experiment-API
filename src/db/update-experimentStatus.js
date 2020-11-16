module.exports = (transaction, recieveMySqlResults, params) => transaction.query('UPDATE experiment SET isActive=? WHERE experimentName=?;', [params.status, params.expName],  recieveMySqlResults)
