module.exports = (transaction, recieveMySqlResults, params) => transaction.query('SELECT COUNT( DISTINCT subjectID ) FROM answers WHERE associatedExpId=?', [params.expID],  recieveMySqlResults)
