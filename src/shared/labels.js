export const roverNames = {
    curiosity: {
        value: 'Curiosity',
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
    all: {
        id: 'all',
        value: 'All'
    },
    FHAZ: {
        id: 'FHAZ',
        value: 'Front Hazard Avoidance Camera'
    },
    RHAZ: {
        id: 'RHAZ',
        value: 'Rear Hazard Avoidance Camera',
    },
    NAVCAM: {
        id: 'NAVCAM',
        value: 'Navigation Camera'
    }   
};

const commonOppSpirCameras = {
    PANCAM: {
        id: 'PANCAM',
        value: 'Panoramic Camera'
    },
    MINITES: {
        id: 'MINITES',
        value: 'Miniature Thermal Emission Spectrometer (Mini-TES)'
    }
}

export const roverCameras = {
    curiosity: {
        ...commonAllCameras,
        MAST: {
            id: 'MAST',
            value: 'Mast Camera'
        },
        CHEMCAM: {
            id: 'CHEMCAM',
            value: 'Chemistry and Camera Complex'
        },
        MAHLI: {
            id: 'MAHLI',
            value: 'Mars Hand Lens Imager'
        },
        MARDI: {
            id: 'MARDI',
            value: 'Mars Descent Imager'
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
};

export const manifestFields = {
    landing_date: 'Landing date',
    launch_date: 'Launch date',
    max_date: 'Last photo from (earth date)',
    max_sol: 'Last photo from (sol date)',
    status: 'Rover status',
    total_photos: 'All rover photos',
    name: 'Rover name'
};

export const dateTypes = {
    earth_date: {
        id: 'earth_date',
        value: 'earth time'
    },
    sol: {
        id: 'sol',
        value: 'sol time'
    }
};