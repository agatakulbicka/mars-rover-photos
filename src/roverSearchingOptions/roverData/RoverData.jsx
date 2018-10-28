import {object, string} from 'prop-types';
import React from 'react';
import {manifestFields} from '../../shared/labels';
import '../../shared/styles/loader.css';
import '../../shared/styles/styles.css';

function RoverData({roverManifest, baseClassName = 'manifest', loaderClass, noDataClass}){
    return (
        <section className={`${baseClassName} `}>
        <div className={`${loaderClass}`}></div>
            {Object.keys(roverManifest).map(field => (manifestFields[field] ?
                <p key={field} className={noDataClass}>{`${manifestFields[field]}: ${roverManifest[field]}`}</p> : null
            ))}
        </section>
    );
}

RoverData.propTypes = {
    baseClassName: string,
    loaderClass: string,
    roverManifest: object
}

export default RoverData;