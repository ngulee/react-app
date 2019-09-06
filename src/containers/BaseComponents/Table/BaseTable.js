import React, { memo } from 'react';
import Thead from './Thead';
import Tbody from './Tbody';
import './baseTable.scss';


export default memo((props = {}) => {
  const {
    columns = [],
    dataSource = [],
    headHeight = [],
    bodyRowsHeights = [],
    headColumsWidth = [],
  } = props;

  return (
    <table className='miui-table' >
      <Thead
        columns={columns}
        headHeight={headHeight}
        headColumsWidth={headColumsWidth}
      />
      <Tbody
        columns={columns}
        dataSource={dataSource}
        bodyRowsHeights={bodyRowsHeights}
      />
    </table>
  )
})