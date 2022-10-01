
async function recotable() { 
await sleep(500);
let inin = document.getElementById("dateAndTimePicker1").value;
 let fin = document.getElementById("dateAndTimePicker2").value;
let headersList = {
    "Accept": "*/*",
    "Content-Type": "application/json"
}
console.log("ini: "+inin+" final: "+fin)
let bodyContent = JSON.stringify({
    "lat": latsel,
    "lon": longsel,
    "ini": inin,
    "fin": fin
    
});

await fetch("/recor", {
    method: "POST",
    body: bodyContent,
    headers: headersList
}).then(res => {
    return res.json() 
}).then(data => {
 
    let rec
    console.log("data f: "+data.fecha +"data h: "+data.hora)
    if (data.fecha=="0" && data.hora=="0"){
        console.log("No hay datos")
        document.getElementById("rec").innerHTML ='<li> No hay datos en esta posición </li>'
        }else{
            console.log("Si hay datos")
            data = data.positions
             rec = data.map(function(bar){
            fec=bar.Fecha.split("T")
            console.log(fec)
            return '<li>'+fec[0]+' '+bar.Hora+'</li>'
          })
          document.getElementById("rec").innerHTML = rec;}
          
})

}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
