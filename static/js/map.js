var map = L.map('map').setView([parseFloat(Lati), parseFloat(Longi)], 16);
var polylinePoints;
var polyline;
var rulat1=[]
var rulat2=[]
var rulon1=[]
var rulon2=[]
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
}}
CamMap()

function Polimap(){
    console.log("Entro polimap")
    if(vhcs==1){
        if(parseFloat(Lati)!=parseFloat(PreLa)||parseFloat(Longi)!=parseFloat(PreLo)){
            datos=datos+1;
            if(datos>0){
            console.log("Sirve ")
            marker.setLatLng([parseFloat(Lati), parseFloat(Longi)]).addTo(map)      
            map.flyTo([parseFloat(Lati), parseFloat(Longi)])
            console.log("Grafico 1")
            for(i=1;i<datos;i++){
                polylinePoints = [[parseFloat(rulat1[i-1]), parseFloat(rulon1[i-1])],[parseFloat(rulat1[i]), parseFloat(rulon1[i])] ];       
                console.log("Crea pol= "+i)    
                polyline = L.polyline(polylinePoints,{color: 'blue'}).addTo(map);        
            } 
            }
        }
        PreLa=Lati;
        PreLo=Longi;
        
    } else {
        console.log("Datos2= "+datos2)
        console.log("Lati= "+Lati+" Longi ="+Longi)
        console.log("preLati= "+PreLa+" Longi ="+PreLo)
        if(parseFloat(Lati)!=parseFloat(PreLa)||parseFloat(Longi)!=parseFloat(PreLo)){
            datos2=datos2+1;
            if(datos2>0){
            marker.setLatLng([parseFloat(Lati), parseFloat(Longi)]).addTo(map)      
            map.flyTo([parseFloat(Lati), parseFloat(Longi)])
            console.log("Grafico 2 ")    
            for(i=1;i<datos2;i++){
                polylinePoints = [[parseFloat(rulat2[i-1]), parseFloat(rulon2[i-1])],[parseFloat(rulat2[i]), parseFloat(rulon2[i])] ]; 
                console.log("Crea pol2= "+i)  
                polyline = L.polyline(polylinePoints,{color: 'red'}).addTo(map);     
                
            }  
        }
    }
    PreLa=Lati;
    PreLo=Longi;
   
}
}

function Cambio(){
    map.removeLayer(polyline);
    console.log("Debio Borrar")

}