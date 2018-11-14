export function requestData(actionType = '') {
    return {
        type: actionType
    }
}

export function receiveData(actionType = '', data) {
    return {
        type: actionType,
        data
    }
}

export function catchErrors(actionType = '', errors) {
    return {
        type: actionType,
        errors
    }
}

export function changeSingleData(actionType='', fieldName, data) {
    return {
        type: actionType,
        data: {
            [fieldName]: data
        }
    }
}