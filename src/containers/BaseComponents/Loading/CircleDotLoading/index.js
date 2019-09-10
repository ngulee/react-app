import React, { memo } from 'react';
import './index.scss';

const prefixCls = 'circle-dot-loading'

export default memo(() => {
  return (
    <div className={prefixCls}>
      <div className={`${prefixCls}__list`}>
        <div className={`${prefixCls}__list__item`} />
        <div className={`${prefixCls}__list__item`} />
        <div className={`${prefixCls}__list__item`} />
        <div className={`${prefixCls}__list__item`} />
      </div>
      <div className={`${prefixCls}__list`}>
        <div className={`${prefixCls}__list__item`} />
        <div className={`${prefixCls}__list__item`} />
        <div className={`${prefixCls}__list__item`} />
        <div className={`${prefixCls}__list__item`} />
      </div>
      <div className={`${prefixCls}__list`}>
        <div className={`${prefixCls}__list__item`} />
        <div className={`${prefixCls}__list__item`} />
        <div className={`${prefixCls}__list__item`} />
        <div className={`${prefixCls}__list__item`} />
      </div>
    </div>
  )
})