import {connect} from 'react-redux';
import {compose} from 'redux';
import SolDateSelect from './SolDateSelect';
import {changeSingleData} from '../../shared/actions';
import {CHANGE_SELECTED_SOL_DATE} from '../../shared/constants';

const mapStateToProps = ({searchingOptions: {roverManifest, status}}) => ({
    actionType: CHANGE_SELECTED_SOL_DATE,
    baseClassName: 'sol-date-select',
    isFetchingManifest: status.isFetchingManifest,
    maxSolDate: roverManifest.max_sol || 0
})

const mapDispatchToProps = dispatch =>({
    onChangeHandler: compose(dispatch, changeSingleData)
});

export default connect(mapStateToProps, mapDispatchToProps)(SolDateSelect);