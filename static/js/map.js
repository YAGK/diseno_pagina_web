var map = L.map('map').setView([parseFloat(Lati), parseFloat(Longi)], 16);
var polylinePoints;
var polyline;
var marker
PreLa=Lati;
PreLo=Longi;
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);
map.flyTo([parseFloat(Lati), parseFloat(Longi)])
function CamMap  (){
console.log("Pre", PreLa, PreLo)
console.log(Lati,Longi);
if(parseFloat(PreLa)!=11.015&&parseFloat(PreLo)!=-74.8370){
    map.flyTo([parseFloat(Lati), parseFloat(Longi)])
    if(parseFloat(Lati)!=parseFloat(PreLa)&&parseFloat(Longi)!=parseFloat(PreLo)){
        marker = L.marker([parseFloat(Lati), parseFloat(Longi)]).addTo(map) //Añade marcadores        
        map.flyTo([parseFloat(Lati), parseFloat(Longi)])
        polylinePoints = [
            [parseFloat(PreLa), parseFloat(PreLo)],
            [parseFloat(Lati), parseFloat(Longi)] ];   
        polyline = L.polyline(polylinePoints).addTo(map);     
        console.log("Añadí: ", Lati, Longi)
        } 
}
PreLa=Lati;
PreLo=Longi;
}
CamMap()
setInterval(CamMap, 4900)
    
