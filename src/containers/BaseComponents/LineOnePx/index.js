import React, { memo } from 'react';
import './index.scss';

const prefixCls = 'line-one-px';

export default memo(() => {
  return (
    <div className={prefixCls}>
      移动端1px
    </div>
  )
})