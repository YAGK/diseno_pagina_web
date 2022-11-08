var Lati="10.96703";
var Longi="-74.788";
var Lati2="10.96703";
var Longi2="-74.788";
var datos=0;
var datos2=0;
var vhv=1
var vha=1;

function act(){
    vhcs=document.getElementById("nvc").value;
    if (vhcs==1 || vhcs==3){
        vha=1
        fetch('/getData')
        .then(res => res.json())
        .then(data => {        
            let str = [];
            console.log("Esta es la data 1 =",data)
            vhc=data.vhc
            str[0]= data.lat
            str[1]= data.long
            str[2]= data.date
            str[3]= data.time
            Cno="No hay datos"
           
                Lati=str[0];
                Longi=str[1];
                str[2] = new Date(str[2])
                str[2] = str[2].getFullYear() +':'+(str[2].getMonth()+1).toString().padStart(2,'0') +':' + (str[2].getDate()+1).toString().padStart(2,'0')
          
    
                if (data.length==0) {
                    document.getElementById("lat").innerText = Cno;
                    document.getElementById("long").innerText = Cno;
                    document.getElementById("date").innerText = Cno;
                    document.getElementById("time").innerText = Cno;

                } else {
                    document.getElementById("lat").innerText = str[0];
                    document.getElementById("long").innerText = str[1];
                    document.getElementById("date").innerText = str[2];
                    document.getElementById("time").innerText = str[3];

                }
                rulat1[datos]=Lati;
                rulon1[datos]=Longi;
                Polimap()
                PreLa=Lati;
                PreLo=Longi;
                
        
        });

    } 
    if(vhcs==2 || vhcs==3){
        vha=2
        fetch('/getData2')
        .then(res => res.json())
        .then(data => {        
            let str = [];
            console.log("Esta es la data 2 =",data)
            vhc=data.vhc
            str[0]= data.lat
            str[1]= data.long
            str[2]= data.date
            str[3]= data.time
            Cno="No hay datos"
           
                Lati2=str[0];
                Longi2=str[1];
                str[2] = new Date(str[2])
                str[2] = str[2].getFullYear() +':'+(str[2].getMonth()+1).toString().padStart(2,'0') +':' + (str[2].getDate()+1).toString().padStart(2,'0')
          
                if (data.length==0) {
                    document.getElementById("lat").innerText = Cno;
                    document.getElementById("long").innerText = Cno;
                    document.getElementById("date").innerText = Cno;
                    document.getElementById("time").innerText = Cno;

                } else {
                    document.getElementById("lat").innerText = str[0];
                    document.getElementById("long").innerText = str[1];
                    document.getElementById("date").innerText = str[2];
                    document.getElementById("time").innerText = str[3];

                }
                rulat2[datos2]=Lati2;
                rulon2[datos2]=Longi2;
                Polimap()
                PreLa2=Lati2;
                PreLo2=Longi2;
                
    });
    
    }
}
    act()
    setInterval(act, 4900)
     