let weather = {
  "apiKey":"95dbec0fc97967ccaf9194c066f8cebd",
  FetchWeather: function(city){
    fetch("https://api.openweathermap.org/data/2.5/weather?q="
    + city 
    +"&units=metric&appid="
    + this.apiKey
    )
    .then((response) => response.json())
    .then((data) => this.displayWeather(data));
  },
  displayWeather : function(data){
    const { name } = data;
    const { icon , description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    document.querySelector(".city").innerHTML = "Weather in " + name;
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+ icon +".png";
    document.querySelector(".description").innerHTML = description;
    document.querySelector(".temp").innerHTML = temp +"°C";
    document.querySelector(".description").innerHTML = description;
    document.querySelector(".humidity").innerHTML = "Humidity: "+ humidity + "%";
    document.querySelector(".wind").innerHTML = "Wind Speed: "+ speed + "km/h";
    document.querySelector(".weather").classList.remove("loading");
    //document.body.style.backgroundImage = "url('https://source.unsplash.com/2560x1440/?"+ name +"')";
     document.body.style.backgroundImage = "url('https://source.unsplash.com/1920x1080/?"+ name +"')";
     document.body.style.backgroundSize = 'cover' ;
    },
    search: function(){
      this.FetchWeather(document.querySelector(".search-bar").value);
    }
};

document.querySelector(".search button").addEventListener("click",function () {
  weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function(event){
  if(event.key == "Enter"){
    weather.search();
  }
});

weather.FetchWeather("Athens");