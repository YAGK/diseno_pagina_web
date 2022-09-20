var Lati="10.96703";
var Longi="-74.788";
var map = L.map('map').setView([parseFloat(Lati), parseFloat(Longi)], 16);
var polylinePoints;
var polyline;
var marker = L.marker([parseFloat(Lati), parseFloat(Longi)]).addTo(map) //Añade marcadores   
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);
map.flyTo([parseFloat(Lati), parseFloat(Longi)])

