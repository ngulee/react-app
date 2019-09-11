import React, { memo } from 'react';
import Progress from '../Progress';
import './index.scss';

const prefixCls = 'category-list';

export default memo((props = {}) => {
  const { list = [] } = props;
  return (
    <ul className={prefixCls}>
      {
        list.map((item = {}, index) => {
          const { complete, cells = [] } = item;
          return (
            <li key={index} className={`${prefixCls}__item`}>
              <ul className={`${prefixCls}__item__detail`}>
                {
                  cells.map((cell = {}, idx) => {
                    const { val_desc } = cell;
                    return (
                      <li
                        key={idx}
                        className={`${prefixCls}__item__detail__item`}
                        style={{ width: `${(1 / list.length) * 100}%` }}
                        >
                          {val_desc}
                        </li>
                    )
                  })
                }
              </ul>
              <Progress height={10} value={complete * 100} />
            </li>
          )
        })
      }
    </ul>
  )
})