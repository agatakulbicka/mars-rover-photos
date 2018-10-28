import {CHANGE_SELECTED_ROVER} from '../../shared/constants';

export function getSelectedRover(selectedRover) {
    console.log('SELECTED ROVER', selectedRover)

    return {
        type: CHANGE_SELECTED_ROVER,
        data: {
            selectedRover: selectedRover.toLowerCase()
        }
    }
}