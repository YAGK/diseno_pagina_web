var Lati="10.96703";
var Longi="-74.788";
let iclupa = L.icon({
    iconUrl: '/resources/lupa.png',
    iconSize: [80, 100],
    iconAnchor: [55, 45],
   
});
var map = L.map('map').setView([parseFloat(Lati), parseFloat(Longi)], 16);
let marker = L.marker([parseFloat(Lati), parseFloat(Longi)])
var polylinePoints = [];
var polyline = L.polyline(polylinePoints).addTo(map);
var markerl = L.marker([parseFloat(Lati), parseFloat(Longi)], {icon: iclupa}); //Añade marcadores   
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);
//asdasdasd
