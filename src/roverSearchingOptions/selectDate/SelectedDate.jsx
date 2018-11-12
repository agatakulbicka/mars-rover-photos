import PropTypes from 'prop-types';
import React from 'react';

function renderSolDate(actionType, isFetchingManifest, onChangeHandler, maxSolDate){
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

function renderEarthDate(isFetchingManifest, startDate, endDate, onChangeHandler, actionType){
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

function SelectedDate(props){
    const {   
        actionType,
        endDate,
        isFetchingManifest,
        isSolDate,
        onChangeHandler,
        maxSolDate,
        startDate
    } = props;

    return (
        isSolDate ?
            renderSolDate(actionType, isFetchingManifest, onChangeHandler, maxSolDate) : 
            renderEarthDate(isFetchingManifest, startDate, endDate, onChangeHandler, actionType)
    );
};

SelectedDate.propTypes = {
    actionType: PropTypes.string,
    endDate: PropTypes.string,
    isFetchingManifest: PropTypes.bool,
    isSolDate: PropTypes.bool,
    onChangeHandler: PropTypes.func,
    maxSolDate: PropTypes.number,
    startDate: PropTypes.string
};

export default SelectedDate;