import {CHANGE_SELECTED_SOL_DATE, CHANGE_SELECTED_EARTH_DATE, CHANGE_SELECTED_DATE_TYPE} from '../../shared/constants';
import {dateTypes} from '../../shared/labels';
import {getSelectedItemId} from '../../shared/utils';

    export function selectedEarthDate(state = 0, action) {
        switch (action.type) {
            case CHANGE_SELECTED_EARTH_DATE:
                return action.data.date
            default:
                return state
        }
    };

export function selectedSolDate(state = '', action) {
    switch (action.type) {
        case CHANGE_SELECTED_SOL_DATE:
            return action.data.date
        default:
            return state
    }
};

export function selectedDateType(state = 'earth_time', action) {
    switch (action.type) {
        case CHANGE_SELECTED_DATE_TYPE:
            return getSelectedItemId(action.data.data, dateTypes);
        default:
            return state
    }
};