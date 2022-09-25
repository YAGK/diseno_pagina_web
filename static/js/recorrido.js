
function butonrec(){
    Recorrido.style.backgroundColor = "#741e71"
    Recorrido.style.color="#f8e2f7"
    map.on('click', function(e) {        
        let Loc= e.latlng;    
        console.log(Loc)
        latsel=Loc.lat
        longsel=Loc.lng
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
    "lon": longsel
});

await fetch("/recor", {
    method: "POST",
    body: bodyContent,
    headers: headersList
}).then(res => {
    return res.json() 
}).then(data => {
    data = data.positions
    if (data.fecha=="0" && data.hora=="0"){
        window.alert("No se detectan datos") 
        }else{
             var rec = data.map(function(bar){
            return '<li>'+bar.Fecha+' '+bar.Hora+'</li>'
          })
          document.getElementById("rec").innerHTML = rec;}

          Recorrido.style.backgroundColor = "#741e71"
          Recorrido.style.color="#f8e2f7"
   
})

}