
$(".search_icon").on("click",function(){
    var cityData = $(".search_input").val()
    console.log(cityData);
    fetch("http://api.openweathermap.org/data/2.5/weather?q=" + cityData + "&appid=6bc6be181023384e301d45eee4f5659e")
    .then(response => response.json())
    .then(data => console.log(data.main));
    
    //create html elements to append info to dom 

    

   

})

//$(searchbar) //get the search bar's input and log it...
//once it is logged, use in api search//
//once the api search renders display results...