import {combineReducers} from 'redux';
import {selectedRover} from './selectedRover';
import {roverManifest} from './roverManifest';
import {isFetchingManifest} from './isFetchingManifest';

const searchingOptions = combineReducers({
    roverManifest,
    selectedRover,
    status: combineReducers({
        isFetchingManifest
    })
});

export default searchingOptions;