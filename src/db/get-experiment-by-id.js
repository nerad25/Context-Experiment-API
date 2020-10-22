module.exports = (transaction, recieveMySqlResults) => 
transaction.query('SELECT timeLimit, dateCreated FROM EXPERIMENT WHERE timeLimit=?, dateCreated=?', recieveMySqlResults)
