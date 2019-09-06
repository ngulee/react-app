

export const getHeaderRows = (columns = [], currentRow = 0, rows = []) => {
  rows[currentRow] = rows[currentRow] || [];

  columns.forEach(column => {
    if (column.rowSpan && rows.length < column.rowSpan) {
      while(rows.length < column.rowSpan) {
        rows.push([]);
      }
    }

    const cell = {
      key: column.key,
      className: column.className || '',
      children: column.renderTitle ? column.renderTitle(column.title, column) : column.title,
      column,
    };

    if (column.children) {
      getHeaderRows(column.children, currentRow + 1, rows);
    }

    if ('colSpan' in column) {
      cell.colSpan = column.colSpan;
    }

    if ('rowSpan' in column) {
      cell.rowSpan = column.rowSpan;
    }

    if (cell.colSpan !== 0) {
      rows[currentRow].push(cell);
    }
  });
  return rows.filter(row => row.length > 0);
}

export const getColumnsKeyMap = (columns = []) => {
  const keysMap = [];

  const flatColumns = (columns = []) => {
    columns.forEach((column = {}) => {
      const { children = [] } = column;
      if (children.length > 0) {
        flatColumns(children)
      } else {
        keysMap.push(column);
      }
    });
  }

  flatColumns(columns);

  return keysMap;
}