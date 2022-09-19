//sudo apt-get install nodejs
//... npm
//npm i express
//npm i mysql

// ------------------------------
//npm i pm2 -g
//pm2 start server.js
require('dotenv').config()
const express = require('express')
const app = express()
const udp = require('dgram')
const mysql = require('mysql')

let lat 
let long 
let date 
let time
app.listen(80, ()=>console.log('Mi servidor está corriendo sobre el puerto 80'))
app.use(express.static(__dirname + "/static"));
const connection = mysql.createConnection({
    host: process.env.yagk_dns,
    user: process.env.yagk_user,
    password: process.env.yagk_pass,
    database:process.env.yagk_data,
    multipleStatements: true
    });
    connection.connect();

const server = udp.createSocket('udp4')
server.on('listening',()=>{
    console.log('Server UDP ON')
})
server.bind(52000)
server.on('message',(data)=>{    
    let dataFormatted = data.toString('utf8')        
        var msj = dataFormatted.split('%');
        console.log(msj)
         lat = msj[0]
         long = msj[1]
         date = msj[2]
         time = msj[3]
        const query = "INSERT INTO datos (Latitud, Longitud, Fecha, Hora) VALUES (' "+ lat +"' , ' "+ 
        long +" ', ' "+ date+"', ' "+time+ " ' ) ;"
        connection.query(query,(e)=>{
            if(e){
                console.log(e)
            }
        })
})

app.get('/',(req,res)=>{    
    res.sendFile(__dirname+'/pagina_sobria.html')
})



app.get('/getData',(req,res)=>{
    res.status(200).json({
        lat:lat,
        long:long,
        date:date,
        time:time
    })
})

app.get('/historicos',(req,res)=>{    
    res.sendFile(__dirname+'/historicos.html')
})

app.post("/Registro", (req, res) => {
    var val =[
        req.body.ini,
        req.bodu.fin ]
    initime=val[0]
    fintime=val[1]
    solquery= "SELECT Latitud, Longitud FROM datos WHERE timestamp(Fecha,Hora) between ' "+  
    initime +"' and '"+fintime +"' "
    connection.query(solquery,(e,data)=>{
        if(e){
            console.log(e)
        } else {
            res.status(200).json({
                Latitud,
                Longitud
            })
        }
    })   
});


