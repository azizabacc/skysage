# import required modules
import requests, json
from datetime import datetime
import numpy as np
import matplotlib.pyplot as plt
# Enter your API key here
api_key = "0ecda526c9c0b753226bce63f940887d"
def timestampConvertor(timestamp):
    # Convert to datetime object
    timeSecond = datetime.fromtimestamp(timestamp)
    
    # Get the components of the time
    year = timeSecond.year
    month = timeSecond.month
    day = timeSecond.day
    hours = timeSecond.hour
    minutes = timeSecond.minute
    seconds = timeSecond.second
    
    # Create a formatted string for the time
    time = f"{year}-{month:02d}-{day:02d} {hours:02d}:{minutes:02d}:{seconds:02d}"
    
    return time

# base_url variable to store url
""" base_url = "http://api.openweathermap.org/data/2.5/forecast?lat=0&lon=0&units=metric&lang=english&appid=0ecda526c9c0b753226bce63f940887d"
 """
""" base_url = f"http://api.openweathermap.org/geo/1.0/direct?q={cityName}&appid={apiKey}" """
base_url = "http://api.openweathermap.org/data/2.5/weather?"

# Give city name
city_name = input("Enter city name : ")

# complete_url variable to store
# complete url address
geo_url = base_url + "appid=" + api_key + "&q=" + city_name
print(geo_url)

# get method of requests module
# return response object
response = requests.get(geo_url)

# json method of response object
# convert json format data into
# python format data
x = response.json()

# Now x contains list of nested dictionaries
# Check the value of "cod" key is equal to
# "404", means city is found otherwise,
# city is not found
if x["cod"] != "404":
	# store the value of "coord"
	# key in variable y
	y = x["coord"]

	

	# store the value corresponding
	# to the "lon" key of y
	lon = y["lon"]

	# store the value corresponding
	# to the "lat" key of y
	lat = y["lat"]


	# print following values

	print(" Longitude = " +
					str(lon) +
		"\n Latitude " +
					str(lat) )

else:
	print(" City Not Found ")
forecastApi = f"http://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&units=metric&lang=english&appid={api_key}"
response1 = requests.get(forecastApi )
data =response1.json()

""" all lists """
lists = data["list"] 
"""first list"""
list0=lists[0]

"""main list 0"""
main0 = list0['main']


"""temp main0"""
temp0= main0["temp"]

temperature = []
windSpeed = []
windDegree = []
windGust = []
humidity = []
pressure = []
timeStamp = []
timeConverted = []
for i in range(len(lists)):
	temperature.append(lists[i]['main']['temp'])
	windSpeed.append(lists[i]['wind']['speed'])
	windGust.append(lists[i]['wind']['gust'])
	windDegree.append(lists[i]['wind']['deg'])
	humidity.append(lists[i]['main']['humidity'])
	pressure.append(lists[i]['main']['pressure'])
	timeStamp.append(lists[i]['dt'])
	timeConverted.append(timestampConvertor(lists[i]['dt']))

print(humidity)
print(pressure)

plt.plot(timeConverted, temperature)

# Ajouter des labels aux axes
plt.xlabel('Time')
plt.ylabel('Temperature')

# Afficher le graphique
plt.show()
#generate array of timestamps with 1hour intervalle
timestampPerhour = np.arange(min(timeStamp), max(timeStamp)+1, 3600)
#convert timestamps
timePerhourConverted = []
for i in range(len(timestampPerhour)):
	timePerhourConverted.append(timestampConvertor(timestampPerhour[i]))


# Interpolation linéaire
interpolated_temperature = np.interp(target_timestamp1, timeStamp, temperature) 
	
	
""" print(f"Température interpolée à {timestampConvertor(target_timestamp)}: {interpolated_temperature}") """


# Convertir l'objet en une chaîne JSON
data_json = json.dumps(data)

# Ouvrir le fichier en mode écriture
with open(f"./data/{city_name}.json", 'w') as fl:
    # Écrire la chaîne JSON dans le fichier
    fl.write(data_json)

# Fermer le fichier
fl.close()

# Données de température
timestamps = [1688202000, 1688212800, 1688223600, 1688234400, 1688245200, 1688256000, 1688266800, 1688277600, 1688288400, 1688299200, 1688310000, 1688320800]
temperatures = [29.89, 32.27, 34.64, 31.92, 27.68, 26.36, 25.29, 25.94, 30.01, 33.94, 34.98, 32.82]

# Timestamp pour lequel vous souhaitez effectuer l'interpolation
target_timestamp = 1688238000

# Interpolation linéaire
interpolated_temperature = np.interp(target_timestamp, timestamps, temperatures)

print(f"Température interpolée à {target_timestamp}: {interpolated_temperature}")
