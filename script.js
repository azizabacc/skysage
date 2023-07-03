
import { timestampConvertor , meanTemperature} from './functions.js';
import { coordData,resumeCard } from './tags.js';
import { plot } from './plots.js';
import { forecast ,forecast3hours } from './forecasts.js';
import { config } from './config.js';

/* const apiKey ="0ecda526c9c0b753226bce63f940887d" */
const apiKey = config.MY_KEY
let averageTempByDay={}
let averageWindSpeedByDay={}
const citySelect = document.getElementById("citySelect"); 
const citySbmitBtn = document.getElementById('submitCity');
const main = document.querySelector('main');
const header = document.querySelector('header');

const resumecardDisplayer = document.createElement('div');
resumecardDisplayer.id = "resumecardDisplayer";
resumecardDisplayer.className ="resumecardDisplayer resumecardDisplayerhidden"

const resumecardDisplayer3hours = document.createElement('div');
resumecardDisplayer3hours.id = "resumecardDisplayer3hours";
resumecardDisplayer3hours.className ="resumecardDisplayer"

const plots = document.createElement('div');
plots.className ="plots plotHidden";
const tempPlot = document.createElement('div');
tempPlot.id = "tempPlot";
tempPlot.className ='plot';

const windPlot = document.createElement('div');
windPlot.id = "windPlot";
windPlot.className ='plot'
const humidityPlot = document.createElement('div');
humidityPlot.id = "humidityPlot";
humidityPlot.className ='plot'

//title sections
//title forcast per day
let titleAverage = document.createElement('h2');
titleAverage.className = 'titleSection';
titleAverage.innerHTML= '5 Days Extended Forecast ';
titleAverage.style.display= 'none';
//title forcast graph
let titleplots = document.createElement('h2');
titleplots.className = 'titleSection';
titleplots.innerHTML = 'Forcasts Graphics Over 5 Days ';
titleplots.style.display= 'none';
let tableDiv = document.querySelector(".tableDiv");
const searchEvent = () =>{
    const cityName = citySelect.value
    let geoApi = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${apiKey}`
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
//Buttons
let mixteTableBtn = document.getElementById("mixteTableBtn");
let windTableBtn = document.getElementById("windTableBtn");
let depressionTableBtn = document.getElementById('depressionTableBtn');

//tables
let tab1 = document.getElementById("tab1");
let tab2 = document.getElementById("tab2");
let tab3 = document.getElementById("tab3");

mixteTableBtn.addEventListener('click', ()=>{
  tab1.classList.add('visible');
  tab2.classList.remove('visible');
  tab3.classList.remove('visible');
})

windTableBtn.addEventListener('click', ()=>{
tab2.classList.add('visible');
tab1.classList.remove('visible');
tab3.classList.remove('visible');
})

depressionTableBtn.addEventListener('click', ()=>{
tab3.classList.add('visible');
tab1.classList.remove('visible');
tab2.classList.remove('visible');
}) 
  
main.append(titleAverage)
main.append(resumecardDisplayer)
main.append(titleplots)
plots.append(tempPlot)
plots.append(windPlot)
plots.append(humidityPlot)
main.append(plots)






