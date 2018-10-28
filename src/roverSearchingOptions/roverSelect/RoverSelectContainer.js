import {compose} from 'redux';
import {connect} from 'react-redux';
import {changeSelectedRover, fetchRoverManifest} from '../actions/index';
import {roverNames} from '../../shared/labels';
import {Select} from '../../shared/components';
import {fetchData} from '../../shared/actions';

const mapStateToProps = ({searchingOptions: {selectedRover}}) => ({
    baseClassName: 'rover-select',
    id: selectedRover,
    selectOptions: roverNames,
    updateKey: selectedRover
})

const mapDispatchToProps = dispatch =>({
    fetchData: compose(dispatch, fetchRoverManifest),
    onChangeHandler: compose(dispatch, changeSelectedRover)
})

export default compose(
connect(mapStateToProps, mapDispatchToProps),
    fetchData()
)(Select);