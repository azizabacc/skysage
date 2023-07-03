
//Plot function 

export const plot = (dataX,dataY,div,color,tit,xtit,ytit) =>{
    var trace = {
        x: dataX,
        y: dataY,
        mode: 'line',
  marker: {
      color: color,
      line: {
          width: 2.5
      }
  }
};
    var layout = { 
        title: tit,
        xaxis: {
            title: xtit,
            titlefont: {
              family: 'Arial, sans-serif',
              size: 18,
              color: 'black'
            }},
            yaxis: {
                title: ytit,
                titlefont: {
                  family: 'Arial, sans-serif',
                  size: 18,
                  color: 'black'
                }}

      } 
var data = [ trace ];
var config = {responsive: true}
   Plotly.newPlot(div, data,layout,config,{scrollZoom: true},{editable: true});
}

export const plotErrorBar = (dataX,dataY,dataError,div,tit,xtit,ytit) =>{
  var data = [
    {
      x: dataX,
      y: dataY,
      mode: 'line',
      error_y: {
        type: 'data',
        array: dataError,
        visible: true,
        color: 'red',
        thickness: 2.5
      },
      type: 'scatter'
    }
  ];
  var layout = { 
    title: tit,
    xaxis: {
        title: xtit,
        titlefont: {
          family: 'Arial, sans-serif',
          size: 18,
          color: 'black'
        }},
        yaxis: {
            title: ytit,
            titlefont: {
              family: 'Arial, sans-serif',
              size: 18,
              color: 'black'
            }}

  } 
  var config = {responsive: true}
  Plotly.newPlot(div, data,config,layout,{scrollZoom: true},{editable: true});
}