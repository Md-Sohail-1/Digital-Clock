
let months =["Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sep","Oct","Nov","Dec"]

//alert(hour+':'+minutes+':'+seconds)

let time = setInterval(function time(){
    let a = new Date();
    let hour =  a.getHours();
    let minutes = a.getMinutes();
    let seconds = a.getSeconds();
    let date = a.getDate();
    let month = months[a.getMonth()];
    let year = a.getFullYear();
    if(hour<=12){
        document.getElementById("hour").innerHTML = hour+" :";
        if(hour<10){
            document.getElementById("hour").innerHTML = "0" +hour;
        }
        else{
            document.getElementById("hour").innerHTML =hour+" :";
        }
            }
    else{
        document.getElementById("hour").innerHTML = (hour-12)+" :";
            }
    if(hour<12 && minutes>=0){
        document.getElementById("am_pm").innerHTML= "Am";
    }
    else{
        document.getElementById("am_pm").innerHTML = "Pm";
    }
    
  document.getElementById("minutes").innerHTML = minutes+" :";
  document.getElementById("seconds").innerHTML = seconds;
    document.getElementById("date").innerHTML = date;
    document.getElementById('month').innerHTML = month;
    document.getElementById('year').innerHTML = year;
},100)

let ab = new Date()
let day = ab.getDate();

//alert(ab.getMonth())
//let ab = setInterval(time(), 0.100)
