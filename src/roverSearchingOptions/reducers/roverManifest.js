import {
    RECEIVE_ROVER_MANIFEST
   } from '../../shared/constants';

export function roverManifest(state = {}, action) {
    switch (action.type) {
        case RECEIVE_ROVER_MANIFEST:
            return action.data.photo_manifest;
        default:
            return state
    }
}