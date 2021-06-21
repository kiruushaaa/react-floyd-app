import { connect } from 'react-redux';
import DimensionalInput from './DimensionalInput';
import { changeDimActionCreator } from '../../../redux/app-reducer';

const mapStateToProps = state => ({
  value: state.dim,
});

const mapDispatchToProps = dispatch => ({
  changeDimHandler: value => dispatch(changeDimActionCreator(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DimensionalInput);
