const express = require("express");
const app = express();
const { Pool }=require("pg");

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: '',
    password: 'passwordhere',
    port: 5432
});

app.get("/customers", (req, res)=>{
    pool.query("SELECT * FROM customers", (error, result)=>{
       res.json(result.rows);
       console.log("oshoiw", result.rows[0].i);
    })
})

app.get("/products", (req, res)=>{
    console.log("Hello")
    pool.query("SELECT * FROM products", (error, result)=>{
        res.json(result.rows);
    })
})

app.get("/suppliers", (req, res)=>{
    pool.query("SELECT * FROM suppliers", (error, result)=>{
        res.json(result.rows);
    })
})

app.listen(3000, function (){
    console.log("Hey there!!")})