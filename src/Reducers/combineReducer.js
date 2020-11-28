import restoReducer from "./restoReducer";
import visitsReducer from './visitsReducer';
import { combineReducers } from "redux";

const combineReducer = combineReducers({
    Restaurants: restoReducer,
    Visits: visitsReducer
})

export default combineReducer;