import {object} from 'prop-types';
import React from 'react';
import {roverNames} from '../shared/labels';

function RoverSelect() {
    console.log("Aasdasdsdsdsdsdsd", roverNames, Object.values(roverNames).map(rover => rover))
    return (
        <select>{Object.values(roverNames)
            .map(rover =>
             <option 
                key={rover.id} 
                value={rover.value}>
                    {rover.value}
            </option>)}
        </select>
    )
}

// RoverSelect.propTypes = {
//     rovers: object
// }

export default RoverSelect;