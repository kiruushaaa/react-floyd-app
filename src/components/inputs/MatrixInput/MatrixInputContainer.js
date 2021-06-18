import { connect } from 'react-redux';
import MatrixInput from './MatrixInput';

const mapStateToProps = state => ({
  dim: state.dim,
});

export default connect(mapStateToProps)(MatrixInput);
