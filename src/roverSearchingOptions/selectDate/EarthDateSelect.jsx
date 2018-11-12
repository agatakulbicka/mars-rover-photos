import {bool, func, string} from 'prop-types';
import React from 'react';

function EarthDateSelect({actionType, endDate, isFetchingManifest, startDate, onChangeHandler}) {
    return (
        <input 
            type="date" 
            disabled={isFetchingManifest}
            min={startDate}
            max={endDate}
            onChange={event => onChangeHandler(actionType, 'date', event.target.value)}
            />
    );
};

EarthDateSelect.propTypes = {
    actionType: string,
    isFetchingManifest: bool,
    endDate: string,
    onChangeHandler: func,
    startDate: string
};

export default EarthDateSelect;