import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import {Switch, Router, Routes, Route} from 'react-router-dom';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import Current from './components/current';
import Forecast from './components/forecast';
import Loading from './components/loading';

function App() {

  const [lat, setLat] = useState(51.50);
  const [lon, setLon] = useState(0.12);
  const [loading, setLoading] = useState(true);
  const [loadCity, setLoadCity] = useState(true);
  const [weather, setWeather] = useState();

  const LoadingScreen = () => {
    if (loading == true) {
      return <Loading />
    } else {
      return null;
    }
  }


  useEffect(() => {
    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          setLat(position.coords.latitude.toFixed(2));
          setLon(position.coords.longitude.toFixed(2));
          setLoading(false);
        });
      }
  }, [])

  return (
    <div className="App">
      <LoadingScreen />

      <Current
      lat={lat}
      setLat={setLat}
      lon={lon}
      setLon={setLon}
      loading={loading}
      setLoading={setLoading}
      loadCity={loadCity}
      setLoadCity={setLoadCity}
      weather={weather}
      setWeather={setWeather}
      />
      <Forecast
      lat={lat}
      setLat={setLat}
      lon={lon}
      setLon={setLon}
      loading={loading}
      setLoading={setLoading}
      loadCity={loadCity}
      setLoadCity={setLoadCity}
      weather={weather}
      setWeather={setWeather}
      />
    </div>
  );
}


export default App;



