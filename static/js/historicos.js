let Iconi = L.icon({
    iconUrl: '/resources/marker-a.png',
    iconSize: [50, 90],
    iconAnchor: [25, 90],
});
let Iconf = L.icon({
    iconUrl: '/resources/marker-b.png',
    iconSize: [50, 90],
    iconAnchor: [25, 90],
});
var Lati="10.96703";
var Longi="-74.788";
chis=0;
var markera = L.marker([parseFloat(Lati), parseFloat(Longi)], {icon: Iconi})
var markerb = L.marker([parseFloat(Lati), parseFloat(Longi)], {icon: Iconf})

async function historia() {    
    var inicio = document.getElementById("dateAndTimePicker1").value;
    var final = document.getElementById("dateAndTimePicker2").value;
    document.getElementById("anuncio").innerHTML='<p>Desplácese en el mapa con la lupa <br> para consultar fecha y hora del <br> punto señalado</p>'
    vhcs=document.getElementById("nvc").value;
    let headersList = {
        "Accept": "*/*",
        "Content-Type": "application/json"
    }
    let bodyContent = JSON.stringify({
        "ini": inicio,
        "fin": final,
        "table":vhcs
    });

    await fetch("/registro", {
        method: "POST",
        body: bodyContent,
        headers: headersList
    }).then(res => {
        return res.json() 
    }).then(data => {
        if (data.latitud=="0" && data.longitud=="0"){
        window.alert("Formato inválido o no se encuentran datos") 
        }else{
            if (data.length != 0) {
                data = data.positions
                map.removeLayer(polyline);
                polyline = L.polyline([]).addTo(map);
                lm=data.length
                console.log(lm)
                if (chis>=1){
                    map.removeLayer(markera);
                    map.removeLayer(markerb);
                }
                markera.setLatLng([data[0].Latitud, data[0].Longitud]).addTo(map);
                markerb.setLatLng([data[lm-1].Latitud, data[lm-1].Longitud]).addTo(map);

              
                for (const d of data) {
                   
                    const currentLatitude = parseFloat(d.Latitud)
                    const currentLongitud = parseFloat(d.Longitud)
                        map.flyTo([currentLatitude, currentLongitud])
                    
                       // marker.setLatLng([currentLatitude, currentLongitud])
                            map.flyTo([currentLatitude, currentLongitud])
                            polyline.addLatLng([currentLatitude, currentLongitud])              
                }
            }
        }
        
    })
    map.on('mouseout', function(e) {        
        map.off('mousemove')
        i=0;
     });
     map.on('mouseover', function(e) {       
        i=0; 
         map.on('mousemove', function(e) {        
            let Loc= e.latlng;    
            latsel=Loc.lat
            longsel=Loc.lng
            i++;
           
            markerl.setLatLng([latsel, longsel]).addTo(map);
            if (i==8){
                zoom=map.getZoom()
                recotable(latsel,longsel,zoom)
                i=0;
            } 
         });
      });
     console.log("chis="+chis)
      chis=chis+1;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }