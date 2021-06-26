import { connect } from 'react-redux';
import MatrixCell from './MatrixCell';

const mapStateToProps = (state, ownProps) => {
  return {
    isValid: ownProps.isValid,
    value: ownProps.value,
    position: ownProps.position,
    isNegative: ownProps.isNegative,
    isTrailing: ownProps.isTrailing,
    waysStep: ownProps.isValid
      ? state.info.waysHistory.get(state.dim).step
      : null,
  };
};

export default connect(mapStateToProps)(MatrixCell);
