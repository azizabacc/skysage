
import { forecast ,forecast3hours } from './forecasts.js';
import { config } from './config.js';
import { divClassId,title } from './element.js';
import { showTab } from './buttonEvents.JS';

/* const apiKey ="0ecda526c9c0b753226bce63f940887d" */
const apiKey = config.MY_KEY
let averageTempByDay={}
let averageWindSpeedByDay={}
const citySelect = document.getElementById("citySelect"); 
const citySbmitBtn = document.getElementById('submitCity');
const main = document.querySelector('main');
const header = document.querySelector('header');

const resumecardDisplayer = divClassId("resumecardDisplayer resumecardDisplayerhidden","resumecardDisplayer")
const resumecardDisplayer3hours = divClassId("resumecardDisplayer","resumecardDisplayer3hours");


const plots = document.createElement('div');
plots.className ="plots plotHidden";

const tempPlot = divClassId('plot',"tempPlot")
const windPlot = divClassId('plot',"windPlot")
const humidityPlot = divClassId('plot',"humidityPlot")
const pressurePlot = divClassId('plot',"pressurePlot")


//title sections
//title forcast per day
let titleAverage = title('5 Days Extended Forecast ')

//title forcast graph
let titleplots = title('Forcasts Graphics Over 5 Days ')

let tableDiv = document.querySelector(".tableDiv");
const searchEvent = () =>{
    const cityName = citySelect.value
    let geoApi = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${apiKey}`
    fetch(geoApi)
    .then(response => response.json())
    .then(data=> {
     
        citySelect.innerText="";
        tableDiv.style.display='block';
        tableDiv.children[1].display='flex';
        let lat = Object.values(data[0])[2];
        let lon = Object.values(data[0])[3];
        document.body.style.display='block';
        header.style.height= "50vh"
        main.classList.remove("hidden")
        forecast(lat,lon,averageTempByDay,averageWindSpeedByDay,resumecardDisplayer);
        titleAverage.style.display='block';
        titleplots.style.display='block';
        
        forecast3hours(lat,lon,resumecardDisplayer3hours);
       
    })
    .catch(error => {
      console.log('There was an error!', error);
    });
}
//fetch api 
citySbmitBtn.addEventListener('click',searchEvent);
citySelect.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      searchEvent();
   
    }
  });


//title to show 5 days forcasts

titleAverage.addEventListener('click', ()=>{
  resumecardDisplayer.classList.toggle('resumecardDisplayerhidden');
}) 
//tile to show plots
titleplots.addEventListener('click',()=>{
  plots.classList.toggle("plotHidden");
})
//tile to show menu btns for tabs
let titleTables = document.getElementById('titleTables');
let tableMenuBtns = document.getElementById('tableMenuBtns');
titleTables.addEventListener('click', ()=>{
  tableMenuBtns.classList.toggle("btnHidden");

})
//Buttons
let mixteTableBtn = document.getElementById("mixteTableBtn");
let windTableBtn = document.getElementById("windTableBtn");
let depressionTableBtn = document.getElementById('depressionTableBtn');

//tables
let tab1 = document.getElementById("tab1");
let tab2 = document.getElementById("tab2");
let tab3 = document.getElementById("tab3");

mixteTableBtn.addEventListener('click', ()=>{
showTab(tab1,tab2,tab3);
})

windTableBtn.addEventListener('click', ()=>{
showTab(tab2,tab1,tab3);

})

depressionTableBtn.addEventListener('click', ()=>{
  showTab(tab3,tab1,tab2);

}) 
  
main.append(titleAverage)
main.append(resumecardDisplayer)
main.append(titleplots)
plots.append(tempPlot)
plots.append(windPlot)
plots.append(humidityPlot)
plots.append(pressurePlot)
main.append(plots)






