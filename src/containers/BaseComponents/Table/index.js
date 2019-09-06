import React, { memo } from 'react';
import HorizontalTable from './HorizontalTable';
import VerticalTable from './VerticalTable';

export default (memo((props = {}) => {
  const {
    scrollDirection = 'horizontal',
    ...othersProps
  } = props;
  return scrollDirection === 'horizontal' ? (
    <HorizontalTable {...othersProps} />
  ) : (
    <VerticalTable {...othersProps} />
  )
}));