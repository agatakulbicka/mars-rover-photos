import {combineReducers} from 'redux';
import searchingOptions from './roverSearchingOptions/reducers';
import {fetchingErrors} from './shared/reducer';

const rootReducer = combineReducers({
    fetchingErrors,
    searchingOptions
});

export default rootReducer;