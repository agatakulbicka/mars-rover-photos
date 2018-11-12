import {compose} from 'redux';
import {connect} from 'react-redux';
import {changeSelectedDateType} from '../actions/index';
import {dateTypes} from '../../shared/labels';
import {Select} from '../../shared/components';

const mapStateToProps = () => ({
    baseClassName: 'rover-camera-select',
    selectOptions: dateTypes
})

const mapDispatchToProps = dispatch =>({
    onChangeHandler: compose(dispatch, changeSelectedDateType)
})

export default connect(mapStateToProps, mapDispatchToProps)(Select);