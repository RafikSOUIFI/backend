const mysql = require('mysql2');
const urlDB= process.env.DATABASE_URL

const pool = mysql.createPool(urlDB);
const connection = pool.promise();

connection
  .execute('SELECT 1')
  .then(() => {
    console.log('Database connected');
  })
  .catch((err) => {
    console.log(err);
  });

const getAllItems = () => {
    const sql = 'SELECT * FROM items';
    return pool.promise().query(sql)
      .then(([rows, fields]) => {
        return rows;
      })
      .catch((err) => {
        throw err;
      });
  };
  
  const getOne = (data) => {
    const sql = 'SELECT * FROM items WHERE id = ?';
    return pool.promise().query(sql, data)
    .then(([rows, fields]) => {
        return rows;
      })
      .catch((err) => {
        throw err;
      });
  };
  
  const updateOne = (data) => {
    const sql = 'UPDATE items SET ? WHERE id = ?';
    return pool.promise().query(sql, data);
  };
  
  const addOne = (data) => {
    const sql = 'INSERT INTO items SET ?';
    return pool.promise().query(sql, data);
  };
  
module.exports = { getAllItems, getOne, updateOne, addOne, connection};
