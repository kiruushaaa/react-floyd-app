import React from 'react';
import { connect } from 'react-redux';
import { fillMatrixRandomActionCreator } from '../../redux/app-reducer';

const RandomBtn = props => {
  return (
    <button className='btn alg-btn' type='button' onClick={props.clickHandler}>
      Заполнить случайным образом
    </button>
  );
};

const mapDispatchToProps = dispatch => ({
  clickHandler: () => dispatch(fillMatrixRandomActionCreator()),
});

export default connect(null, mapDispatchToProps)(RandomBtn);
