
function butonrec(){
    Recorrido.style.backgroundColor = "#741e71"
    Recorrido.style.color="#f8e2f7"
    map.on('click', function(e) {        
        let Loc= e.latlng;    
        console.log(Loc)
        latsel=Loc.lat
        longsel=Loc.lng
         inicio = document.getElementById("dateAndTimePicker1").value;
        final = document.getElementById("dateAndTimePicker2").value;
        recotable()  
        marker.setLatLng([latsel, longsel])
    });
  
}
async function recotable() { 
let headersList = {
    "Accept": "*/*",
    "Content-Type": "application/json"
}
let bodyContent = JSON.stringify({
    "lat": latsel,
    "lon": longsel,
    "ini": inicio,
    "fin": final
});

await fetch("/recor", {
    method: "POST",
    body: bodyContent,
    headers: headersList
}).then(res => {
    return res.json() 
}).then(data => {
 
    let rec
    console.log("data: "+data)
    if (data.fecha=="0" && data.hora=="0"){
        window.alert("No hay registro en esta posición") 
        }else{
            data = data.positions
             rec = data.map(function(bar){
            fec=bar.Fecha.split("T")
            console.log(fec)
            return '<li>'+fec[0]+' '+bar.Hora+'</li>'
          })
          document.getElementById("rec").innerHTML = rec;}

          Recorrido.style.backgroundColor = "#f8e2f7"
          Recorrido.style.color="#70747c"
          map.off('click')
})

}