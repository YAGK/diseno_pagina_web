
map = L.map('map').setView([parseFloat(Lati), parseFloat(Longi)], 16);
marker = L.marker([parseFloat(Lati), parseFloat(Longi)]).addTo(map) //Añade marcadores  

//ini = '2022-09-16 12:30:00'
//fin = '2022-09-17 22:00:00'
console.log("Se realizo los historicos inicio", inicio)

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

    let response = await fetch("/registro", {
        method: "POST",
        body: bodyContent,
        headers: headersList
    }).then(res => {
        return res.json() //quitar cabeceras 
    }).then(Data => {
        console.log(Data)

        PreLa = Data[0].Latitud
        PreLo = Data[0].Longitud
        for (i = 1; i < length(Data); i++) {
            Lati = Data[i].Latitud
            Longi = Data[i].Longitud
            if (parseFloat(PreLa) != 11.015 && parseFloat(PreLo) != -74.8370) {
                map.flyTo([parseFloat(Lati), parseFloat(Longi)])
                if (parseFloat(Lati) != parseFloat(PreLa) && parseFloat(Longi) != parseFloat(PreLo)) {
                    marker.setLatLng([parseFloat(Lati), parseFloat(Longi)])
                    map.flyTo([parseFloat(Lati), parseFloat(Longi)])
                    polylinePoints = [
                        [parseFloat(PreLa), parseFloat(PreLo)],
                        [parseFloat(Lati), parseFloat(Longi)]];
                    polyline = L.polyline(polylinePoints).addTo(map);
                    console.log("Añadí: ", Lati, Longi)
                }
            }
            Prela = Lati
            Prelo = Longi
        }
    })
}