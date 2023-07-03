import {  weatherFont, windFont, temperatureFont ,getDayName,infoPerDay,windInfos ,precipitation} from './functions.js';
import { sunLogo ,moonLogo} from './logo.js';

export const resumeCard = (dt_txt,temp,weather,windNb) =>{
    let resumeCardContainer = document.createElement('div')
    resumeCardContainer.className="resumeCardContainer";

    let dateHour = document.createElement('div')
    dateHour.className = "dateHourResumeCard ";
    let day =  document.createElement('h1');
    let hour =document.createElement('h2');
    day.innerText= getDayName(dt_txt.slice(5,10));
    hour.innerText=dt_txt.slice(10,16);
    dateHour.append(day);
    dateHour.append(hour);

    let tempContainer = document.createElement('div')
tempContainer.className = "tempContainerResumeCard subDiv"
    let temperature = document.createElement('div')
    temperature.textContent=temp.toString()+' °C';
    let tempFont = document.createElement('div')
    tempFont.innerHTML=temperatureFont(temp);
    tempContainer.append(temperature);
    tempContainer.append(tempFont);

    let weatherContainer = document.createElement('div');
    weatherContainer.className="weatherContainerResumeCard subDiv";
    let weatherDesc = document.createElement('div');
    weatherDesc.textContent = weather;
    let weathFont = document.createElement('div');
    weathFont.innerHTML= weatherFont(weather);
    weatherContainer.append(weatherDesc);
    weatherContainer.append(weathFont);

    let windContainer =  document.createElement('div');
    windContainer.className ="windContainerResumeCard subDiv"
    let windDesc =  document.createElement('div');
    windDesc.textContent=windNb.toString();
    let winFont =  document.createElement('div');
    winFont.innerHTML=windFont(windNb);
    windContainer.append(windDesc);
    windContainer.append(winFont);

    resumeCardContainer.append(dateHour);
    resumeCardContainer.append(tempContainer);
    resumeCardContainer.append(weatherContainer);
    resumeCardContainer.append(windContainer);

return resumeCardContainer;



}
export const resumeDayCard = (dt_txt,temp,windNb) =>{
    let resumeCardContainer = document.createElement('div')
    resumeCardContainer.className="resumeCardContainer";

    let dateHour = document.createElement('div')
    dateHour.innerHTML=getDayName(dt_txt);
    dateHour.className = "dateHour";

    let tempContainer = document.createElement('div')
    tempContainer.className ="tempContainer";
    let temperature = document.createElement('div')
    temperature.textContent=temp.toString()+' °C';
    let tempFont = document.createElement('div')
    tempFont.innerHTML=temperatureFont(temp);
    tempContainer.append(temperature);
    tempContainer.append(tempFont);



    let windContainer =  document.createElement('div');
    windContainer.className = 'windContainer'
    let windDesc =  document.createElement('div');
    windDesc.textContent=windNb.toString()+' km/h';
    let winFont =  document.createElement('div');
    winFont.innerHTML=windFont(windNb);
    windContainer.append(windDesc);
    windContainer.append(winFont);

    resumeCardContainer.append(dateHour);
    resumeCardContainer.append(tempContainer);
    resumeCardContainer.append(windContainer);

return resumeCardContainer;



}
//return table of data per date and hour
export const tagInfoday = (datalist) => {
    const dailyData = infoPerDay(datalist);
    const table = document.createElement('table');
  
    for (const date in dailyData) {
      const data = dailyData[date];
    
      table.classList.add('data-table');
    
      const tableHeader = document.createElement('thead');
      const headerRow = document.createElement('tr');
    
      const headerDate = document.createElement('th');
      headerDate.className ="tabHeaderDate";
      headerDate.textContent = date;
      headerDate.setAttribute('colspan', '4'); 
    
      headerRow.appendChild(headerDate);
      tableHeader.appendChild(headerRow);
      table.appendChild(tableHeader);
    
      const tableHeader2 = document.createElement('thead');
      const headerRow2 = document.createElement('tr');
    
      const headerTime = document.createElement('th');
      headerTime.textContent = 'Hour';
    
      const headerTemp = document.createElement('th');
      headerTemp.textContent = 'Temperature (°C)';
    
      const headerWindSpeed = document.createElement('th');
      headerWindSpeed.textContent = 'Wind Speed (km/h)';

      const headerWeather = document.createElement('th');
      headerWeather.textContent = 'Weather';
    
      headerRow2.append(headerTime);
      headerRow2.append(headerTemp);
      headerRow2.append(headerWindSpeed);
      headerRow2.append(headerWeather);

    
      tableHeader2.append(headerRow2);
      table.append(tableHeader2);
    
     
      const tableBody = document.createElement('tbody');
    

      for (let i = 0; i < data.length; i++) {
        const rowData = data[i];
    
        const row = document.createElement('tr');
    
        const timeCell = document.createElement('td');
        timeCell.textContent = rowData.time;
    
        const tempCell = document.createElement('td');
        tempCell.textContent = rowData.temp;
    
        const windSpeedCell = document.createElement('td');
        windSpeedCell.textContent = rowData.windSpeed;

        const weatherCell = document.createElement('td');
        weatherCell.textContent = rowData.weather;
    
        row.append(timeCell);
        row.append(tempCell);
        row.append(windSpeedCell);
        row.append(weatherCell);

    
        tableBody.appendChild(row);
      }
    
      table.appendChild(tableBody);
    }
    
    return table;
  }
  //table for wind infos
  export const windTab=(datalist)=>{
    const dailyData = windInfos(datalist);
    const table = document.createElement('table');
  
    for (const date in dailyData) {
      const data = dailyData[date];
    
      table.classList.add('data-table');
    
      const tableHeader = document.createElement('thead');
      const headerRow = document.createElement('tr');
    
      const headerDate = document.createElement('th');
      headerDate.className ="tabHeaderDate";
      headerDate.textContent = date;
      headerDate.setAttribute('colspan', '4'); 
    
      headerRow.appendChild(headerDate);
      tableHeader.appendChild(headerRow);
      table.appendChild(tableHeader);
    
      const tableHeader2 = document.createElement('thead');
      const headerRow2 = document.createElement('tr');
     
      const headerTime = document.createElement('th');
      headerTime.textContent = 'Hour';
    
      const headerWindDegree = document.createElement('th');
      headerWindDegree.textContent = 'Wind Degree (°)';
    
      const headerWindSpeed = document.createElement('th');
      headerWindSpeed.textContent = 'Wind Speed (km/h)';

      const headerWindGust  = document.createElement('th');
      headerWindGust.textContent = 'Wind Gust (km/h)';
    
      headerRow2.append(headerTime);
      headerRow2.append(headerWindDegree);
      headerRow2.append(headerWindSpeed);
      headerRow2.append(headerWindGust);

    
      tableHeader2.append(headerRow2);
      table.append(tableHeader2);
    
     
      const tableBody = document.createElement('tbody');
    

      for (let i = 0; i < data.length; i++) {
        const rowData = data[i];
    
        const row = document.createElement('tr');
    
        const timeCell = document.createElement('td');
        timeCell.textContent = rowData.time;
    
        const windDegreeCell = document.createElement('td');
        windDegreeCell.textContent = rowData.windDegree;
    
        const windSpeedCell = document.createElement('td');
        windSpeedCell.textContent = rowData.windSpeed;

        const windGustCell = document.createElement('td');
        windGustCell.textContent = rowData.windGust;
    
        row.append(timeCell);
        row.append( windDegreeCell);
        row.append(windSpeedCell);
        row.append(windGustCell);

    
        tableBody.appendChild(row);
      }
    
      table.appendChild(tableBody);
    }
    
    return table;
  }
// table for precipitation and depression infos    
export const depressionTab=(datalist)=>{
  const dailyData = precipitation(datalist);
  const table = document.createElement('table');

  for (const date in dailyData) {
    const data = dailyData[date];
  
    table.classList.add('data-table');
  
    const tableHeader = document.createElement('thead');
    const headerRow = document.createElement('tr');
  
    const headerDate = document.createElement('th');
    headerDate.className ="tabHeaderDate";
    headerDate.textContent = date;
    headerDate.setAttribute('colspan', '4'); 
  
    headerRow.appendChild(headerDate);
    tableHeader.appendChild(headerRow);
    table.appendChild(tableHeader);
  
    const tableHeader2 = document.createElement('thead');
    const headerRow2 = document.createElement('tr');
   
    const headerTime = document.createElement('th');
    headerTime.textContent = 'Hour';
  
    const headerPrecipitation = document.createElement('th');
    headerPrecipitation.textContent = 'Precipitation (mm)';
  
    const headerHumidity= document.createElement('th');
    headerHumidity.textContent = 'Humidity (%)';

    const headerPressure  = document.createElement('th');
    headerPressure.textContent = 'Pressure (hPa)';
  
    headerRow2.append(headerTime);
    headerRow2.append(headerPrecipitation);
    headerRow2.append(headerHumidity);
    headerRow2.append(headerPressure);

  
    tableHeader2.append(headerRow2);
    table.append(tableHeader2);
  
   
    const tableBody = document.createElement('tbody');
  

    for (let i = 0; i < data.length; i++) {
      const rowData = data[i];
  
      const row = document.createElement('tr');
  
      const timeCell = document.createElement('td');
      timeCell.textContent = rowData.time;
  
      const rainCell = document.createElement('td');
      rainCell.textContent = rowData.rain;
  
      const humidityCell = document.createElement('td');
      humidityCell.textContent = rowData.humidity;

      const pressureCell = document.createElement('td');
      pressureCell.textContent = rowData.pressure;
  
      row.append(timeCell);
      row.append(rainCell);
      row.append(humidityCell);
      row.append(pressureCell);

  
      tableBody.appendChild(row);
    }
  
    table.appendChild(tableBody);
  }
  
  return table;
}

export const coordData = (headerData,nam, pop, sunri, sunse ) =>{
    let headerDataLogos =document.createElement('div');
    let headerDataInfos =document.createElement('div');
    headerDataLogos.className ="headerDataLogos";
    headerDataInfos.className ="headerDataInfos";
    headerData.innerHTML='';
    headerDataInfos.innerHTML='';
    headerDataLogos.innerHTML='';
    let name = document.createElement('div');
    name.innerText = nam;
    let population = document.createElement('div');
    population.innerHTML = `Visibility<br>${pop}`;
    population.style.textAlign='center';
    let sunrise =document.createElement('div');
    sunrise.innerText = sunri.slice(10,16) ;
    let sunset =document.createElement('div');
    sunset.innerText =sunse.slice(10,16);
    headerDataInfos.append(name);
    headerDataInfos.append(population);
    headerDataInfos.append(sunrise);
    headerDataInfos.append(sunset);

    let cityIcon =document.createElement('div');
    cityIcon.className="cityIcon";
    let cityImg = document.createElement('img')
    cityImg.src ='/asset/location-icons.gif';
    cityImg.className= "cityImg"
    cityIcon.append(cityImg);

    let visibilityIcon = document.createElement('div');
    visibilityIcon.className="visibilityIcon";
    let visibilityImg = document.createElement('img')
    visibilityImg.src ='/asset/visi.svg';
    visibilityImg.className= "visibilityImg"
    visibilityIcon.append(visibilityImg);

    let sunriseIcon =document.createElement('div');
    sunriseIcon.className="sunriseIcon";
    sunLogo(sunriseIcon );

    let sunsetIcon =document.createElement('div');
    sunsetIcon.className="sunsetIcon";
    moonLogo(sunsetIcon);

    headerDataLogos.append(cityIcon);
    headerDataLogos.append(visibilityIcon);
    headerDataLogos.append(sunriseIcon);
    headerDataLogos.append(sunsetIcon);

    headerData.append(headerDataLogos);
    headerData.append(headerDataInfos);

    
    
}
