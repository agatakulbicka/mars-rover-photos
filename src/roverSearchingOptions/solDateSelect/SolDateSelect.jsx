import {bool, number} from 'prop-types';
import React from 'react';

function SolDateSelect({isFetchingManifest, maxSolDate}) {
    return (
        <input 
            type="number" 
            placeholder='sol day'
            max={maxSolDate} min="0"
            disabled={isFetchingManifest}
            />
    );
};

SolDateSelect.propTypes = {
    isFetchingManifest: bool,
    maxSolDate: number
};

export default SolDateSelect;