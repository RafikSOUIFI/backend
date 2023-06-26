require('dotenv').config();
const express = require('express');
const cors =require('cors');
const {getAllItems, getOne, connection, updateOne, addOne} = require("./Mysql/index.js")
const port = process.env.PORT;
const app = express();
app.use(express.json())

const db = require("./Mysql")
app.use(cors());


// Devices
app.get('/',(req,res)=> {
   getAllItems((err,results)=>{
    if(err)res.status(500).send(err)
    else res.status(200).send(results)
   })
})

app.get('/:id',(req,res)=> {
   getOne((err,results)=>{
    if(err)res.status(500).send(err)
    else res.status(200).send(results)
   },[req.params.id])
})

app.put('/:id',(req,res)=>{
   updateOne((err,results)=>{
       if(err) res.status(500).send(err)
       else res.status(200).send("updated")
   },[req.body,req.params.id])
})

app.post('/add',(req,res)=>{
   addOne((err,results)=>{
      if(err) res.status(500).send(err)
      else res.status(200).send("Added to movietube")
  },req.body)
})





app.listen(port, ()=>{
console.log(`listening on ${port}`);
})