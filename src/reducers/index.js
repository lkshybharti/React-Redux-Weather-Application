import { combineReducers } from 'redux';
import {Weather_Reducers} from './weather_reducers'

const rootReducer = combineReducers({
  weather : Weather_Reducers
});

export default rootReducer;
