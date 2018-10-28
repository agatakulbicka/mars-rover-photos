import {connect} from 'react-redux';
import RoverData from './RoverData';

const mapStateToProps = ({searchingOptions: {roverManifest, status: {isFetchingManifest}}}) => ({
    loaderClass: isFetchingManifest ? 'is-loading' : '',
    noDataClass: isFetchingManifest ? 'is-hidden' : '',
    roverManifest
})

export default connect(mapStateToProps, null)(RoverData);