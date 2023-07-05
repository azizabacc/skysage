
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
      paper_bgcolor: "#1e1e1e",
      plot_bgcolor : '#1e1e1e',
      title: {
        text: tit,
        font: {
          family: 'Arial, sans-serif',
          size: 18,
          color: 'white' // Modifier la couleur du titre ici
        }
      },
        xaxis: {
            title: xtit,
            titlefont: {
              family: 'Arial, sans-serif',
              size: 18,
              color: 'white'
            },
            tickfont: {
              color: 'white' 
            }},
            yaxis: {
                title: ytit,
                titlefont: {
                  family: 'Arial, sans-serif',
                  size: 18,
                  color: 'white'
                },
                tickfont: {
                  color: 'white' 
                }}

      } 
var data = [ trace ];
var config = {responsive: true}
   Plotly.newPlot(div, data,layout,config,{scrollZoom: true},{editable: true});
}

export const plotErrorBar = (dataX, dataY, dataError, div, tit, xtit, ytit) => {
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
      line: {  
        color: 'white'  
      },
      type: 'scatter'
    }
  ];
  
  var layout = {
    paper_bgcolor: "#1e1e1e",
    plot_bgcolor : '#1e1e1e',
    title: {
      text: tit,
      font: {
        family: 'Arial, sans-serif',
        size: 18,
        color: 'white' 
      }
    },
    xaxis: {
      title: xtit,
      titlefont: {
        family: 'Arial, sans-serif',
        size: 18,
        color: 'white'
      },
      tickfont: {
        color: 'white' 
      }
    },
    yaxis: {
      title: ytit,
      titlefont: {
        family: 'Arial, sans-serif',
        size: 18,
        color: 'white'
      },
      tickfont: {
        color: 'white' 
      }
    }
  };

  var config = { responsive: true };

  Plotly.newPlot(div, data, layout, config, { scrollZoom: true, editable: true });
};