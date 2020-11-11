module.exports = (transaction, recieveMySqlResults, params) => 
transaction.query('INSERT INTO question (itemName, associatedExpID, attribute1, attribute2, decoyTargetingA, decoyTargetingB, target, unavailable) VALUES (?, ?, ?, ?, ?, ?, ?, ?);',
[params.itemName, params.associatedExpId, params.att1, params.att2, params.decoyTargetA, params.decoyTargetB, params.target, params.unavaliable],
recieveMySqlResults)
