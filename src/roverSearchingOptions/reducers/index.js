import {combineReducers} from 'redux';
import {selectedRover} from './selectedRover';

const searchingOptions = combineReducers({
    selectedRover
});

export default searchingOptions;