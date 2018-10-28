import React from 'react';
import {RoverSelectContainer} from './roverSelect';
import {RoverCameraContainer} from './roverCameras';
import {RoverDataContainer} from './roverData';

function RoverSearchingOptions() {
    return (
        <>
        <RoverSelectContainer/>
        <RoverCameraContainer/>
        <RoverDataContainer />
        </>
    )
}

export default RoverSearchingOptions;