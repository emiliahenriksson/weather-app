import React, {useEffect, useState} from "react";

const Forecast = ({lat, setLat, lon, setLon, loading, setLoading, loadCity, setLoadCity, weather, setWeather}) => {

    const api = {
        key: "~",
        base: "https://api.openweathermap.org/data/2.5/"
      }

    const [loadedForecast, setLoadedForecast] = useState(false);
    const [listItems, setListItems] = useState([]);
    const [days, setDays] = useState(['Söndag', 'Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag']);

    useEffect(() => {
        if (loading == false) {
          getForecast();
        }
      }, [loading]);


      useEffect(() => {
          if (loadedForecast == true) {
            const d = new Date();
            const day = d.getDay();
            const w = days.splice(0, day);
            setDays(days.concat(w));
            console.log(days);
            console.log(weather.daily);
            const dagar = ['Söndag', 'Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag'];
            setListItems(days.map((days, index) =>
            <li>
                <p>{days}</p>
                <img src={"https://openweathermap.org/img/w/" + weather.daily[index].weather[0].icon +".png"}/>
                <p>{weather.daily[index].temp.day.toFixed(1)}°C</p>
            </li>
    ))
          }
           
      }, [loadedForecast]);
    


      const getForecast = () => {
        fetch(`${api.base}onecall?lat=${lat}&lon=${lon}&exclude=hourly&units=metric&appid=${api.key}`)
          .then(res => res.json())
          .then(result => {
            setWeather(result);
            setLoadedForecast(true);
          });
      };

      





    return(
        <div>
            <ul>{listItems}</ul>
        </div>
    )
}

export default Forecast;