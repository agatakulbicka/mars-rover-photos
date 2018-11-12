import {combineReducers} from 'redux';
import {selectedRover} from './selectedRover';
import {roverManifest} from './roverManifest';
import {isFetchingManifest} from './isFetchingManifest';
import {selectedEarthDate, selectedSolDate, selectedDateType} from './selectedDates';

const searchingOptions = combineReducers({
    roverManifest,
    selectedRover,
    status: combineReducers({
        isFetchingManifest
    }),
    selectDate: combineReducers({
        selectedEarthDate,
        selectedSolDate,
        selectedDateType
    })
});

export default searchingOptions;