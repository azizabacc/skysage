// timestamp Convertor function 
export const timestampConvertor = (timestamp) =>{
    const timeSecond = new Date(timestamp * 1000); // Convert to milliseconds
    // Get the components of the sunrise time
    const year = timeSecond.getUTCFullYear();
    const month = timeSecond.getUTCMonth() + 1; 
    const day = timeSecond.getUTCDate();
    const hours = timeSecond.getUTCHours();
    const minutes = timeSecond.getUTCMinutes();
    const seconds = timeSecond.getUTCSeconds();
    
    // Create a formatted string for the sunrise time
    const time = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')} ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    return time  
  
    }

    export const getDayName=(dateString)=> {
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const date = new Date(dateString);
        const dayIndex = date.getDay();
        return daysOfWeek[dayIndex];
      }
//mean temperature and wind speed
      export const meanTemperature = (dataList,averageTempByDay,averageWindSpeedByDay ) => {
        const tempByDay = {};
        const windSpeedByDay = {};
      
        for (let i = 0; i < dataList.length; i++) {
          const dt_txt = dataList[i].dt_txt;
          const temp = dataList[i].main.temp;
          const windSpeed = dataList[i].wind.speed;
          const date = dt_txt.slice(0, 10);
  
          // mean temp per day
          if (tempByDay[date]) {
            tempByDay[date].sum += temp;
            tempByDay[date].count++;
          } else {
            tempByDay[date] = {
              sum: temp,
              count: 1,
            };
          }
      
          // mean wind speed per day
          if (windSpeedByDay[date]) {
            windSpeedByDay[date].sum += windSpeed;
            windSpeedByDay[date].count++;
          } else {
            windSpeedByDay[date] = {
              sum: windSpeed,
              count: 1,
            };
          }
        }

      
        for (const date in tempByDay) {

          const averageTemp = (tempByDay[date].sum / tempByDay[date].count).toFixed(1);
          averageTempByDay[date] = averageTemp;
        }
      
        for (const date in windSpeedByDay) {
          const averageWindSpeed = (windSpeedByDay[date].sum / windSpeedByDay[date].count).toFixed(1);
          averageWindSpeedByDay[date] = averageWindSpeed;
        }
      
      
      }

      
    export  const infoPerDay = (datalist) => {
        const dataByDay = {};
      
        for (let i = 0; i < datalist.length; i++) {
          const dt_txt = datalist[i].dt_txt;
          const temp = datalist[i].main.temp;
          const windSpeed = datalist[i].wind.speed;
          const weather = datalist[i].weather[0].description
          const date = dt_txt.slice(0, 10);
          const time = dt_txt.slice(11, 16);
      
          if (!dataByDay[date]) {
            dataByDay[date] = [];
          }
      
          dataByDay[date].push({
            time,
            temp,
            windSpeed,
            weather,
          });
        }
      
        return dataByDay;
      }
       export  const windInfos = (datalist) => {
        const windInfos = {};
      
        for (let i = 0; i < datalist.length; i++) {
          const dt_txt = datalist[i].dt_txt;
          const windDegree = datalist[i].wind.deg;
          const windGust= datalist[i].wind.gust
          const windSpeed = datalist[i].wind.speed;
          const date = dt_txt.slice(0, 10);
          const time = dt_txt.slice(11, 16);
      
          if (!windInfos[date]) {
            windInfos[date] = [];
          }
      
          windInfos[date].push({
            time,
            windDegree,
            windSpeed,
            windGust,
            
          });
        }
      
        return windInfos;
      } 
      export const precipitation=(datalist)=>{
        const pecipitationInfos = {};
      const nb = 3;
      const rainValue = nb.toString()+"h";
        for (let i = 0; i < datalist.length; i++) {
          let rain = datalist[i].rain?.[rainValue] ?? 0;
          const dt_txt = datalist[i].dt_txt;
          const date = dt_txt.slice(0, 10);
          const time = dt_txt.slice(11, 16);
          const humidity = datalist[i].main.humidity;
          const pressure = datalist[i].main.pressure;
          if (!pecipitationInfos[date]) {
            pecipitationInfos[date] = [];
          }
      
          pecipitationInfos[date].push({
            time,
            rain,
            humidity,
            pressure,
            
          });
        }
      
        return pecipitationInfos;
      }
  export  const weatherFont = (weather) =>{
        let font ='';
        switch(weather){
            case 'broken clouds':
                font = '<i class="fa-brands fa-cloudflare" style="color: #787878;"></i>';
                break;
            case 'overcast clouds':
                font = '<i class="fi fi-rr-clouds"></i>';
                break;
            case 'few clouds':
                font = '<i class="fi fi-rr-cloud-sun"></i>';
                break;
                case 'clear sky':
                    font = '<i class="fi fi-br-brightness"></i>';
                    break;
            default :
            font = '<i class="fa-brands fa-cloudflare" style="color: #787878;"></i>';
                
        }
    
        return font
    } 
    
   export const windFont = (wind) =>{
        let font ='';
        switch(wind){
            case wind < 5:
                font = '<i class="fa-solid fa-arrow-down-wide-short" style="color: #1b5cc5;"></i>';
                break;
    
            default :
            font = '<i class="fa-solid fa-arrow-down-wide-short" style="color: #1b5cc5;"></i>';
                
        }
        return font
    } 
    
    export const temperatureFont = (temp) =>{
        let font ='';
        switch(temp){
            case temp >=20:
                font = '<i class="fa-solid fa-temperature-three-quarters" style="color: #c42121;"></i>';
                break;
            case temp<20 && temp>=15 :
                font = '<i class="fa-solid fa-temperature-three-quarters" style="color: #f09800;"></i>';
                break;
            case temp < 15:
                font = '<i class="fa-solid fa-temperature-three-quarters" style="color: #52e0bd;"></i>';
                break;
            default :
            font = '<i class="fa-solid fa-temperature-three-quarters" style="color: #757a79;"></i>';
                
        }
        return font
    } 


    export const removeChild=(oldchild,newchild,parent)=>{
      if(child){
        parent.removeChild(oldchild)
        parent.append(newchild) 
        }else{
        parent.append(newchild) 
        }
    }

    