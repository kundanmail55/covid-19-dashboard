import {combineReducers} from 'redux';
import CovidReducer from './reducers';

export default combineReducers({data: CovidReducer});