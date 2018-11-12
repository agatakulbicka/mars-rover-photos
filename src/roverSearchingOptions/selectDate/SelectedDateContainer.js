import {connect} from 'react-redux';
import {compose} from 'redux';
import SelectedDate from './SelectedDate';
import {changeSingleData} from '../../shared/actions';
import {CHANGE_SELECTED_SOL_DATE, CHANGE_SELECTED_EARTH_DATE} from '../../shared/constants';
import {dateTypes} from '../../shared/labels';

const mapStateToProps = ({
    searchingOptions: {
        selectedDateType,
        roverManifest,
        status,
        selectDate
    }
}) => {
    const isSolDate = selectDate.selectedDateType === dateTypes.sol.id;
    return {
    actionType: isSolDate ? CHANGE_SELECTED_SOL_DATE : CHANGE_SELECTED_EARTH_DATE,
    isSolDate, 
    baseClassName: `${isSolDate ? 'sol' : 'earth'}-date-select`,
    isFetchingManifest: status.isFetchingManifest,
    maxSolDate: roverManifest.max_sol || 0,
    endDate: roverManifest.max_date,
    startDate: roverManifest.landing_date
}};

const mapDispatchToProps = dispatch =>({
    onChangeHandler: compose(dispatch, changeSingleData)
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectedDate);