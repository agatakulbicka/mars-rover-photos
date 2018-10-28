import {CHANGE_SELECTED_ROVER} from '../../shared/constants';

export function changeSelectedRover(selectedRover) {
    return {
        type: CHANGE_SELECTED_ROVER,
        data: {
            selectedRover: selectedRover.toLowerCase()
        }
    }
}