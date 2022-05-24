import { connect } from 'react-redux';
import ResultSection from './ResultSection';

const mapStateToProps = state => ({
  matrixHistory: [...state.info.matrixHistory.values()].map(data => data.step),
  waysHistory: [...state.info.waysHistory.values()].map(data => data.step),
  negativeWeightCycle: state.info.negativeWeightCycle,
  dim: state.dim
});

export default connect(mapStateToProps)(ResultSection);
