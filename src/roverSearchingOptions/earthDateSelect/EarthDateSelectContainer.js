import {connect} from 'react-redux';
import EarthDateSelect from './EarthDateSelect';

const mapStateToProps = ({searchingOptions: {roverManifest, status}}) => {
    return {
    baseClassName: 'earth-date-select',
    endDate: roverManifest.max_date,
    isFetchingManifest: status.isFetchingManifest,
    startDate: roverManifest.landing_date
    }
};

export default connect(mapStateToProps, null)(EarthDateSelect);