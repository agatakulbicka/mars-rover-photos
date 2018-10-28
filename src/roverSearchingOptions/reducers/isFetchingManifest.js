import {
    RECEIVE_ROVER_MANIFEST,
    REQUEST_ROVER_MANIFEST
   } from '../../shared/constants';

export function isFetchingManifest(state = false, action) {
    switch (action.type) {
        case REQUEST_ROVER_MANIFEST:
            return true;
        case RECEIVE_ROVER_MANIFEST:
            return false    
        default:
            return state
    }
};