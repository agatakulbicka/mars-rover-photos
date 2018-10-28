import {object, func, string} from 'prop-types';
import React from 'react';
import {roverNames} from '../shared/labels';

function RoverCameras({getSelectedRover, selectedRover}) {
    return (
        <select onChange={event => getSelectedRover(event.target.value)}
        >{Object.values(roverNames)
            .map(rover =>
             <option 
                key={rover.id} 
                value={rover.value}>
                    {rover.value}
            </option>)}
        </select>
    )
}

RoverSelect.propTypes = {
    getSelectedRover: func,
    selectedRover: object
}

export default RoverSelect;