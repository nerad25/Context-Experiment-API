const mysql = require('mysql')

module.exports = () => {
    const connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'password',
        database : 'contextdatabase'
    })

    return connection
}