import {bool, func, number, string} from 'prop-types';
import React from 'react';
import {debounce} from 'lodash';

function debouncedOnChange(actionType, value, onChangeHandler) {
    return debounce(value => onChangeHandler(actionType, 'date', value), 20000);
};

function SolDateSelect({actionType, isFetchingManifest, maxSolDate, onChangeHandler}) {
    // const debouncedOnChange = (value) => debounce((value) => onChangeHandler(actionType, value), 100);
    return (
        <input 
            type="number" 
            placeholder='sol day'
            max={maxSolDate} min="0"
            onChange={event => onChangeHandler(actionType, 'date', event.target.value)}
            // onChange={event => debouncedOnChange(actionType, event.target.value, onChangeHandler)}
            disabled={isFetchingManifest}
            />
    );
};

SolDateSelect.propTypes = {
    actionType: string,
    isFetchingManifest: bool,
    onChangeHandler: func,
    maxSolDate: number
};

export default SolDateSelect;