var map = L.map('map').setView([parseFloat(Lati), parseFloat(Longi)], 16);
var polylinePoints;
var polyline;
let Icon = L.icon({
    iconUrl: '/resources/truck2.png',
    iconSize: [58, 40],
    iconAnchor: [29, 40],

});
let Icon2 = L.icon({
    iconUrl: '/resources/truck.png',
    iconSize: [58, 40],
    iconAnchor: [29, 40],

});
let marker 
vhcs=document.getElementById("nvc").value;
console.log("Funciona mapa")
if(vhcs==1){
    marker = L.marker([parseFloat(Lati), parseFloat(Longi)],{icon: Icon}) //Añade marcadores    
} else {
    marker = L.marker([parseFloat(Lati), parseFloat(Longi)],{icon: Icon2}) //Añade marcadores    
} 
PreLa=Lati;
PreLo=Longi;
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);
map.flyTo([parseFloat(Lati), parseFloat(Longi)])
function CamMap  (){
    console.log("Antes de if vv= "+vhv+" va= "+vha)
if(vhv!=vha){
    map.removeLayer(polyline)
    console.log("Cambio de Vehiculo vv= "+vhv+" va= "+vha)
    vhv=vha
} else {
vhv=vha

if(parseFloat(PreLa)!=10.96703&&parseFloat(PreLo)!=-74.788){
    map.flyTo([parseFloat(Lati), parseFloat(Longi)])
    if(parseFloat(Lati)!=parseFloat(PreLa)&&parseFloat(Longi)!=parseFloat(PreLo)){
        marker.setLatLng([parseFloat(Lati), parseFloat(Longi)]).addTo(map)      
        map.flyTo([parseFloat(Lati), parseFloat(Longi)])
        polylinePoints = [
         [parseFloat(PreLa), parseFloat(PreLo)],
            [parseFloat(Lati), parseFloat(Longi)] ];   
            if(vhcs==1){
                polyline = L.polyline(polylinePoints,{color: 'blue'}).addTo(map);       
            } else {
                polyline = L.polyline(polylinePoints,{color: 'red'}).addTo(map);     
            } 
          
        console.log("Añadí: ", Lati, Longi)
        } 
}
PreLa=Lati;
PreLo=Longi;
}
}
CamMap()
setInterval(CamMap, 4900)
    
