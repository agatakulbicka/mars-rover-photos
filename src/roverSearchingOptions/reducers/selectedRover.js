import {CHANGE_SELECTED_ROVER} from '../../shared/constants';

    export function selectedRover(state = 'curiosity', action) {
        switch (action.type) {
            case CHANGE_SELECTED_ROVER:
                return action.data.selectedRover
            default:
                return state
        }
}