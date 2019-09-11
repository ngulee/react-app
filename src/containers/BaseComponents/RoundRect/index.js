import React, { memo} from 'react';
import './index.scss';

const prefixCls = 'round-rect';
const mockList = [
  {
    label: '品类'
  },
  {
    label: '月目标'
  },
  {
    label: '月达成'
  },
  {
    label: '达成率'
  },
  {
    label: '月同比'
  },
]

export default memo((props = {}) => {
  const { items = mockList } = props;
  return (
    <ul className={prefixCls}>
      {
        items.map(({ label }, index) => {
          return (
            <li key={index} style={{ width: `${(1 / items.length) * 100}%` }}>{label}</li>
          );
        })
      }
    </ul>
  )
})