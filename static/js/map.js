var map = L.map('map').setView([parseFloat(Lati), parseFloat(Longi)], 13);
PreLa=0, PreLo=0;
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);
function CamMap  (){
console.log("Pre", PreLa, PreLo)
console.log(Lati,Longi); 
var marker = L.marker([parseFloat(Lati), parseFloat(Longi)]).addTo(map); //Añade marcadores
map.flyTo([parseFloat(Lati), parseFloat(Longi)])
}
if(parseFloat(Lati)!=parseFloat(PreLa)&&parseFloat(Longi)!=parseFloat(PreLo)){
console.log("Pre", PreLa, PreLo)   
    CamMap()
    setInterval(CamMap, 4900)
PreLa=Lati;
PreLo=Longi;
}clearInterval(CamMap)
