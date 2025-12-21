
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
   <style>
      /* basic styles which style the whole page using the universial selector*/
      * {
         padding: 0;
         margin: 0;
      }
      /* For the whole body background color and margin for the whole website */
      body {
         margin: 4%;
         background: linear-gradient(135deg, #1E3C72, #2A5298, #6DD5ED);
      }
      /* This is the css style for the main container which contains all of the content inside of it */
      .main-container {
         color: #F8FAFC;
         border: none;
         border-radius: 30px;
         padding: 20px;
         height: auto;
         width: 60%;
         margin-top: 50px;
         margin-left: auto;
         margin-right: auto;
         background: rgba(255, 255, 255, 0.1);
         backdrop-filter: blur(14px);
         border: 1px solid rgba(255, 255, 255, 0.25);
      }
      /* For the main container header which holds all the content of the nav bar */
      .main-container-header {
         margin: 10px;
         padding: 10px;
         background: rgba(255, 255, 255, 0.1);
         backdrop-filter: blur(14px);
         border: 1px solid rgba(255, 255, 255, 0.25);
         border-radius: 30px;
      }
      
      /* For the Navigation or location search section */
      #nav-bar {
         display: inline;
         padding: 20px;
      }
      
      /* for the navigation bar icon  */
      #nav-bar .icon {
         width: 30px;
         height: 30px;
         font-size: 20px;
      }
      
      /* for the navigation bar location  */
      #nav-bar h3 {
         display: inline;
         font-size: 24px;
         font-weight: bold;
      }
      
      /* for the navigation bar as whole  */
      #search-bar {
         display: inline;
         gap: 10px;
         margin-left: 20px;
         float: right;
      }
      
      /* for the navigation bar input tag  */
      #search-bar input {
         padding: 5px;
         border-radius: 24px;
         border: 1px solid rgba(255, 255, 255, 0.25);
         background-color: rgba(195, 187, 187, 0.1);
      }
      
      /* for the navigation bar input tags placeholder which hold the input  */
      #search-bar input::placeholder {
         color: white;
         border-color: 1px solid black;
      }
      
      /* for the navigation bar Button  */
      #search-bar button {
         padding: 5px 10px;
         border-radius: 30px;
         border: 1px solid rgba(255, 255, 255, 0.25);
         cursor: pointer;
         background-color: rgba(195, 187, 187, 0.1);
         color: white;
      }
      
      /* for the navigation bar Button hover effect */
      #search-bar button:hover {
         background-color: black;
         color: white;
      }
      
      /* for the main content section of the subinformation */
      #main-content {
         display: flex;
         flex-direction: row;
         background: rgba(195, 187, 187, 0.1);
         backdrop-filter: blur(14px);
         border: 1px solid rgba(255, 255, 255, 0.25);
         border-radius: 24px;
         margin: 10px;
         padding: 10px;
      }
      
      /* This container contains the main thing */
      #container {
         display: flex;
         flex-direction: column;
         background: rgba(255, 255, 255, 0.1);
         backdrop-filter: blur(14px);
         border: 1px solid rgba(255, 255, 255, 0.25);
         border-radius: 24px;
         margin: 10px;
         padding: 10px;
         width: 75%;
      }
      
      /* this style is for the things like location , condition and card  */
      .sub-container {
         display: flex;
         border: 1px solid rgba(255, 255, 255, 0.25);
         border-radius: 24px;
         margin: 10px;
         padding: 10px;
      }
      
      /* this style is for the things like location and condition*/
      .weather-subinfo {
         background: rgba(255, 255, 255, 0.15);
         backdrop-filter: blur(14px);
         border: 1px solid rgba(255, 255, 255, 0.25);
         width: 500px;
         margin: 10px;
         padding: 100px 100px;
         border-radius: 24px;
      }
      
      /* this style is for the contains of the card  */
      #card {
         margin: 10px;
         padding: 50px ;
         display: flex;
         flex-direction: column;
         justify-content: center;
         border-radius: 20px;
         background: rgba(255, 255, 255, 0.15);
         backdrop-filter: blur(14px);
         border: 1px solid rgba(255, 255, 255, 0.25);
      }
      
      /* this style is the the card icons  */
      #card i {
         font-size: 50px;
         color: white;
      }
      
      /* this style is for the side bar  */
      #weather-info {
         margin: 5px;
         padding: 10px;
         display: flex;
         flex-direction: column;
         background: rgba(255, 255, 255, 0.15);
         backdrop-filter: blur(14px);
         border: 1px solid rgba(255, 255, 255, 0.25);
         border-radius: 24px;
      }
      
      /* this style is for the side bar cards */
      .weather-info-card {
         background: rgba(255, 255, 255, 0.15);
         backdrop-filter: blur(14px);
         border: 1px solid rgba(255, 255, 255, 0.25);
         border-radius: 24px;
         margin: 10px;
         padding: 10px;
      }
      
      /* this style is for the side bar cards hover effect  */
      .weather-info-card:hover {
         background: rgba(255, 255, 255, 0.50);
         color: black;
      }
      
      /* this style is for the footer text  */
      .footer-text {
         text-align: center;
         margin-top: 20px;
      }

   </style>
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
