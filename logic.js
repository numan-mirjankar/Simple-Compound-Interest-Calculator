
let bt=document.getElementById("btn");
let display=document.getElementById("disp");

bt.addEventListener("click",()=>{
    event.preventDefault();
    let p=parseFloat(document.getElementById("principal").value);
let r=parseFloat(document.getElementById("Intrest").value);
let t=parseFloat(document.getElementById("time").value);
    let si=(p*(t/12)*r);
    let j=si/100;
    display.innerHTML="Simple Intrest is"+j.toFixed(2);
})