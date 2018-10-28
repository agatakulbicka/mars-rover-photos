import {func, object, string} from 'prop-types';
import React from 'react';

function Select({onChangeHandler, baseClassName = 'select', selectOptions}) {
    console.log("ASL:KDALKSJDLK:AJSDK:JADLKJAL:SDKJ", selectOptions)
    return (
        <select className={baseClassName} onChange={event => onChangeHandler(event.target.value)}
        >{Object.values(selectOptions)
            .map(option =>
             <option 
                className={`${baseClassName}_option`}
                key={option.id} 
                value={option.value}>
                    {option.value}
            </option>)}
        </select>
    )
}

Select.propTypes = {
    baseClassName: string,
    onChangeHandler: func,
    selectOptions: object
}

export default Select;