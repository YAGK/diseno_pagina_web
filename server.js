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

app.listen(80, ()=>console.log('Mi servidor está corriendo sobre el puerto 80'))
app.use(express.static(__dirname + "/static"));
const connection = mysql.createConnection({
    host: "disenoyagk.cuompzorqnem.us-east-1.rds.amazonaws.com",
    user: "YAGK01",
    password: "tobiascookiemaxtom",
    database:'diseno',
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
        let lat = msj[0]
        let long = msj[1]
        let date = msj[2]
        let time = msj[3]
        const query = "INSERT INTO datos (Latitud, Longitud, Fecha, Hora) VALUES (' "+ lat +"' , ' "+ 
        long +" ', ' "+ date+"', ' "+time+" ' ) ;"
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

    const query = 'SELECT * FROM datos ORDER BY ID DESC LIMIT 1'

    connection.query(query,(e,data)=>{
        if(e){
            console.log(e)
        }else{            
            let datas = data
            res.status(200).json({
                data: datas
            })
        }
    })
})
