<<<<<<< HEAD



=======
>>>>>>> 18e544775af7f64cb209a35d10194c7f225f411f
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
<<<<<<< HEAD
map.flyTo([parseFloat(Lati), parseFloat(Longi)], 14)
=======
map.flyTo([parseFloat(Lati), parseFloat(Longi)])
>>>>>>> 18e544775af7f64cb209a35d10194c7f225f411f
}
mapita()
setInterval(mapita, 4900)