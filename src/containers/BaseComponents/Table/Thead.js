import React, { memo, useState, useEffect } from 'react';
import { getHeaderRows } from './tools';

export default memo(({
  columns = [],
  headHeight = [],
  bodyRowsWidths = [],
  headColumsWidth = [],
}) => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    setRows(getHeaderRows(columns));
  }, [columns]);

  console.log('rows:', rows)

  return (
    <thead>
      {
        rows.map((row, index) => {
          const style = {};
          if (headHeight.length > 0) {
            Object.assign(style, {
              height: headHeight[0],
            })
          }
          return (
            <tr key={index} style={style}>
              {
                row.map(({ children, className, colSpan = 1, rowSpan = 1 } = {}, idx) => {
                  const colStyle = {};
                  // const width = headColumsWidth[idx];
                  // if (width) {
                  //   Object.assign(colStyle, {
                  //     width,
                  //   })
                  // }
                  // if (idx === (row.length -1) || rowSpan > 1) {
                  //   const width = headColumsWidth[idx];
                  //   Object.assign(colStyle, {
                  //     width,
                  //   })
                  // }
                  return (
                    <th
                      key={idx}
                      className={className}
                      colSpan={colSpan}
                      rowSpan={rowSpan}
                    >
                      <span style={colStyle} >
                        {children}
                      </span>
                    </th>
                  )
                })
              }
            </tr>
          );
        })
      }
    </thead>
  )
})