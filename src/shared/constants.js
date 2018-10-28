import {API_KEY} from '../APIKey';

export const BASE_ENDPOINT = 'https://mars-photos.herokuapp.com/api/v1';
export const MANIFEST_URL = (roverName) =>`${BASE_ENDPOINT}/manifests/${roverName}`

export const CHANGE_SELECTED_ROVER = 'CHANGE_SELECTED_ROVER';
export const CHANGE_SELECTED_CAMERA = 'CHANGE_SELECTED_CAMERA';

export const REQUEST_ROVER_MANIFEST = 'REQUEST_ROVER_MANIFEST';
export const RECEIVE_ROVER_MANIFEST = 'RECEIVE_ROVER_MANIFEST';
export const CATCH_ROVER_MANIFEST_ERRORS = 'CATCH_ROVER_MANIFEST_ERRORS';