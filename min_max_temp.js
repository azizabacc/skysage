const CalculMinTemperatures = (array) => {
    let min = array[0]; /// il faudrait en faire une focn
    for (i = 0; i < array.length; i++) {
      if (array[i] < min) {
        min = array[i];
      }
    }
    return min;
  };
  const CalculMaxTemperatures = (array) => {
    let max= array[0]; /// il faudrait en faire une focn
    for (i = 0; i < array.length; i++) {
      if (array[i] > max) {
        max = array[i];
      }
    }
    return max;
  };
  // min temperatue over 5 days
  
  const minTemperature = (dataList) => {
    let dailyTemp = [];
    let minTemp = [];
  
    for (let j = 0; j < dataList.length - 1; j++) {
      let day = convertTimeStamp(dataList[j].dt).slice(0, 2);
      if (day != convertTimeStamp(dataList[j + 1].dt).slice(0, 2)) {
        dailyTemp.push(dataList[j].main.temp);
        minTemp.push(CalculMinTemperatures(dailyTemp));
        dailyTemp = [];
      } else {
        dailyTemp.push(dataList[j].main.temp);
      }
    }
    return minTemp;
  };
  // min temperatue over 5 days
  
  const maxTemperature = (dataList) => {
    let dailyTemp = [];
    let minTemp = [];
  
    for (let j = 0; j < dataList.length - 1; j++) {
      let day = convertTimeStamp(dataList[j].dt).slice(0, 2);
      if (day != convertTimeStamp(dataList[j + 1].dt).slice(0, 2)) {
        dailyTemp.push(dataList[j].main.temp);
        minTemp.push(CalculMaxTemperatures(dailyTemp));
        dailyTemp = [];
      } else {
        dailyTemp.push(dataList[j].main.temp);
      }
    }
    return minTemp;
  };
  export const error = (maxTemperatures,minTemperatures) =>{
    let errors = [];
    for (let i = 0; i < maxTemperatures.length; i++) {
        let error = maxTemperatures[i] - minTemperatures[i];
        errors.push(error);
        console.log(error);
}
  };