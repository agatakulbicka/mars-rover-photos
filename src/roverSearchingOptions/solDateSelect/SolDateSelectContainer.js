import {connect} from 'react-redux';
import SolDateSelect from './SolDateSelect';

const mapStateToProps = ({searchingOptions: {roverManifest, status}}) => ({
    baseClassName: 'sol-date-select',
    maxSolDate: roverManifest.max_sol || 0,
    isFetchingManifest: status.isFetchingManifest
})

export default connect(mapStateToProps, null)(SolDateSelect);