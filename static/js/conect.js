
function act(){
    fetch('http://yagk0kev.ddns.net:80/getData')
    .then(res => res.json())
    .then(data => {
        console.log(data.data);
        let str = [];
        data.data.map(item => {
            console.log(Object.keys(item))
            str[0]= `${item.Latitud} `
            str[1]= `${item.Longitud} `
            str[2]= `${item.Fecha}`
            str[3]= `${item.Hora} `
        });
               console.log(str)
               var Lat=str[0];
               var Lon=str[1];

               str[2] = new Date(str[2])
               str[2] = str[2].getFullYear() +':'+(str[2].getMonth()+1).toString().padStart(2,'0') +':' + (str[2].getDate()+1).toString().padStart(2,'0')
                document.getElementById("lat").innerText = str[0];
                document.getElementById("long").innerText = str[1];
                document.getElementById("date").innerText = str[2];
                document.getElementById("time").innerText = str[3];
    
    });
    }
    act()
    setInterval(act, 4900)
    

  