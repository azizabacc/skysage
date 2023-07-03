
{/* <select name="cities" id="citySelect"></select>  */}
const citySelect = document.getElementById("citySelect"); 
const loadCountries = () =>{ 

    fetch('ISO-3166.json')
        .then(response => response.json())
        .then(json => {
             for (let i = 0; i < Object.keys(json[0]).length; i++) {
                let country = document.createElement('option');
                country.innerText = Object.values(json[0])[i];
                citySelect.append(country);
        }  
        })
        .catch(error => {
            console.log('There was an error!', error);
        });
     } 
loadCountries() 