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

async function historia() {    
    const inicio = document.getElementById("dateAndTimePicker1").value;
    const final = document.getElementById("dateAndTimePicker2").value;
    let headersList = {
        "Accept": "*/*",
        "Content-Type": "application/json"
    }
    let bodyContent = JSON.stringify({
        "ini": inicio,
        "fin": final
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
                L.marker([data[0].Latitud, data[0].Longitud], {icon: Iconi}).addTo(map);
                L.marker([data[lm-1].Latitud, data[lm-1].Longitud], {icon: Iconf}).addTo(map);
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
}

