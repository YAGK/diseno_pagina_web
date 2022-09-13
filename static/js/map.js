var map = L.map('map').setView([parseFloat(Lati), parseFloat(Longi)], 13);
var polylinePoints;
PreLa=0, PreLo=0;
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

function CamMap  (){
console.log("Pre", PreLa, PreLo)
console.log(Lati,Longi);
if(parseFloat(Lati)!=parseFloat(PreLa)&&parseFloat(Longi)!=parseFloat(PreLo)){
    var marker = L.marker([parseFloat(Lati), parseFloat(Longi)]).addTo(map) //Añade marcadores
    //map.flyTo([parseFloat(Lati), parseFloat(Longi)])
    map.flyTo([parseFloat(Lati), parseFloat(Longi)])
    polylinePoints = [
        [parseFloat(PreLa), parseFloat(PreLo)],
        [parseFloat(Lati), parseFloat(Longi)] ];   
    var polyline = Wrld.polyline(polylinePoints).addTo(map);     
    console.log("Añadí: ", Lati, Longi)
    } 
PreLa=Lati;
PreLo=Longi;
}
CamMap()
setInterval(CamMap, 4900)
    