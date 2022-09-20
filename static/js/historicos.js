
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
        if (data.length != 0) {
            data = data.positions
            map.removeLayer(polyline);
            polyline = L.polyline([]).addTo(map);
            
            for (const d of data) {
                const currentLatitude = parseFloat(d.Latitud)
                const currentLongitud = parseFloat(d.Longitud)
                    map.flyTo([currentLatitude, currentLongitud])
                    marker.setLatLng([currentLatitude, currentLongitud])
                        map.flyTo([currentLatitude, currentLongitud])
                        polyline.addLatLng([currentLatitude, currentLongitud])              
            }
        }
    })
}