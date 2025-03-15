const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));

const connection = mysql.createConnection({
    host: 'root@localhost:3306',
    user: 'root',
    password: 'HelloWorld+1',
    database: 'userdb'
});

connection.connect(err => {
    if (err) throw err;
    console.log('Connected to MySQL database.');
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
    connection.query(query, [username, password], (err, results) => {
        if (err) throw err;

        if (results.length > 0) {
            res.json({ success: true, message: 'Login successful!' });
        } else {
            res.json({ success: false, message: 'Invalid username or password.' });
        }
    });
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
