import PropTypes from 'prop-types';
import React, {Component} from 'react';

export function fetchData() {
    return BaseComponent => {
        class fetchDataHOC extends Component {
            componentDidMount() {
                this.props.fetchData(this.props.id);
            }
            componentDidUpdate(nextProps) {
                if (
                    nextProps.updateKey &&
                    nextProps.updateKey !==
                    this.props.updateKey
                ) {
                    nextProps.fetchData(this.props.id);
                }
            }
            render() {
                return (
                    <BaseComponent {...this.props} />
                );
            }
        }

        fetchDataHOC.propTypes = {
            fetchData: PropTypes.func.isRequired,
            updateKey: PropTypes.oneOfType([
                PropTypes.bool,
                PropTypes.string,
                PropTypes.number
            ]),
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        };

        fetchDataHOC.defaultProps = {
            updateKey: null
        };

        return fetchDataHOC;
    };
}

export default fetchData;