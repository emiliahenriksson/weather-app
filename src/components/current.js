import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GlobalStyle from '../globalStyle';

import Search from './search';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

const Current = ({lat, setLat, lon, setLon, loading, setLoading, loadCity, setLoadCity, weather, setWeather}) => {
    const api = {
        key: "~",
        base: "https://api.openweathermap.org/data/2.5/"
      }
    
    const [currentWeather, setCurrentWeather] = useState("rain");
    const [temp, setTemp] = useState();
    const [city, setCity] = useState("London");

    useEffect(() => {
      if (loading == false) {
        getWeather();
      }
    }, [loading]);

 

  useEffect(() => {
      getWeather();
    }, [loadCity]);

 
      
      const getWeather = () => {
        fetch(`${api.base}onecall?lat=${lat}&lon=${lon}&exclude=hourly&units=metric&appid=${api.key}`)
          .then(res => res.json())
          .then(result => {
            setWeather(result);
            setCurrentWeather(result.current.weather[0].main);
            setTemp(result.current.temp.toFixed(1))
            console.log(result);
            getCity();
          });
      }


switch (currentWeather) {
    case 'Clouds': 
      setCurrentWeather("Det är molnigt.");
      break;
    case 'Rain': 
      setCurrentWeather("Det regnar.");
      break;
    case 'Snow': 
      setCurrentWeather("Det snöar.");
      break;
    case 'Clear': 
      setCurrentWeather("Det är soligt.");
      break;
    case 'Mist': 
      setCurrentWeather("Det är dimmigt.");
      break;
    case 'Fog': 
      setCurrentWeather("Det är dimmigt.");
      break;
  }
  
  
  
  function getCity() {
    fetch(`https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&appid=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setCity(result[0].name);
        console.log(result);
      });
      console.log(lat + " " + lon)
  }
  

    return(
        <div className="App">
            <GlobalStyle/>
            <Search
                lat={lat}
                setLat={setLat}
                lon={lon}
                setLon={setLon}
                setCity={setCity}
                loadCity={loadCity}
                setLoadCity={setLoadCity}
            />
            <TextMargin>
                <div>
                    <h2>{ temp }°C</h2>
                    <h1>{ currentWeather }</h1>
                    <h3><FontAwesomeIcon icon={faMapMarkerAlt} size="1x" /> { city }</h3>                    
                </div>
            </TextMargin>
            
      </div>     
    )
}
const TextMargin = styled.div `

display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
margin-top: 15vh;

  h1 {
      margin-top: 10px;
      margin-bottom: 5px;
  }
  h2 {
      margin-bottom: 10px;
      margin-top:0px;
  }
  h3 {
      margin-top: 5px;
      margin-bottom: 0px;
  }

`

export default Current;

