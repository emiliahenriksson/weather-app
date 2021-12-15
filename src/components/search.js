import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GlobalStyle from '../globalStyle';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Search = ({lat, setLat, lon, setLon, weather, setWeather, setCurrentWeather, setTemp, setCity, loadCity, setLoadCity}) => {

    const api = {
        key: "~",
        base: "https://api.openweathermap.org/data/2.5/"
      }

    const [query, setQuery] = useState("");

    function getCity() {
        fetch(`${api.base}weather?q=${query}&appid=${api.key}`)
          .then(res => res.json())
          .then(result => {
            setLat(result.coord.lat);
            setLon(result.coord.lon);
            setCity(result.name);
            setQuery("");
            console.log(result);
            setLoadCity(false);
          });
    }

    return(
        <Form>
            <form>
                <input type="text" name="query" value={query} onChange={(e) => setQuery(e.target.value)} className="queryInput" placeholder="Sök stad" />
                <FontAwesomeIcon icon={faSearch} size="2x" onClick={getCity} />               
            </form>

        </Form>
    )
}

const Form = styled.div `
    display: flex;
    justify-content: center;
    margin-top: 20px;

    form {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 90vw;
        /* height: 25px; */
    }

    input {
        margin-top: 5px;
        width: 75vw;
        border-radius: 5px;
        border: solid 2px #444444;
        height: 25px;
        font-weight: 800;
    }
`

export default Search;