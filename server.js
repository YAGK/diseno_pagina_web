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
let lat=[]
let long=[]
let date=[]
let time=[]
let vhc
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
    vhc=msj[4]
    lat[vhc-1] = msj[0]
    long[vhc-1] = msj[1]
    date[vhc-1] = msj[2]
    time[vhc-1] = msj[3]
    
    if (vhc==1)
    {
    table='datos'
    } else {
        table='datos2'
    }   
    const query = "INSERT INTO "+table+"(Latitud, Longitud, Fecha, Hora) VALUES (' " + lat[vhc-1] + "' , ' " +
        long[vhc-1] + " ', ' " + date[vhc-1] + "', ' " + time[vhc-1] + " ' ) ;"
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
        lat: lat[0],
        long: long[0],
        date: date[0],
        time: time[0],
    })
})

app.get('/getData2', (req, res) => {
    res.status(200).json({
        lat: lat[1],
        long: long[1],
        date: date[1],
        time: time[1],
    })
})

app.get('/historicos', (req, res) => {
    res.sendFile(__dirname + '/historicos.html')
})


app.post("/registro", (req, res) => {

    try {
        const initime = req.body.ini
        const fintime = req.body.fin
        const tabla=req.body.table
        if (tabla==1)
        {
        tabled='datos'
        } else {
            tabled='datos2'
        }   
        solQuery = "Select DISTINCT Latitud, Longitud FROM "+tabled+" WHERE timestamp(Fecha,Hora) between ' " +
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

app.post("/recor", (req, res) => {
    try {
        const latsel = req.body.lat
        const lonsel = req.body.lon
        const initime = req.body.ini
        const fintime = req.body.fin  
        const zoom =req.body.zoom
        const rad=(700-40*zoom)/1000
        const tabla=req.body.table
        if (tabla==1)
        {
        tabled='datos'
        } else {
            tabled='datos2'
        }   
        solQuery ="Select DISTINCT Fecha, Hora,acos(sin(radians("+latsel+"))*sin(radians(Latitud)) + cos(radians("+latsel+
        "))*cos(radians(Latitud))*cos(radians("+lonsel+")-(radians(Longitud)))) * (6371)  From "+tabled+" Where acos"+
        "(sin(radians("+latsel+"))*sin(radians(Latitud)) + cos(radians("+latsel+"))*cos(radians(Latitud))*cos(radians("+
        lonsel+")-(radians(Longitud)))) * (6371) <"+rad+" and timestamp(Fecha,Hora) between ' " +
        initime + "' and '" + fintime + "'"
       
        connection.query(solQuery, (e, data) => {
            if (e) {
                console.log(e)
            } else if (data.length == 0) {
                res.status(200).json({
                    fecha: '0',
                    hora: '0'
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


