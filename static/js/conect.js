var Lati="10.96703";
var Longi="-74.788";
function act(){
    fetch('/getData')
    .then(res => res.json())
    .then(data => {        
        let str = [];
        console.log("Esta es la data =",data)
   
            str[0]= data.lat
            str[1]= data.long
            str[2]= data.date
            str[3]= data.time
                           
               Lati=str[0];
               Longi=str[1];

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
    

  