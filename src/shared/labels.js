export const roverNames = {
    curiousity: {
        value: 'Curiousity',
        id: 1
    },
    opportunity: {
        value: 'Opportunity',
        id: 2
    },
    spirit: {
        value: 'Spirit',
        id: 3
    }
};

const commonAllCameras = {
    FHAZ: {
        abbr: 'FHAZ',
        fullName: 'Front Hazard Avoidance Camera'
    },
    RHAZ: {
        abbr: 'RHAZ',
        fullName: 'Rear Hazard Avoidance Camera',
    },
    NAVCAM: {
        abbr: 'NAVCAM',
        fullName: 'Navigation Camera'
    }    
};

const commonOppSpirCameras = {
    PANCAM: {
        abbr: 'PANCAM',
        fullName: 'Panoramic Camera'
    },
    MINITES: {
        abbr: 'MINITES',
        fullName: 'Miniature Thermal Emission Spectrometer (Mini-TES)'
    }
}

export const roverCameras = {
    curiousity: {
        ...commonAllCameras,
        MAST: {
            abbr: 'MAST',
            fullName: 'Mast Camera'
        },
        CHEMCAM: {
            abbr: 'CHEMCAM',
            fullName: 'Chemistry and Camera Complex'
        },
        MAHLI: {
            abbr: 'MAHLI',
            fullName: 'Mars Hand Lens Imager'
        },
        MARDI: {
            abbr: 'MARDI',
            fullName: 'Mars Descent Imager'
        }
    },
    opportunity: {
        ...commonAllCameras,
        ...commonOppSpirCameras
    },
    spirit: {
        ...commonAllCameras,
        ...commonOppSpirCameras
    }
}