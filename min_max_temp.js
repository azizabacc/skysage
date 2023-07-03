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
  

  export const error = (maxTemperatures,minTemperatures) =>{
    let errors = [];
    for (let i = 0; i < maxTemperatures.length; i++) {
        let error = maxTemperatures[i] - minTemperatures[i];
        errors.push(error);
        console.log(error);
}
  };