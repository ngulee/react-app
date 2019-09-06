import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import BaseTable from './BaseTable';
import './index.scss';

const columnsMock = [
  {
    title: '品类',
    dataIndex: 'name',
    key: 'name',
    width: 50,
    fixed: 'left',
    rowSpan: 4,
    cellRowSpan: 2,
    cellColSpan: 2,
    renderTitle: (text, record) => {
      return (
        <div>{text}1</div>
      )
    },
    render: (text, record = {}) => {
      return (
        <div>{text}</div>
      )
    }
  },
  {
    title: 'Other',
    key: 'other',
    colSpan: 4,
    children: [
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        width: 50,
        rowSpan: 3,
      },
      {
        title: 'Address',
        key: 'address',
        colSpan: 3,
        children: [
          {
            title: 'Street',
            dataIndex: 'street',
            key: 'street',
            width: 60,
            rowSpan: 2,
            render: (text) => {
              return (
                <div>
                  <div>{text}</div>
                  <div>{text}</div>
                  <div>{text}</div>
                </div>
              )
            }
          },
          {
            title: 'Block',
            key: 'block',
            colSpan: 2,
            children: [
              {
                title: 'Building',
                dataIndex: 'building',
                key: 'building',
                width: 40
              },
              {
                title: 'Number',
                dataIndex: 'number',
                key: 'number',
                width: 50,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'Company',
    key: 'company',
    colSpan: 2,
    children: [
      {
        title: 'Company Address',
        dataIndex: 'companyAddress',
        key: 'companyAddress',
        width: 100,
        rowSpan: 3,
      },
      {
        title: 'Company Name',
        dataIndex: 'companyName',
        key: 'companyName',
        rowSpan: 3,
      },
    ],
  },
  {
    title: '操作',
    dataIndex: 'gender',
    key: 'gender',
    width: 50,
    fixed: 'right',
    rowSpan: 4,
    render: () => {
      return (
        <div style={{width: 40}}>操作</div>
      )
    }
  },
];

const dataMock = [];
for (let i = 0; i < 20; i++) {
  dataMock.push({
    key: i,
    name:  `品类${i+1}`,
    age: i + 1,
    street: 'Lake Park',
    building: 'C',
    number: 2035,
    companyAddress: 'Lake Street 42',
    companyName: 'SoftLake Co',
    gender: '操作',
  });
}
const hasFixed = (columns = [], type) => {
  if ( type === 'left') {
    return columns[0].fixed === type;
  }
  if ( type === 'right') {
    return columns[columns.length - 1].fixed === type;
  }
}

const prefixCls = 'miui';

export default (props = {}) => {
  const {
    columns = columnsMock,
    dataSource = dataMock,
  } = props;

  const [ componentState, setComponentState] = useState({
    hasTitleFixed: false,
    hasLeftFixed: false,
    hasRightFixed: false,
    bodyRowsHeights: [],
    headHeight: [],
  });

  useEffect(() => {
    setTimeout(() => {
      const scrollYBox = document.querySelector(`#${prefixCls}-table__box`);
      const scrollXBox = scrollYBox.querySelector(`#${prefixCls}-table__scroll`);
      const tableScroll = scrollYBox.querySelector(`#${prefixCls}-table__scroll table`);
      if (!tableScroll) {
        return;
      }

      const isOverflowX = tableScroll.clientWidth > scrollXBox.clientWidth;
      const isOverflowY = tableScroll.clientHeight > scrollYBox.clientHeight;
      const bodyRows = [...tableScroll.querySelectorAll('tbody > tr')]
        .map(tr => tr.clientHeight);
      const headHeightValue = [...tableScroll.querySelectorAll('thead > tr')]
        .reduce((total, current) => total + current.clientHeight, 0);

      setComponentState({
        hasTitleFixed: isOverflowY,
        hasLeftFixed: isOverflowX && hasFixed(columns, 'left'),
        hasRightFixed: isOverflowX && hasFixed(columns, 'right'),
        bodyRowsHeights: bodyRows,
        headHeight: [headHeightValue],
      });
    }, 50);
  }, [columns]);

  const {
    hasLeftFixed,
    hasRightFixed,
    bodyRowsHeights,
    headHeight,
  } = componentState;


  return (
    <div id='miui-table__box' className='miui-table__box'>
      <div id={`${prefixCls}-table__wrapper`} className={`${prefixCls}-table__wrapper`}>
        <div className={`${prefixCls}-table`}>
          <div
          id={`${prefixCls}-table__scroll`}
          className={
            classnames(`${prefixCls}-table__scroll`, {
              [`${prefixCls}-table__scroll_left-fixed`]: hasLeftFixed,
              [`${prefixCls}-table__scroll_right-fixed`]: hasRightFixed,
            })
          }
        >
            <BaseTable
              columns={columns}
              dataSource={dataSource}
              bodyRowsHeights={bodyRowsHeights}
            />
          </div>
          {
            hasLeftFixed ? (
              <div className={`${prefixCls}-table__left`}>
                <div className={`${prefixCls}-table__left__outer`}>
                  <div className={`${prefixCls}-table__left__inner`}>
                    <BaseTable
                      columns={[columns[0]]}
                      dataSource={dataSource}
                      headHeight={headHeight}
                      bodyRowsHeights={bodyRowsHeights}
                    />
                  </div>
                </div>
              </div>
            ) : null
          }
          {
            hasRightFixed ? (
              <div className={`${prefixCls}-table__right`}>
                <div className={`${prefixCls}-table__right__outer`}>
                  <div className={`${prefixCls}-table__right__inner`}>
                    <BaseTable
                      columns={[columns[columns.length - 1]]}
                      dataSource={dataSource}
                      headHeight={headHeight}
                      bodyRowsHeights={bodyRowsHeights}
                    />
                  </div>
                </div>
              </div>
            ) : null
          }
        </div>
      </div>
    </div>
  )
}