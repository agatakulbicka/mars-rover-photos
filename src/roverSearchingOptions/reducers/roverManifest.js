import {
    // REQUEST_ROVER_MANIFEST,
    RECEIVE_ROVER_MANIFEST,
    // CATCH_ROVER_MANIFEST_ERRORS
   } from '../../shared/constants';

export function roverManifest(state = {}, action) {
    switch (action.type) {
        case RECEIVE_ROVER_MANIFEST:
            return action.data;
        default:
            return state
    }
}