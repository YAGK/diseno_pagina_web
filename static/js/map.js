var map = L.map('map').setView([parseFloat(Lati), parseFloat(Longi)], 13);
PreLa=0, PreLo=0;
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);
function CamMap  (){

console.log("Pre", PreLa, PreLo)
console.log(Lati,Longi);
if(parseFloat(Lati)!=parseFloat(PreLa)){
    console.log("Entre", PreLa, Lati)
    clearImmediate(CamMap);
    } 
var marker = L.marker([parseFloat(Lati), parseFloat(Longi)]).addTo(map); //Añade marcadores
map.flyTo([parseFloat(Lati), parseFloat(Longi)])
PreLa=Lati;
PreLo=Longi;
}
if(parseFloat(Lati)!=parseFloat(PreLa)){
    console.log("Pre", PreLa, PreLo)   
        CamMap()
        setInterval(CamMap, 4900)
    }
    clearInterval();
    console.log("Llega hasta acá")