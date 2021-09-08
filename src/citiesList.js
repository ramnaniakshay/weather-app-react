import React, {useState} from "react";
import api from "./api";

// Array of location
let loc = ['Sydney, AU', 'Melbourne, AU', 'Brisbane, AU', 'Perth, AU', 'Adelaide, AU', 'Hobart, AU', 'Canberra, AU', 'Darwin, AU'];
const [weather, setWeather] = useState({});
// Array of result of the location weather data
let locResult = [];

// While loop to fetch data running through location list
let i=0;
while(loc){
    fetch(`${api.base}weather?q=${loc[i]}&units=metric&APPID=${api.key}`)
    .then(res => res.json())
    .then(result => {
        locResult[i] = result;
        setWeather(result);
    })
    i++;
}

// TODO: Needs to add temp
const citiesList = () => {
    const[cities, setCities] = useState([
        {
            id: 1,
            location: 'Sydney',
            temp: '{weather.main.temp}',
            weather: '',

        },
        {
            id: 2,
            location: 'Melbourne',
            temp: '',
            weather: '',
        },
        {
            id: 3,
            location: 'Brisbane',
            temp: '',
            weather: '',
        },
        {
            id: 4,
            location: 'Perth',
            temp: '',
            weather: '',
        },
        {
            id: 5,
            location: 'Adelaide',
            temp: '',
            weather: '',
        },
        {
            id: 6,
            location: 'Hobart',
            temp: '',
            weather: '',
        },
        {
            id: 7,
            location: 'Canberra',
            temp: '',
            weather: '',
        },
        {
            id: 8,
            location: 'Darwin',
            temp: '',
            weather: '',
        },
    ]);

    // TODO: Map function implementation 
    return(
        {citiesList.map(cit)}
    )
}