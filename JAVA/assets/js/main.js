let mbl=document.getElementById('mebleg')
let f=document.getElementById('faiz')
let mdt=document.getElementById('muddet')
let ga=document.getElementById('ga')
let mp=document.getElementById('mp')
let btn=document.getElementById('btn')



btn.addEventListener('click',function(){
    let fm=(parseFloat(mbl.value)*parseFloat(f.value))/100;
    document.getElementById('ga').innerHTML=parseFloat(mbl.value)+fm;
    document.getElementById('mp').innerHTML=parseFloat(parseFloat(mbl.value)+fm)/(parseFloat(mdt.value));
})