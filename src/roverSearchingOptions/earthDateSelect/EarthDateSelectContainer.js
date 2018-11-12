import {connect} from 'react-redux';
import {compose} from 'redux';
import EarthDateSelect from './EarthDateSelect';
import {changeSingleData} from '../../shared/actions';
import {CHANGE_SELECTED_EARTH_DATE} from '../../shared/constants';

const mapStateToProps = ({searchingOptions: {roverManifest, status}}) => {
    return {
    actionType: CHANGE_SELECTED_EARTH_DATE,
    baseClassName: 'earth-date-select',
    endDate: roverManifest.max_date,
    isFetchingManifest: status.isFetchingManifest,
    startDate: roverManifest.landing_date
    }
};

const mapDispatchToProps = dispatch =>({
    onChangeHandler: compose(dispatch, changeSingleData)
});

export default connect(mapStateToProps, mapDispatchToProps)(EarthDateSelect);