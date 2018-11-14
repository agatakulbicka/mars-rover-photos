import React from 'react';
import {RoverSelectContainer} from './roverSelect';
import {RoverCameraContainer} from './roverCameras';
import {RoverDataContainer} from './roverData';
import {SelectedDateContainer, SelectDateTypeContainer} from './selectDate';

function RoverSearchingOptions() {
    return (
        <>
        <RoverSelectContainer/>
        <RoverCameraContainer/>
        <SelectDateTypeContainer/>
        <SelectedDateContainer/>
        <RoverDataContainer />
        </>
    )
}

export default RoverSearchingOptions;