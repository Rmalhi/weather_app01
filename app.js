const uri = 'https://locationiq.org/v1/search.php?key='
const apiKey = '65287c33d6c5cd2a30b6'
const weatherUrl="http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=";
const weatherApi='ca7c59ed5c9cfcfe83be4a7f7ceebc73'
document.getElementById("showWeather").addEventListener("click", MyWeather);
function MyWeather()
{
  const city = document.getElementById('town').value
const country = document.getElementById('country').value
  

  // console.log(city)
  // console.log(country)
  
const cityData = []

fetch(`${uri}${apiKey}&format=json&city=${city}&country=${country}`)

  .then((res) => res.json())
  .then((data) => {

    const longitude=data[0].lon
    const latitude=data[0].lat

    
    console.log(longitude)
    console.log(latitude)
   
    console.log(data)
    console.log(data[0].display_name)
    console.log(`the longitude and latitude for this location are: lon ${data[0].lon} lat ${data[0].lat}`)
    
    cityData.push(...data)
    extractweather(longitude,latitude)
  

})
  .catch((e) => console.log(e, "what's happening dave?"))

  console.log('city data array', cityData)
} 
 

 function extractweather(long,lat)
 {
  // console.log("I am in extractweather")
  

  fetch(`${weatherUrl}${weatherApi}&lat=${lat}&lon=${long}`)
  .then((res) =>res.json())
  .then((request) =>
  {
    console.log(request)
    let condition=request.list[0].weather[0].main;
    let degreetemp=request.list[0].main.temp-273.15
    let degreeInt = Math.floor(degreetemp);
    console.log(condition)
    console.log(degreetemp)
    var weatherBox = document.getElementById("display");
    weatherBox.innerHTML = "<p>" + degreeInt + "&#176; C / " + condition + "</p>";
  })
 }