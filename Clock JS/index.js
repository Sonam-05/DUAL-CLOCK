const HA = document.querySelector(".HH");
const MA = document.querySelector(".MH");
const SA = document.querySelector(".SH");

let hr = document.querySelector(".hr");
let min = document.querySelector(".min");
let sec = document.querySelector(".sec");

setInterval(() => {

    // analog
    let DATE = new Date();
    let HH = DATE.getHours() * 30;  //1*30 = 30
    let MM = DATE.getMinutes() * 6; //30*6 = 180
    let SS = DATE.getSeconds() * 6; //30*6 = 180

    HA.style.transform = `rotateZ(${HH + (MM / 12)}deg)`;           //30+(180/12) = 45
    MA.style.transform = `rotateZ(${MM}deg)`;
    SA.style.transform = `rotateZ(${SS}deg)`;

    let hour = DATE.getHours();
    if(hour>12){
        hour = 12 - hour ;
    }
    if(hour<10){
        hour = "0" + hour ;
    }
    hr.innerText = `${hour}:`  ;

    let minutes = DATE.getMinutes();
    if(minutes < 10){
        minutes = "0" + minutes ;
    }
    min.innerText = `${minutes}  ` ;

    let seconds = DATE.getSeconds();
    if(seconds < 10){
        seconds = "0" + seconds ;
    }
    sec.innerText = `:${seconds}` ;

});
