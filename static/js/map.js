var map = L.map('map').setView([parseFloat(Lati), parseFloat(Longi)], 13);
var polylinePoints;
var polyline;
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
if(parseFloat(PreLa)!=0.0&&parseFloat(PreLo)!=0.0){
    document.onvisibilitychange = () => {
        if (document.visibilityState === 'hidden') {
            document.title("Estoy oculto")
            map.flyTo([parseFloat(Lati), parseFloat(Longi)],18) 
        }
    /* document.addEventListener("visibilitychange", () => {
        if (document.visibilityState === "hidden") {
            document.title("Estoy oculto")
            map.flyTo([parseFloat(Lati), parseFloat(Longi)],18)            
        }}); */
    if(parseFloat(Lati)!=parseFloat(PreLa)&&parseFloat(Longi)!=parseFloat(PreLo)){
        var marker = L.marker([parseFloat(Lati), parseFloat(Longi)]).addTo(map) //Añade marcadores        
        map.flyTo([parseFloat(Lati), parseFloat(Longi)],16)
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
    