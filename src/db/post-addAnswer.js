module.exports = (transaction, recieveMySqlResults, params) => transaction.query('Insert into answers( subjectID, itemName, associatedExpID, decisionTime, selectedOption, dateTaken) VALUES (?, ?, ?, ?, ?, ?);', [params.subjectID, params.itemName, params.associatedExpID, params.decisionTime, params.selectedOption, params.dateTaken],  recieveMySqlResults)