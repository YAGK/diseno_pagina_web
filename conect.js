function act(){
fetch('DBConect.php')
.then(res => res.json())
.then(data => {
    //console.log(data);
    let str = [];
    data.map(item => {
        str[0]= `${item.LATITUD} `
        str[1]= `${item.LONGITUD} `
        str[2]= `${item.FECHA}`
        str[3]= `${item.HORA} `
    });
           console.log(str);
            document.getElementById("lat").innerText = str[0];
            document.getElementById("long").innerText = str[1];
            document.getElementById("date").innerText = str[2];
            document.getElementById("time").innerText = str[3];
        

});
}
act()
setInterval(act, 4900)





  