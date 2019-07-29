import React from 'react';
import { connect } from 'react-redux';
import {
  increaseCount,
  decreaseCount,
  resetCount,
} from '../../redux/actions/arithmatic';

const ReduxDemo = (props) => {
  const { increase, decrease, reset, count } = props;
  return (
    <div className="redux">
      <div>
        <button onClick={() => { increase(); }}>增加</button>
      </div>
      <div>
        <button onClick={() => { decrease(); }}>减少</button>
      </div>
      <div>
        <button onClick={() => { reset(); }}>重置</button>
      </div>
      <h3>count:{count}</h3>
    </div>
  )
};

const mapStateToProps = (state = {}) => {
  const { arithmetic: { count } } = state;
  return {
    count
  };
}

export default connect(mapStateToProps, {
  increase: increaseCount,
  decrease: decreaseCount,
  reset: resetCount,
})(ReduxDemo);