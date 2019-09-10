import React, { memo } from 'react';
import './index.scss';

const prefixCls = 'line-dot-loading'

export default memo(() => {
  return (
    <div className={prefixCls}>
      <div className={`${prefixCls}__item`} />
      <div className={`${prefixCls}__item`} />
      <div className={`${prefixCls}__item`} />
      <div className={`${prefixCls}__item`} />
    </div>
  )
})