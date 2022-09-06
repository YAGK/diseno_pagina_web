var map = L.map('map').setView([parseFloat(Lati), parseFloat(Longi)], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);
function mapita  (){
console.log(Lati,Longi); 
var marker = L.marker([parseFloat(Lati), parseFloat(Longi)]).addTo(map); //Añade marcadores
map.flyTo([parseFloat(Lati), parseFloat(Longi)], 14)
}
mapita()
setInterval(mapita, 4900)