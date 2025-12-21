let searchBar = document.getElementById('searchbar');
let button = document.getElementById('searchButton');
button.addEventListener("click", function () {
   weatherData(searchBar.value);
});
function DateandTime(){
   
}
console.log(searchBar);
async function weatherData(city){

   try{
      const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q="+ city +"&appid=657e0b31bbbba7312aa87d01de1e8fc8&units=metric");
      if(!response.ok){
         throw new Error("City not found ");
      }
      const data= await response.json();
      console.log(data);


      document.getElementById('location').innerText = data.name;
      document.getElementById('location2').innerText = "Location: " +data.name;
      document.getElementById('temp').innerText = data.main.temp + "°C";
      document.getElementById('condition').innerText = "Weather Condition: "+ data.weather[0].main;
      document.getElementById('feel'). innerText = data.main.feels_like+ "°C" ;
      document.getElementById('des').innerText = data.weather[0].description;

      document.getElementById('humidity').innerText = data.main.humidity+ " % ";
      document.getElementById('wind-speed').innerText = data.wind.speed + " km/h ";
      document.getElementById('Pressure').innerText = data.main.pressure + " hPa";
      document.getElementById('Visibility').innerText = data.visibility /1000 + " km";
   }
   catch(error){
      alert("Error:" + error.message);
   }
}
weatherData('Renfrewshire');