import {compose} from 'redux';
import {connect} from 'react-redux';
import RoverSelect from './RoverSelect';
import {roverNames} from '../shared/labels';
import {getSelectedRover} from '../actions/index';

const mapStateToProps = (
    selectedRover
) => ({
    selectedRover
})

const mapDispatchToProps = dispatch =>({
    getSelectedRover: compose(dispatch, getSelectedRover)
})

export default connect(mapStateToProps, mapDispatchToProps)(RoverSelect);