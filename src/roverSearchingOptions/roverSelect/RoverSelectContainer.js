import {compose} from 'redux';
import {connect} from 'react-redux';
import {changeSelectedRover} from '../actions/index';
import {roverNames} from '../../shared/labels';
import {Select} from '../../shared/components';

const mapStateToProps = () => ({
    baseClassName: 'rover-select',
    selectOptions: roverNames
})

const mapDispatchToProps = dispatch =>({
    onChangeHandler: compose(dispatch, changeSelectedRover)
})

export default connect(mapStateToProps, mapDispatchToProps)(Select);