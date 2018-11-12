import {CHANGE_SELECTED_DATE_TYPE} from '../../shared/constants';

export function changeSelectedDateType(changeSelectedDateType) {
    return {
        type: CHANGE_SELECTED_DATE_TYPE,
        data: {
            data: changeSelectedDateType
        }
    }
}