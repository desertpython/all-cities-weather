
$(".search_icon").on("click",function(){
    var cityData = $(".search_input").val()
    var cardText = document.getElementById("cardText")
    var humid = document.getElementById("humid")
    var windSpeed = document.getElementById("windSpeed")
    var lat = cityData.lat
    var lon = cityData.lon
    console.log(cityData);
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cityData + "&units=imperial&appid&appid=6c5343dfc16a8257dd6fc39f97ca3f8a")
    .then(response => response.json())
    .then(data => {console.log(data.main)
        cardText.innerHTML = "Temperarture is " +  data.main.temp + " F"
        console.log(data.main.temp);
        
        
        humid.innerHTML = "The humidity is " + data.main.humidity + " percent"
        console.log(data.main.humidity);

        windSpeed.innerHTML = " The current wind speed is " + data.wind.speed + " mph"
        console.log(data.wind.speed);

    
        console.log("lat ", data.coord);
        // get uv index
        getUVindex(data.coord.lon,data.coord.lat );
        //empty elementS
        
        
        var myCityArray = sessionStorage.getItem("savedCityNames");

        if (myCityArray){
            myCityArray = myCityArray.split(",");
    
        myCityArray.push(cityData)
        myCityArray = myCityArray.join(",");
        }
        else {
            myCityArray = cityData;
        }
        sessionStorage.setItem("savedCityNames", myCityArray);
        
        var parentList = document.querySelector(".list-group")
        var myLii = document.createElement("li")
        myLii.textContent = cityData;
        parentList.append(myLii)
    });
        
    
    
    
        //make city name and conditions display (maybe in card or something from bootstrap)
        //appending to the dom possibly

     

    
    
    //create html elements to append info to dom 

    

   
    
})
var localDisplay = sessionStorage.getItem("savedCityNames");
if (localDisplay) {
    var localSplit = localDisplay.split(",");

for(i=0; i<localSplit.length; i++){
    var currentCity = localSplit[i];
    console.log(currentCity);
    var parentList = document.querySelector(".list-group")
    //parentList.innerHTML = currentCity;
    var myLi = document.createElement("li")
    myLi.textContent = currentCity
    parentList.append(myLi)
    
    //need to retrieve item from local storage
    //but solve extra appends in loop

}}

function getUVindex(lon, lat){
    fetch("https://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&appid=6d095275f4b36a42a20e3423879e63af")
    .then(repsonseii => repsonseii.json()
    .then(dataii => {console.log(dataii)}));

};

// 1. grab search input value "atlanta"
// 2. set local storage
// 3. grab local storage
// 4. Display on page (append?)
