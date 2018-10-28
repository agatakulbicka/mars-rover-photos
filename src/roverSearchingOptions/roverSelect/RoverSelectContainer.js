import {compose} from 'redux';
import {connect} from 'react-redux';
import {getSelectedRover} from '../actions/index';
import {roverNames} from '../../shared/labels';
import {Select} from '../../shared/components';

const mapStateToProps = () => ({
    baseClassName: 'rover-select',
    selectOptions: roverNames
})

const mapDispatchToProps = dispatch =>({
    onChangeHandler: compose(dispatch, getSelectedRover)
})

export default connect(mapStateToProps, mapDispatchToProps)(Select);