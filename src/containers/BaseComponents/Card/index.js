import React, { memo } from 'react';
import classnames from 'classnames';
import './index.scss';

const prefixCls = 'mi-card';

export default memo((props) => {
  const {
    className = '',
    style = {},
    title = '标题',
    subtitle = '副标题',
    addition = '附加说明',
  } = props
  return (
    <div className={classnames(prefixCls, {
      [className]: !!className,
    })} style={style}>
      {
        title ? (
          <div className={`${prefixCls}__header`}>
            <div className={`${prefixCls}__header__left`}>
              <div className={`${prefixCls}__header__left__title`}>
                <span>{title}</span>
                <span>{subtitle}</span>
              </div>
              {
                addition ? (
                  <div className={`${prefixCls}__header__left__addition`}>{addition}</div>
                ) : null
              }
            </div>
            <div className={`${prefixCls}__header__right`}>跳转</div>
          </div>
        ) : null
      }
      <div className={`${prefixCls}__body`}>
        {props.children}
      </div>
    </div>
  )
})