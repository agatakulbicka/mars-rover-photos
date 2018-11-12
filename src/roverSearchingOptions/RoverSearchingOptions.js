import React from 'react';
import {RoverSelectContainer} from './roverSelect';
import {RoverCameraContainer} from './roverCameras';
import {RoverDataContainer} from './roverData';
import {SolDateSelectContainer} from './solDateSelect';

function RoverSearchingOptions() {
    return (
        <>
        <RoverSelectContainer/>
        <RoverCameraContainer/>
        <SolDateSelectContainer/>
        <RoverDataContainer />
        </>
    )
}

export default RoverSearchingOptions;