const mysql = require('mysql');

const db = mysql.createConnection ({
    host: 'localhost',
    user: 'Sebastianram',
    password: 'Sebasramirezunach',
    database: 'product-category'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});

module.exports = db;
