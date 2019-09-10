import React, { memo } from 'react';
import './index.scss';

const prefixCls = 'miui-progress';

const getRandomArbitrary = (min, max) => {
  return Math.random() * (max - min) + min; 
}

export default memo((props) => {
  const {
    value = getRandomArbitrary(10, 100),
    height = 20,
    background = 'linear-gradient(90deg,rgba(103,227,164,1) 0%,rgba(29,213,151,1) 100%)',
    duration = getRandomArbitrary(0.1, 0.7)
  } = props;

  return (
    <div className={prefixCls}>
      <div className={`${prefixCls}__outer`} style={{
        height,
        borderRadius: height / 2,
      }} >
        <div
          className={`${prefixCls}__outer__inner`}
          style={{ width: `${value}%`}}
        >
          <div className={`${prefixCls}__outer__inner__line`} style={{
            background,
            borderRadius: 1000,
            animation: `progress ${duration}s forwards`
          }} />
        </div>
      </div>
    </div>
  )
})
