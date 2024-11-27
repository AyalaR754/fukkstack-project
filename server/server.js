const express=require("express")
const app=express()
const PORT=process.env.PORT||4000
const {v4:getID}=require("uuid")
const fs=require("fs")
const {log}=require("./log")

app.use(log)

app.get('/a',(req,res)=>{ res.send("a") })
app.get('/b',(req,res)=>{res.send("b")  })
app.get('/c',(req,res)=>{ res.send("c") })
app.get('/d',(req,res)=>{ res.send("d") })

app.listen(PORT,()=>{console.log(`this run in ${PORT}port`);})