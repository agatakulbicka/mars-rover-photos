import {CHANGE_SELECTED_CAMERA} from '../../shared/constants';

export function changeSelectedCamera(selectedCamera) {
    return {
        type: CHANGE_SELECTED_CAMERA,
        data: {
            selectedCamera: selectedCamera
        }
    }
}