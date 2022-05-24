import { connect } from 'react-redux';
import Button from './Button';
import {
  fillMatrixRandomActionCreator,
  runAlgorithmActionCreator,
} from '../../redux/app-reducer';

const mapStateToProps = (state, { text, random, isPositive }) => ({
  text,
  random,
  isPositive
});

const mapDispatchToProps = dispatch => ({
  fillClickHandler: (isPositive) => dispatch(fillMatrixRandomActionCreator(isPositive)),
  runClickHandler: () => dispatch(runAlgorithmActionCreator()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Button);
