import React,{Component} from 'react'
import {connect} from 'react-redux'
import WeatherCard from '../components/weather_row';
import _ from 'lodash'

 class WeatherList extends Component{
    
    renderWeather(weatherdata){
        const name = weatherdata.city.name
        const id = weatherdata.city.id;
        const temp = _.map(weatherdata.list.map(weather => weather.main.temp),(temp)=> temp-273)
        const humid = weatherdata.list.map(weather => weather.main.humidity)
        const pressure = weatherdata.list.map(weather => weather.main.pressure)
         return(
             
             <WeatherCard name={name} id={id} temp={temp} humid={humid} pressure={pressure} />
             )
    }
    
    render() {
        
        return(
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th> City </th>
                        <th> Temprature </th>
                        <th> Pressure </th>
                        <th> Humidity </th>
                    </tr>
                </thead>
                
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
    
}



const mapStateToProps=({weather})=>{
    return {weather}
}


export default connect(mapStateToProps)(WeatherList)