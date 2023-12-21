const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',     
    user: 'root', 
    password: '1995', 
    database: 'mysql'  
});

connection.connect(error => {
    if (error) {
        console.error('Error connecting to the database:', error);
        return;
    }
    console.log('Connected to the MySQL database.');
});

module.exports = connection;
