import {bool, number, string} from 'prop-types';
import React from 'react';

function EarthDateSelect({endDate, isFetchingManifest, startDate}) {
    return (
        <input 
            type="date" 
            disabled={isFetchingManifest}
            min={startDate}
            max={endDate}
            />
    );
};

EarthDateSelect.propTypes = {
    isFetchingManifest: bool,
    endDate: string,
    startDate: string
};

export default EarthDateSelect;