import React from 'react';
import {RoverSelectContainer} from './roverSelect';
import {RoverCameraContainer} from './roverCameras';
import {RoverDataContainer} from './roverData';
import {SolDateSelectContainer} from './solDateSelect';
import {EarthDateSelectContainer} from './earthDateSelect';

function RoverSearchingOptions() {
    return (
        <>
        <RoverSelectContainer/>
        <RoverCameraContainer/>
        <SolDateSelectContainer/>
        <EarthDateSelectContainer/>
        <RoverDataContainer />
        </>
    )
}

export default RoverSearchingOptions;