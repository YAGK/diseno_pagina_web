
async function recotable(latt,lont) { 
await sleep(100);
let inin = document.getElementById("dateAndTimePicker1").value;
let fin = document.getElementById("dateAndTimePicker2").value;
let headersList = {
    "Accept": "*/*",
    "Content-Type": "application/json"
}
console.log("ini: "+inin+" final: "+fin)
let bodyContent = JSON.stringify({
    "lat": latt,
    "lon": lont,
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
    if (data.fecha=="0" && data.hora=="0"){
        document.getElementById("rec").innerHTML ='<li> No hay datos en esta posición </li>'
        }else{
            data = data.positions
             rec = data.map(function(bar){
            fec=bar.Fecha.split("T")
            return '<li>'+fec[0]+' '+bar.Hora+'</li>'
          })
          document.getElementById("rec").innerHTML = rec;}
          
})

}

