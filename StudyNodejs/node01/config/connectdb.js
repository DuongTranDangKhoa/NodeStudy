const path = require('path');
require('dotenv').config({
    override: true,
    path: path.join(__dirname, 'development.env')
});
const { Pool } = require('pg');

const pool = new Pool({
    user: process.env.USER || 'postgres',
  host: process.env.HOST || 'localhost',
  database: process.env.DATABASE || 'postgres',
  password: process.env.PASSWORD || '12345',
  port: process.env.PORT || 5432,
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
