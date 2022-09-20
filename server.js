require('dotenv').config()
const express = require('express')
const app = express()
const udp = require('dgram')
const https = require('https');
const mysql = require('mysql')
const { reset } = require('nodemon')
const bodyParser = require("body-parser")
app.use(express.urlencoded())
app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
let lat
let long
let date
let time
app.listen(80, () => console.log('Mi servidor está corriendo sobre el puerto 80'))
app.use(express.static(__dirname + "/static"));
const connection = mysql.createConnection({
    host: process.env.yagk_dns,
    user: process.env.yagk_user,
    password: process.env.yagk_pass,
    database: process.env.yagk_data,
    multipleStatements: true
});
connection.connect();

const server = udp.createSocket('udp4')
server.on('listening', () => {
    console.log('Server UDP ON')
})
server.bind(52000)
server.on('message', (data) => {
    let dataFormatted = data.toString('utf8')
    var msj = dataFormatted.split('%');
    console.log(msj)
    lat = msj[0]
    long = msj[1]
    date = msj[2]
    time = msj[3]
    const query = "INSERT INTO datos (Latitud, Longitud, Fecha, Hora) VALUES (' " + lat + "' , ' " +
        long + " ', ' " + date + "', ' " + time + " ' ) ;"
    connection.query(query, (e) => {
        if (e) {
            console.log(e)
        }
    })
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/pagina_sobria.html')
})



app.get('/getData', (req, res) => {
    res.status(200).json({
        lat: lat,
        long: long,
        date: date,
        time: time
    })
})

app.get('/historicos', (req, res) => {
    res.sendFile(__dirname + '/historicos.html')
})


app.post("/registro", (req, res) => {
    console.log('Soy el post correcto', req.body)
    try {
        const initime = req.body.ini
        const fintime = req.body.fin
        solQuery = "SELECT Latitud, Longitud FROM datos WHERE timestamp(Fecha,Hora) between ' " +
            initime + "' and '" + fintime + "' "
        connection.query(solQuery, (e, data) => {
            if (e) {
                console.log(e)
            } else if (data.length == 0) {
                res.status(200).json({
                    latitud: '0',
                    longitud: '0'
                })
            }
            else {
                console.log("server envio data;",data)


                
                res.status(200).json({
                    positions: data
                })
            }
        })
    }
    catch (e) {
        console.log(e)
    }
});


