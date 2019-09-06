import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import BaseTable from './BaseTable';
import './index.scss';

const columnsMock = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: (text) => {
      return (
        <div>{text}</div>
      )
    }
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

const dataMock = [];
for (let i = 0; i < 20; i++) {
  dataMock.push({
    key: i,
    name:  `品类${i+1}`,
    age: i + 1,
    address: 'Lake Street 42',
  });
}
const prefixCls = 'miui-table__vertical';

export default (props = {}) => {
  const {
    columns = columnsMock,
    dataSource = dataMock,
  } = props;

  const [ componentState, setComponentState] = useState({
    hasTitleFixed: false,
    headColumsWidth: [],
  });

  useEffect(() => {
    setTimeout(() => {
      const scrollYBox = document.querySelector(`#${prefixCls}`).parentNode;
      const tableScroll = scrollYBox.querySelector(`#${prefixCls} .miui-table`);
      if (!tableScroll || !scrollYBox) {
        return;
      }

      const thWidths = [...tableScroll
              .querySelectorAll('thead > tr > th')]
              .map((th => th.clientWidth));
      const isOverflowY = tableScroll.clientHeight > scrollYBox.clientHeight;

      setComponentState({
        hasTitleFixed: isOverflowY,
        headColumsWidth: thWidths,
      });
    }, 50);
  }, [columns]);

  const {
    hasTitleFixed,
    headColumsWidth,
  } = componentState;


  return (
    <div id={prefixCls} className={prefixCls}>
        <div className={classnames(`${prefixCls}__main`, {
          [`${prefixCls}__main_top-fixed`]: hasTitleFixed
        })}>
          <BaseTable
            columns={columns}
            dataSource={dataSource}
          />
        </div>
        {
          hasTitleFixed ? (
            <div className={`${prefixCls}__top-fixed`}>
              <div className={`${prefixCls}__top-fixed__outer`}>
                <div className={`${prefixCls}__top-fixed__inner`}>
                  <BaseTable
                    columns={columns}
                    headColumsWidth={headColumsWidth}
                  />
                </div>
              </div>
            </div>
          ) : null
        }
    </div>
  )
}