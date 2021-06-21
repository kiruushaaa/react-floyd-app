import { connect } from 'react-redux';
import Button from './Button';
import {
  fillMatrixRandomActionCreator,
  runAlgorithmActionCreator,
} from '../../redux/app-reducer';

const mapStateToProps = (state, ownProps) => ({
  text: ownProps.text,
  random: ownProps.random,
});

const mapDispatchToProps = dispatch => ({
  fillClickHandler: () => dispatch(fillMatrixRandomActionCreator()),
  runClickHandler: () => dispatch(runAlgorithmActionCreator()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Button);
