//sudo apt-get install nodejs
//... npm
//npm i express
//npm i mysql

// ------------------------------
//npm i pm2 -g
//pm2 start server.js
const express = require('express')
const app = express()
const udp = require('dgram')
const mysql = require('mysql')

app.listen(12600, ()=>console.log('Mi servidor está corriendo sobre el puerto 12600'))
const connection = mysql.createConnection({
    host: "localhost",
    username: "root",
    password: "1234567890"
})

const server = udp.createSocket('udp4')
server.on('listening',()=>{
    console.log('Servidor UDP corriendo 52000')
})
server.bind(52000)
server.on('message',(data)=>{
    console.log(data)
    let dataFormatted = data.toString('utf8')
        console.log(dataFormatted)
        let lat = ''
        let long = ''
        let date = ''
        let time = ''
        const query = "INSERT INTO datos (Latitud, Longitud, Fecha, Hora) VALUES (' "+ lat +"' , ' "+ 
        long +" ', ' "+ date+"', ' "+time+" ' ) ;"
        connection.query(query,(e)=>{
            if(e){
                console.log(e)
            }
        })
})

app.get('/',(req,res)=>{
    console.log(__dirname)
    res.sendFile(__dirname+'/pagina_sobria.html')
})

app.get('/getData',(req,res)=>{
    res.send('Datos de la base de datos')
    const query = `SELECT * FROM datos`
    connection.query(query,(e,data)=>{
        if(e){
            console.log(e)
        }else{
            console.log(data)
        }
    })
})