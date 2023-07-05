import { cleanDiv } from './clean.js';
import { timestampConvertor , meanTemperature,removeChild,infoPerDay, convertTimeStamp} from './functions.js';
import { coordData,resumeDayCard,resumeCard ,tagInfoday,windTab, depressionTab, resumeCardScroll} from './tags.js';
import { plot, plotErrorBar } from './plots.js';
import { config } from './config.js';

const apiKey = config.MY_KEY;
let main1 = document.getElementById("main1");
let dayContainer = document.createElement('div');
let header = document.querySelector('header');
let tableContainer1 = document.querySelector('#tab1');
let tableContainer2 = document.querySelector('#tab2');
let tableContainer3 = document.querySelector('#tab3');
let dayTitle = document.getElementById('dayTitle');
let nowPrediction = document.createElement("div");
nowPrediction.id="nowPrediction";


export const forecast = (lat,lon,averageTempByDay,averageWindSpeedByDay,resumecardDisplayer) =>{ 
    //let headerData = document.createElement('div')
    //headerData.id='headerData';
    let forecastApi = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&&units=metric&lang=english&appid=${apiKey}`;
    fetch(forecastApi)
    .then(response => response.json())
    .then(data=> {

        let name = data.city.name;
        let population = data.list[0].visibility.toString();
        let sunrise = timestampConvertor(data.city.sunrise)
        let sunset = timestampConvertor(data.city.sunset)
        //coordData(headerData,name,population,sunrise,sunset);
/*         if(header.querySelector("#headerData")){
            header.removeChild(header.querySelector("#headerData"))
            header.append(headerData) 
            }else{
            header.append(headerData) 
            } */
        for(let i=0; i<data.cnt; i++){
        meanTemperature(data.list,averageTempByDay,averageWindSpeedByDay);
        const nb = 3;
        const rainValue = nb.toString()+"h";   
        } 
//remove previous card at city change

    cleanDiv(resumecardDisplayer);
    for(let j=0;j<Object.values(averageTempByDay).length;j++){
        resumecardDisplayer.append(resumeDayCard(Object.keys(averageTempByDay)[j],Object.values(averageTempByDay)[j],Object.values(averageWindSpeedByDay)[j]));

    }
    //clean  tableContainer1 when we look for an other city
    cleanDiv(tableContainer1);

    tableContainer1.append(tagInfoday(data.list));
    //clean  tableContainer2 when we look for an other city

    cleanDiv(tableContainer2)
    tableContainer2.append(windTab(data.list));
        //clean  tableContainer3 when we look for an other city

        cleanDiv(tableContainer3)
        tableContainer3.append(depressionTab(data.list));

})

.catch(error => {
  console.log('There was an error!', error);
});

}
//forecast weather api 
export const forecast3hours = (lat,lon,resumecardDisplayer3hours,tempPlot,windPlot) =>{ 
    let forecastApi = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&lang=english&appid=${apiKey}`;
fetch(forecastApi)
.then(response => response.json())
.then(data=> {
console.log(data);
    
    let xdateHour= [];
    let ytemp = [];
    let errorTemp =[]
    let ywind = [];
    let yhumidity =[];
    let ypressure = []
    dayTitle.append(convertTimeStamp(data.list[0].dt));
    resumeCard(data.list[0].dt_txt,data.list[0].main.temp,data.list[0].weather[0],data.list[0].wind.speed,nowPrediction);
    if(main1.querySelector("#nowPrediction")){
        main1.removeChild(main.querySelector("#nowPrediction"))
        main1.prepend(nowPrediction) 
        }else{
        main1.prepend(nowPrediction) 
        }
   
    let sameDay = true;
    //main.prepend(nowPrediction)
    resumecardDisplayer3hours.append(resumeCardScroll(data.list[0].dt_txt,data.list[0].main.temp,data.list[0].weather[0],'resumeCardContainer'));
    xdateHour.push(data.list[0].dt_txt);
    ytemp.push(data.list[0].main.temp);
    errorTemp.push(data.list[0].main.temp_max-data.list[0].main.temp_min)
    ywind.push(data.list[0].wind.speed);
    yhumidity.push(data.list[0].main.humidity);
    ypressure.push(data.list[0].main.pressure)
    for(let i=1; i<data.cnt; i++){   
        if(data.list[0].dt_txt.slice(8,10)==data.list[i].dt_txt.slice(8,10)){
            resumecardDisplayer3hours.append(resumeCardScroll(data.list[i].dt_txt,data.list[i].main.temp,data.list[i].weather[0],'resumeCardContainer'));
        }
     

        xdateHour.push(data.list[i].dt_txt);
        ytemp.push(data.list[i].main.temp);
        errorTemp.push(data.list[i].main.temp_max-data.list[i].main.temp_min)
        ywind.push(data.list[i].wind.speed);
        yhumidity.push(data.list[i].main.humidity);
        ypressure.push(data.list[i].main.pressure)
        console.log(errorTemp);
    } 

    plotErrorBar(xdateHour,ytemp,errorTemp,'tempPlot','Temperature Forecasts','Time','Temperature in °C')
    plot(xdateHour,ywind,'windPlot','white','Wind Forecasts','Time','Wind Speed in km/h')
    plot(xdateHour,yhumidity,'humidityPlot','white','Humidity Forecasts','Time','Humidity in %')
    plot(xdateHour,ypressure,'pressurePlot','white','Pressure Forecasts','Time','Pressure in hPa')

    
})
.catch(error => {
  console.log('There was an error!', error);
});

}


