import {
    CATCH_ROVER_MANIFEST_ERRORS
   } from '../constants';

export function fetchingErrors(state = {}, action) {
    switch (action.type) {
        case CATCH_ROVER_MANIFEST_ERRORS:
            return {
                action: action.type, 
                data: action.data
            };    
        default:
            return state
    }
};