
<!DOCTYPE html>
<html lang="en">

<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Weather app for the class assignment </title>
   <!-- This is to link the css with html. -->
   <link rel="stylesheet" href="Rajib_Shrestha_2614040.css">
   <!-- This is to link the fontawesome website to the html. -->
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css"
      integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw=="
      crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body>
   <!-- This div is the main container which contains all of the content of the body -->
   <div class="main-container">
      <!-- This div only contains the header part of the content of the whole weather app  -->
      <div class="main-container-header">
         <header>
            <!-- This is the main header of the weather app website. which contains the nav bar and search bar. -->
            <div id="nav-bar">
               <i class="fa-solid fa-location-dot" class-="icon"></i>
               <h3 id="location">Location</h3>
               <div id="search-bar">
                  <!-- This contains the search bar to search for different city weather info. -->
                  <input type="text" placeholder="Enter city name" id="searchbar">
                  <button id="searchButton">Get Weather</button>
               </div>
            </div>
         </header>
      </div>
      <main>
         <div id="main-content">
            <!-- it is the main container of the weather app which contains all the weather website info without the nav bar and footer. -->
            <div id="container">
               <!-- it is the container which contains the main weather info of the city. -->
               <div class="sub-container">
                  <!-- It is the sub container which contains the location , temp , feel like temp and weather icon.                         -->
                  <div class="weather-subinfo">
                     <h1 id="location2">Location</h1>
                     <h2 id="condition">Condition</h2>
                  </div>
                  <div id="card">
                     <!-- This contains the main weather card info like temp , feel like temp and weather icon. -->
                     <h1 id="temp">TEMP</h1>
                     <i class="fa-solid fa-cloud"></i>
                     <h4>Feels like</h4>
                     <h1 id="feel">Feel like </h1>
                     <h4 id="des"> description </h4>
                  </div>
               </div>
            </div>
            <!-- This contain the weather info like humidity and other thing.. -->
            <div id="weather-info">
               <h2>Weather details</h2>
               <div class="weather-info-card">
                  <h2>Humidity</h2>
                  <h3 id="humidity">--%</h3>
               </div>
               <div class="weather-info-card">
                  <h2>Wind Speed</h2>
                  <h3 id="wind-speed">--km/h</h3>
               </div>
               <div class="weather-info-card">
                  <h2>Pressure</h2>
                  <h3 id="Pressure">--mb</h3>
               </div>
               <div class="weather-info-card">
                  <h2>Visibility</h2>
                  <h3 id="Visibility">--km</h3>
               </div>
            </div>
         </div>
         <!-- This script tags joins the both html and javascript together  -->
         <script src="Rajib_Shrestha_2614040.js"></script>
      </main>
      <footer>
         <div class="footer-text">
            <h3>Created by Rajib shrestha from Level4 Group2 Student id: 2614040</h3>
            <span>© 2025 Rajib Shrestha. All rights reserved.</span>
         </div>
      </footer>
   </div>

</body>

</html>
