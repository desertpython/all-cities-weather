var myCityArray = [];

$(".search_icon").on("click",function(){
    var cityData = $(".search_input").val()
    var cardText = document.getElementById("cardText")
    var humid = document.getElementById("humid")
    var windSpeed = document.getElementById("windSpeed")
    var lat = cityData.lat
    var lon = cityData.lon
    console.log(cityData);
    fetch("http://api.openweathermap.org/data/2.5/weather?q=" + cityData + "&units=imperial&appid&appid=6bc6be181023384e301d45eee4f5659e")
    .then(response => response.json())
    .then(data => {console.log(data.main)
        cardText.innerHTML = "Temperarture is " +  data.main.temp + " F"
        console.log(data.main.temp);
        
        
        humid.innerHTML = "The humidity is " + data.main.humidity + " percent"
        console.log(data.main.humidity);

        windSpeed.innerHTML = " The current wind speed is " + data.wind.speed + " mph"
        console.log(data.wind.speed);

        localStorage.setItem("city",cityData);

    
        console.log("lat ", data.coord);
        // get uv index
        getUVindex(data.coord.lon,data.coord.lat );
        //empty elementS
        
        cityArray()


        function cityArray(){
        myCityArray.push(cityData)
        parentList.innerHTML = ""
        for(i=0;i<myCityArray.length;i++){
            var currentCity = myCityArray[i];
            localStorage.setItem('cityKey',myCityArray)
            var parentList = document.querySelector(".list-group")
            var myLi = document.createElement("li")
            myLi.textContent = currentCity
            parentList.append(myLi)
            
            //need to retrieve item from local storage
            //but solve extra appends in loop

        }
    }
        
    
    
    
        //make city name and conditions display (maybe in card or something from bootstrap)
        //appending to the dom possibly

     

    
    
    //create html elements to append info to dom 

    

   

})

function getUVindex(lon, lat){
    fetch("http://api.openweathermap.org/data/2.5/uvi?appid=&lat"+ lat + lon)
    .then(repsonseii => repsonseii.json()
    .then(dataii => {console.log(dataii)}));

}
})

// var date = //moment current date
// var dateOne = //moment day 1 0f 5 for forecast
// var dateTwo = //moment day 2 0f 5 for forecast
// var dateThree = //moment day 3 0f 5 for forecast
// var dateFour = //moment day 4 0f 5 for forecast
// var dateFive = //moment day 5 0f 5 for forecast
