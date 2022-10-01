var Lati="10.96703";
var Longi="-74.788";
let iclupa = L.icon({
    iconUrl: '/resources/lupa.png',
    iconSize: [70, 90],
    iconAnchor: [40, 50],
   
});
var map = L.map('map').setView([parseFloat(Lati), parseFloat(Longi)], 16);
var polylinePoints = [];
var polyline = L.polyline(polylinePoints).addTo(map);
var marker = L.marker([parseFloat(Lati), parseFloat(Longi)], {icon: iclupa}).addTo(map); //Añade marcadores   
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

