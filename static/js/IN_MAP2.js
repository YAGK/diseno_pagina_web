var map = L.map('map').setView([parseFloat(Lati), parseFloat(Longi)], 16);
marker = L.marker([parseFloat(Lati), parseFloat(Longi)])
marker2 = L.marker([parseFloat(Lati), parseFloat(Longi)])
var polylinePoints = [];
var polylinePoints2 = [];
var polyline = L.polyline(polylinePoints).addTo(map);
var polyline2 = L.polyline(polylinePoints2).addTo(map);
var markerl = L.marker([parseFloat(Lati), parseFloat(Longi)], {icon: iclupa}); //Añade marcadores   
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);
