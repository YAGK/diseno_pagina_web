var map = L.map('map').setView([parseFloat(Lati), parseFloat(Longi)], 16);
var polylinePoints;
var polyline;
let Icon = L.icon({
    iconUrl: '/resources/truck.png',
    iconSize: [45, 55],
    iconAnchor: [22.5, 27.5],

});
let marker = L.marker([parseFloat(Lati), parseFloat(Longi)],{icon: Icon}).addTo(map) //Añade marcadores    
PreLa=Lati;
PreLo=Longi;
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);
map.flyTo([parseFloat(Lati), parseFloat(Longi)])
function CamMap  (){

if(parseFloat(PreLa)!=10.96703&&parseFloat(PreLo)!=-74.788){
    map.flyTo([parseFloat(Lati), parseFloat(Longi)])
    if(parseFloat(Lati)!=parseFloat(PreLa)&&parseFloat(Longi)!=parseFloat(PreLo)){
        marker.setLatLng([parseFloat(Lati), parseFloat(Longi)])       
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
    
