const path = require('path');
require('dotenv').config({
    override: true,
    path: path.join(__dirname, 'development.env')
});
const { Pool } = require('pg');

const pool = new Pool({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT
});

(async () => {
    const client = await pool.connect();
    
    try {
        const { rows } = await client.query('SELECT current_user');
        const currentUser = rows[0]['current_user'];
        console.log(currentUser);
    } finally {
        client.release();
    }
})();
