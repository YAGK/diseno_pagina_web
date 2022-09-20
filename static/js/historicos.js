
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
            let previousLat = 0
            let previousLong = 0
            data = data.positions
            for (const i in data) {
                const currentLatitude = data[i].Latitud
                const currentLongitud = data[i].Longitud
                if (parseFloat(previousLat) != 11.015 && parseFloat(previousLong) != -74.8370) {
                    map.flyTo([parseFloat(currentLatitude), parseFloat(currentLongitud)])
                    if (parseFloat(currentLatitude) != parseFloat(previousLat) && parseFloat(currentLongitud) != parseFloat(previousLong)) {
                        marker.setLatLng([parseFloat(currentLatitude), parseFloat(currentLongitud)])
                        map.flyTo([parseFloat(currentLatitude), parseFloat(currentLongitud)])

                        if (i > 1) {
                            polylinePoints = [
                                [parseFloat(previousLat), parseFloat(previousLong)],
                                [parseFloat(currentLatitude), parseFloat(currentLongitud)]];
                            polyline = L.polyline(polylinePoints).addTo(map);                     
                        }
                    }
                }
                previousLat = currentLatitude
                previousLong = currentLongitud
                
            }
        }
    })
}