import React, { memo } from 'react';
import './index.scss';

const prefixCls = 'mi-card';

export default memo((props) => {
  const { style = {} } = props
  return (
    <div className={prefixCls} style={style}>
      {props.children}
    </div>
  )
})