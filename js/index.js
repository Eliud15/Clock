"use strict";
const fec=()=>{
const fecha=new Date;
let hora=document.querySelector(".hor")
let minutos=document.querySelector(".min")
let segundos=document.querySelector(".seg")
hora.innerHTML=fecha.getHours()
minutos.innerHTML=fecha.getMinutes()
segundos.innerHTML=fecha.getSeconds()
}

fec();

setInterval(fec,1000)
















