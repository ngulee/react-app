import React, { memo, useState, useEffect } from 'react';
import { getHeaderRows, getColumnsKeyMap } from './tools';

export default memo(({
  columns = [],
  dataSource = [],
  bodyRowsHeights = [],
}) => {

  const [columsKey, setColumsKey] = useState(getHeaderRows([]));

  useEffect(() => {
    setColumsKey(getColumnsKeyMap(columns));
  }, [columns]);

  return (
    <tbody>
    {
      dataSource.map((row, index) => {
        const style = {};
        const height = bodyRowsHeights[index];
        if (height > 0) {
          Object.assign(style, {
            height
          })
        }
        return (
          <tr key={index} style={style}>
            {
              columsKey.map(({ key, dataIndex, render, width }, colIndex) => {
                const value = row[dataIndex];
                const spanStyle = {};
                if (width) {
                  Object.assign(spanStyle, {
                    width,
                  })
                }
                return (
                  <td key={key || dataIndex} >
                    <span style={spanStyle}>{render ? render(value, row, index) : value}</span>
                  </td>
                )
              })
            }
          </tr>
        )
      })
    }
  </tbody>
  )
})