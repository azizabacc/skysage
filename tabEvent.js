import { depressionTab } from "./tags";

//Buttons
let mixteTableBtn = document.getElementById("mixteTableBtn");
let windTableBtn = document.getElementById("windTableBtn");
let depressionTableBtn = document.getElementById('depressionTableBtn');

//tables
let tab1 = document.getElementById("tab1");
let tab2 = document.getElementById("tab2");
let tab3 = document.getElementById("tab3");

mixteTableBtn.addEventListener('click', ()=>{
    //tab1.style.display='block';
    tab1.classList.toggle('visible');
})
  
 windTableBtn.addEventListener('click', ()=>{
  tab2.classList.toggle('visible')
})

depressionTableBtn.addEventListener('click', ()=>{
  tab3.classList.toggle('visible')
}) 