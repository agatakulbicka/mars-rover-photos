import {
    REQUEST_ROVER_MANIFEST,
    RECEIVE_ROVER_MANIFEST,
    CATCH_ROVER_MANIFEST_ERRORS,
    MANIFEST_URL
   } from '../../shared/constants';
import {requestData, receiveData, catchErrors} from '../../shared/actions';

function fetchRoverManifest(roverName) {
   return dispatch => {
       dispatch(requestData(REQUEST_ROVER_MANIFEST));
       fetch(MANIFEST_URL(roverName))
           .then(response => response.json())
           .then(json => dispatch(receiveData(RECEIVE_ROVER_MANIFEST, json)))
           .catch(error => catchErrors(CATCH_ROVER_MANIFEST_ERRORS, error))
   }
}

export default fetchRoverManifest;