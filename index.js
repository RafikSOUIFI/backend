require('dotenv').config();
const express = require('express');
const cors =require('cors');
const {getAllItems, getOne, updateOne, addOne} = require("./Mysql/index.js")
const port = process.env.PORT;
const app = express();
app.use(express.json())

const db = require("./Mysql")
app.use(cors());

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