/*   const search = () => {
      fetch(`${api.base}onecall?lat=${lat}&lon=${lon}&exclude=hourly&appid=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          
          console.log(result);
          console.log(weather);
        });
  } */

/* useEffect(() => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log("hi there");
      setLat(position.coords.latitude.toFixed(2));
      setLon(position.coords.longitude.toFixed(2));
    
      if (lon != undefined && lat != undefined) {
        search();
      }
    });
    console.log("wassup");
  }
}, []); */


/* useEffect(() => {
  search();
  getLocation();
}, []);

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(setPosition);
  } else { 
    console.log("Geolocation is not supported by this browser.")
  }
}

function setPosition(position) {
  setLat(position.coords.latitude);
  showPosition();
}

function showPosition(position) {
  console.log("Latitude: " + lat + "Longitude: ");
  console.log(lat);
} */




/* function getLocation() {
    return new Promise((resolve) => {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log("hi there");
        setLat(position.coords.latitude.toFixed(2));
        setLon(position.coords.longitude.toFixed(2));
        console.log("i'm here");
        
      });
      resolve();
    })
  }
  
  function getForcast() {
    return new Promise((resolve) => {
      fetch(`${api.base}onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=metric&appid=${api.key}`)
          .then(res => res.json())
          .then(result => {
            setWeather(result);
            
            console.log(result);
            
          });
    resolve();
    })
  } */
  
  /* function getToday() {
    return new Promise((resolve) => {
      switch(weather.current.weather[0].main) {
        case 'Clouds':
          console.log("It is cloudy today");
          currentWeather = "It is cloudy";
          break;
        case 'Rain':
          console.log("It is raining");
          currentWeather = "It is raining today";
          break;
        case 'Snow':
          console.log("It is snowing");
          currentWeather = "It is snowing today";
          break;
        case 'Clear':
          console.log("It is sunny");
          currentWeather = "It is sunny today";
          break;
      }
      resolve();
    })
  } */
/*   
  async function getWeather() {
    try {
      console.log(1);
      const location = await getLocation();
      console.log(lat);
      console.log(2);
      const forcast = await getForcast();
      console.log(3);
      console.log(weather.current.weather[0].main);
      const today = await getToday();
      console.log(4);
    } catch { 
      console.log("nope")
    }
  }
  
  useEffect(() => {
    getWeather();
  }, []) */