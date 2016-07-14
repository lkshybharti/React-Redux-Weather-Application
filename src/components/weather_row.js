import React from 'react';
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';
import Graphs from './graphs'
import _ from 'lodash'

export default (props) =>{
     const pressure = props.pressure;
     const temp = props.temp;
     const humid = props.humid;
    
    return(
            <tr key={props.id}>
                <td> <strong>{props.name}</strong></td>
                <td>
                    <Graphs height={80} data={temp} unit="°C" color="orange" />
                </td>
                <td>
                    <Graphs height={100} data={pressure} unit="hPa" color="green" />
                </td>
                <td>
                    <Graphs height={100} data={humid} unit="%" color="black" />
                </td>
            </tr>
        )
}
