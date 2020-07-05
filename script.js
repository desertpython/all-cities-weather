
$(".search_icon").on("click",function(){
    var cityData = $(".search_input").val()
    var cardText = document.getElementById("cardText")
    var humid = document.getElementById("humid")
    var pressure = document.getElementById("pressure")
    var lat = cityData.lat
    var lon = cityData.lon
    console.log(cityData);
    fetch("http://api.openweathermap.org/data/2.5/weather?q=" + cityData + "&units=imperial&appid&appid=6bc6be181023384e301d45eee4f5659e")
    .then(response => response.json())
    .then(data => {console.log(data.main)
        cardText.innerHTML = data.main.temp
        console.log(data.main.temp)
        
        
        humid.innerHTML = data.main.humidity
        console.log(data.main.humidity)

        pressure.innerHTML = data.main.pressure
        console.log(data.main.pressure)

    //fetch(http://api.openweathermap.org/data/2.5/uvi?appid={appid}&lat={lat}&lon={lon}).then(repsonseii => repsonseii.json())
    //.then(dataii => {console.log(dataii)})
    
    
    
    
        //make city name and conditions display (maybe in card or something from bootstrap)
        //appending to the dom possibly

     

    
    
    //create html elements to append info to dom 

    

   

})


})