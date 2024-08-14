let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

setInterval (function(){
    let currentDate = new Date;
    hrs.innerHTML = (currentDate.getHours() < 10 ? "00" : "") + currentDate.getHours();
    min.innerHTML = (currentDate.getMinutes() < 10 ? "00" : "") + currentDate.getMinutes();
    sec.innerHTML = (currentDate.getSeconds() < 10 ? "00" : "") + currentDate.getSeconds();},1000)
