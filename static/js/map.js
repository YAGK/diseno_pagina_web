var map = L.map('map').setView([parseFloat(Lati), parseFloat(Longi)], 13);
var polylinePoints;
var polyline;
PreLa=Lati;
PreLo=Longi;
look=1;
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);
map.flyTo([parseFloat(Lati), parseFloat(Longi)])
function CamMap  (){
console.log("Pre", PreLa, PreLo)
console.log(Lati,Longi);
if(parseFloat(PreLa)!=0.0&&parseFloat(PreLo)!=0.0){
    document.addEventListener("visibilitychange", () => {
        if (document.visibilityState === 'hidden'||look>1) {
            map.flyTo([parseFloat(Lati), parseFloat(Longi), 16])
            look=-1;
        }});
    if(parseFloat(Lati)!=parseFloat(PreLa)&&parseFloat(Longi)!=parseFloat(PreLo)){
        var marker = L.marker([parseFloat(Lati), parseFloat(Longi)]).addTo(map) //Añade marcadores        
        //map.flyTo([parseFloat(Lati), parseFloat(Longi)])
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
    