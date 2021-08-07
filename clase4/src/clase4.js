

const express=require('express');
const { request } = require('http');

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.listen(8082, ()=> {console.log('Servidor en Por 8082')})

/* -------------------------------- Ejercicio a ------------------------------- */
app.get('/api/sumar/:num1/:num2',(req, res)=>{
    const num1=req.params.num1
    const num2=req.params.num2
    const respuesta=Number (num1)+Number(num2)
    res.status(200)
    res.send(respuesta.toString())
})

/* ------------------------------- Ejercicio b ------------------------------- */
app.get('/api/sumarb',(req,res)=>{
    const {num1, num2}= req.query
    
})





