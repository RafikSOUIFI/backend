require('dotenv').config();

const cron = require('node-cron');
const axios = require('axios');

const express = require('express');
const cors =require('cors');
const {getAllItems, getOne, updateOne, addOne, connection} = require("./Mysql/index.js")
const port = process.env.PORT;
const app = express();
app.use(express.json())

const db = require("./Mysql")
app.use(cors());

// Warm-up route
app.get('/warm-up', (req, res) => {
  const sql = 'SELECT 1';
  connection.execute(sql)
    .then(() => {
      res.status(200).send("Warm-up successful");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Warm-up failed");
    });
});
// End Warm-up route
// Warm-up scheduler: Schedule the warm-up task to run every hour ('0 * * * *') or every 3 minuts ('*/3 * * * *')
cron.schedule('*/2 * * * *', () => {
  axios.get(`${process.env.BASE_URL}/warm-up`)
    .then((response) => {
      console.log('Warm-up triggered successfully');
    })
    .catch((error) => {
      console.error('Error occurred during warm-up:', error);
    });
});
// End Warm-up scheduler

app.get('/', (req, res) => {
   getAllItems()
     .then((results) => {
       res.status(200).send(results);
     })
     .catch((err) => {
       res.status(500).send(err);
     });
 });
 
 app.get('/:id', (req, res) => {
   getOne([req.params.id])
     .then((results) => {
       res.status(200).send(results);
     })
     .catch((err) => {
       res.status(500).send(err);
     });
 });

app.put('/:id', (req, res) => {
   updateOne([req.body, req.params.id])
     .then((results) => {
       res.status(200).send("updated");
     })
     .catch((err) => {
       res.status(500).send(err);
     });
 });

app.post('/add', (req, res) => {
   addOne(req.body)
     .then((results) => {
       res.status(200).send("Added to movietube");
     })
     .catch((err) => {
       res.status(500).send(err);
     });
 });

app.listen(port, ()=>{
console.log(`listening on ${port}`);
})