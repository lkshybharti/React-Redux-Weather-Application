import react,{component } from 'react'
import {Fetch_Weather} from '../actions/types'

export const  Weather_Reducers= (state = [],action) =>{
    
    if(action.type === Fetch_Weather)
    {
        console.log(action.payload)
        return [action.payload.data,...state]
    }
    return state

    
}