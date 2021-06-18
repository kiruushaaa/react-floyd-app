import { connect } from 'react-redux';
import { changeMatrixActionCreator } from '../../../../redux/app-reducer';
import Input from './Input';
import { getNormalValue } from '../../../../utils/utils';

const mapStateToProps = (state, { row, column }) => ({
  value: state.matrix[row][column],
  row,
  column,
});

const mapDispatchToProps = dispatch => ({
  changeMatrix: (value, params) => {
    let action = changeMatrixActionCreator(getNormalValue(value), params);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Input);
