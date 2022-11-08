var map = L.map('map').setView([parseFloat(Lati), parseFloat(Longi)], 16);
var polylinePoints; 
var polylinePoints2;
var  polyline
var  polyline2
var rulat1=[]
var rulat2=[]
var rulon1=[]
var rulon2=[]
var pol=0
var pol2=0
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
let marker2 
vhcs=document.getElementById("nvc").value;
console.log("Funciona mapa")
if(vhcs==1||vhcs==3){
    marker = L.marker([parseFloat(Lati), parseFloat(Longi)],{icon: Icon}) //Añade marcadores    
}   
if(vhcs==2||vhcs==3){
    marker2 = L.marker([parseFloat(Lati2), parseFloat(Longi2)],{icon: Icon2}) //Añade marcadores    
} 
PreLa=Lati;
PreLo=Longi;
PreLa2=Lati2;
PreLo2=Longi2;
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
        map.flyTo([parseFloat(Lati), parseFloat(Longi)])            
        if (vhcs==1||vhcs==3){
            marker.setLatLng([parseFloat(Lati), parseFloat(Longi)]).addTo(map)  
            polylinePoints = [
            [parseFloat(PreLa), parseFloat(PreLo)],
                [parseFloat(Lati), parseFloat(Longi)] ];   
                polyline = L.polyline(polylinePoints,{color: 'blue'}).addTo(map);       
                    polyline = L.polyline(polylinePoints,{color: 'red'}).addTo(map);                                
            console.log("Añadí: ", Lati, Longi)
            PreLa=Lati;
            PreLo=Longi;
        } 
        if (vhcs==2||vhcs==3){
            marker2.setLatLng([parseFloat(Lati2), parseFloat(Longi2)]).addTo(map)  
            polylinePoints2 = [
            [parseFloat(PreLa2), parseFloat(PreLo2)],
                [parseFloat(Lati2), parseFloat(Longi2)] ];                   
                polyline2 = L.polyline(polylinePoints,{color: 'red'}).addTo(map);                                
            console.log("Añadí: ", Lati2, Longi2)
            PreLa2=Lati2;
            PreLo2=Longi2;    
        } 
    }
}
}}
CamMap()
function Polimap(){
    console.log("Entro polimap")
    if (vhcs==1||vhcs==3){
        if(parseFloat(Lati)!=parseFloat(PreLa)||parseFloat(Longi)!=parseFloat(PreLo)){
            datos=datos+1;
            console.log("Datos 1: "+datos)
            if(datos>0){ 
            marker.setLatLng([parseFloat(Lati), parseFloat(Longi)]).addTo(map)      
            map.flyTo([parseFloat(Lati), parseFloat(Longi)])
            console.log("Grafico 1")
            pol=pol+1; 
            for(i=1;i<datos;i++){
                polylinePoints = [[parseFloat(rulat1[i]), parseFloat(rulon1[i-1])],[parseFloat(rulat1[i]), parseFloat(rulon1[i])] ];       
                console.log("Crea pol= "+i)    
                if(pol>2){
                polyline.addLatLng([parseFloat(rulat1[i]), parseFloat(rulon1[i])]) 
                } else {
                    polyline = L.polyline([],{color: 'blue'}).addTo(map);
                }       
            } 
            }
        }
        PreLa=Lati;
        PreLo=Longi;
        
    } 

    if (vhcs==2 || vhcs==3){
        console.log("Datos2= "+datos2)
        console.log("Lati= "+Lati2+" Longi ="+Longi2)
        console.log("preLati= "+PreLa2+" Longi ="+PreLo2)
        if(parseFloat(Lati2)!=parseFloat(PreLa2)||parseFloat(Longi2)!=parseFloat(PreLo2)){
            datos2=datos2+1;
            console.log("Datos 2: "+datos2)
            if(datos2>0){
                map.removeLayer(polyline2);
            marker2.setLatLng([parseFloat(Lati2), parseFloat(Longi2)]).addTo(map)      
            map.flyTo([parseFloat(Lati2), parseFloat(Longi2)])
            console.log("Grafico 2 ")
            console.log("Polen2= "+pol)
            pol2=pol2+1; 
            for(i=1;i<datos2;i++){
                polylinePoints2 = [[parseFloat(rulat2[i-1]), parseFloat(rulon2[i-1])],[parseFloat(rulat2[i]), parseFloat(rulon2[i])] ];       
                console.log("Crea pol= "+i)    
                if(pol2>2){
                polyline2.addLatLng([parseFloat(rulat2[i]), parseFloat(rulon2[i])]) 
                } else {
                    polyline2 = L.polyline([],{color: 'red'}).addTo(map);
                } 
                }
            }
    }
    PreLa2=Lati2;
    PreLo2=Longi2;
}
}

function Cambio(){
    console.log("vh= "+vhcs)
    if (vhcs==1){
        map.removeLayer(polyline);
        polyline2 = L.polyline([],{color: 'red'}).addTo(map);
        
    } else if (vhcs==2){
        map.removeLayer(polyline2);
        polyline = L.polyline([],{color: 'blue'}).addTo(map);
    }else{
        map.removeLayer(polyline2);
        map.removeLayer(polyline);
        polyline = L.polyline([],{color: 'blue'}).addTo(map);
        polyline2 = L.polyline([],{color: 'red'}).addTo(map);
    }
    
    console.log("Debio Borrar")

}