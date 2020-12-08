const express = require("express");
const app = express();
const { Pool }=require("pg");

const pool = new Pool({
    user: '',
    host: 'localhost',
    database: 'cyf_ecommerce',
    password: '',
    port: 5432
});

app.get("/customers", (req, res)=>{
    pool.query("SELECT * FROM customers", (error, result)=>{
        res.json(result.rows);
    })
})

app.get("/products", (req, res)=>{
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
    console.log("Hey there!")})