inicio=document.getElementById("dateAndTimePicker1").innerText;
final=document.getElementById("dateAndTimePicker2").innerText;

let info={ini:inicio.value,fin:final.value}
fetch("/Registro", { //peticion http
    method: 'POST', // tipo de peticion put get delete post , post manda informacion nueva , put actualiza algo existente 
    body: JSON.stringify(info), // just in case 
    headers: {
        'Content-Type': 'application/json'
    }
}).then(res => {
    return res.json() //quitar cabeceras 
}).then(Data=> {

PreLa=Data[0].Latitud
PreLo=Data[0].Longitud
for (i=1;i<length(Data);i++){
    Lati=Data[i].Latitud
    Longi=Data[i].Longitud
    if(parseFloat(PreLa)!=11.015&&parseFloat(PreLo)!=-74.8370){
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
    Prela=Lati
    Prelo=Longi
}
})