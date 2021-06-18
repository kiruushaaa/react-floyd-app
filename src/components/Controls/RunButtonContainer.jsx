import React from 'react';
import { connect } from 'react-redux';
import { runAlgorithmActionCreator } from '../../redux/app-reducer';

const RunBtn = props => {
  return (
    <button className='btn alg-btn' type='button' onClick={props.clickHandler}>
      Показать результаты
    </button>
  );
};

const mapDispatchToProps = dispatch => ({
  clickHandler: () => dispatch(runAlgorithmActionCreator()),
});

export default connect(null, mapDispatchToProps)(RunBtn);
