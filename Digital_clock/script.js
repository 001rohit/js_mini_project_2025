let date1 = document.querySelector("#date1")
let time1 = document.querySelector("#time")


const showTime =()=>{
    let date = new Date()
    let day = date.getDate()
    let month = date.getMonth()+1
    let year = date.getFullYear()
    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()
    let day1 = h<12? "AM":"PM";
    
    h = h<10 ? "0"+h:h;
    m = m<10?"0"+m:m;
    s = s<10?"0"+s:s;

    if(h>12){
        h = h-12
    }

    const week = ["Sun","Mon","Tue","Wed","Thus","Fri","Sat"]
    const mnth =["Jan","Feb","March","Apr","May","Jun","Jul","Aug","Sept","Oct","Nev","Des"]
    date1.innerHTML = `${day} ${mnth[month]} ${year} &nbsp `;
    time1.innerHTML = `${h}:${m}:${s} ${day1}`;
}
// showTime()
setInterval(showTime,400)
// let a=1
// setInterval(()=>console.log("🤑"),1000)

// console.log(day,month,year)