import React from 'react';
import { connect } from 'react-redux';

import {
  changeUp,
  changeDown,
  changeLeft,
  changeRight,
} from '../../redux/actions/directions';

const Directions = (props) => {
  const { up, down, left, right, direction } = props;
  return (
    <div>
      <h3>Directions</h3>
      <div>
        <button onClick={() => { up(); }}>up</button>
      </div>
      <div>
        <button onClick={() => { down(); }}>down</button>
      </div>
      <div>
        <button onClick={() => { left(); }}>left</button>
      </div>
      <div>
        <button onClick={() => { right(); }}>right</button>
      </div>
      <h3>direction:{direction}</h3>
    </div>
  );
}

const mapStateToProps = (state = {}) => {
  const { directions: { direction } } = state;
  return {
    direction,
  }
}

export default connect(mapStateToProps, {
  up: changeUp,
  down: changeDown,
  left: changeLeft,
  right: changeRight,
})(Directions);

