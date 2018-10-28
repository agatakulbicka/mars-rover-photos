import {compose} from 'redux';
import {connect} from 'react-redux';
import {changeSelectedCamera} from '../actions/index';
import {roverCameras} from '../../shared/labels';
import {Select} from '../../shared/components';

const mapStateToProps = ({searchingOptions: {selectedRover}}) => ({
    baseClassName: 'rover-camera-select',
    selectOptions: roverCameras[selectedRover]
})

const mapDispatchToProps = dispatch =>({
    onChangeHandler: compose(dispatch, changeSelectedCamera)
})

export default connect(mapStateToProps, mapDispatchToProps)(Select);