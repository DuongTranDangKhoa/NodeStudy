const express = require('express');
var router = express.Router();
const { Pool } = require('pg');

const pool = new Pool({
    user: process.env.USER || 'postgres',
  host: process.env.HOST || 'localhost',
  database: process.env.DATABASE || 'postgres',
  password: process.env.PASSWORD || '12345',
  port: process.env.PORT || 5432,
});
const getAllAccounts = async () => {
    const client = await pool.connect();
    try {
        const { rows } = await client.query('SELECT email, phone, "name" FROM public.account');
        return rows.json();
    } catch (error) {
        console.error('Error executing query:', error);
        throw error;
    } finally {
        client.release();
        
    }
};

// async function getAllAccounts() {
//     const client = await pool.connect(); // Sử dụng await để xử lý promise

//     try {
//         const { rows } = await client.query('SELECT email, phone, "name" FROM public.account');
//         return rows.json();
//     } catch (error) {
//         console.error('Lỗi khi thực hiện truy vấn:', error);
//         throw error;
//     } finally {
//         client.release(); // Giải phóng client cả trong trường hợp thành công và lỗi
//         return rows;
//     }
// };

// // Lưu ý: Hãy chắc chắn gọi hàm này sử dụng await trong một ngữ cảnh async (ví dụ: bên trong một hàm async).

// console.log(getAllAccounts());
module.exports = {getAllAccounts}

