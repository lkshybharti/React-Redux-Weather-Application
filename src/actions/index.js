import axios from 'axios'
import {Fetch_Weather} from './types'

// const API_KEY ="e6aa3266d36c8191dde52b4f01dd6ca9";
// const URL = "http://api.openweathermap.org/data/2.5/forecast?q=delhi,in&appid=e6aa3266d36c8191dde52b4f01dd6ca9"

export const fetchweather =(city) =>{

    const API_KEY ="e6aa3266d36c8191dde52b4f01dd6ca9";
    const URL = `http://api.openweathermap.org/data/2.5/forecast?q=${city},in&appid=${API_KEY}`
    
    const payload = axios.get(URL);
    
    // console.log("this is action index ", payload)
    
    
    return{
        type : Fetch_Weather,
        payload : payload
    }
}