const mysql = require('mysql2');
const HOST = process.env.HOST;
const USER = process.env.USER;
const PASSWORD = process.env.PASSWORD;
const DATABASE = process.env.DATABASE;

  const urlDB=`mysql://${process.env.USER}:${process.env.PASSWORD}@${process.env.HOST}:${process.env.PORT}/${process.env.DATABASE}`
const connection = mysql.createConnection(urlDB)
connection.connect((err)=>{
    if (err) {
        console.log(err)
    }
    else {
        console.log("Database connected")
    }
})

//devices
const getAllItems = (callback) => {
    const sql ="SELECT * FROM items"
    connection.query(sql,(err,results)=>{
        callback(err,results)
    })
};

const getOne = (callback,data) =>{
    const sql='SELECT * FROM items WHERE id = ?'
    connection.query(sql,data,(err,results)=>{
        callback(err,results)
    })
}


const updateOne = (callback,data) =>{
    const sql='update product set ? where id=?'
    connection.query(sql,data,(err,results)=>{
        callback(err,results)
    })
}

const addOne = (callback,data) =>{
    const sql='INSERT INTO items set ?'
    connection.query(sql,data,(err,results)=>{
        callback(err,results)
    })
}


module.exports= { getAllItems,getOne, connection, updateOne, addOne};