import React, { Component } from 'react';
import cls from 'classnames';

import listStyle from './style/list.module.scss';

console.log('listStyle:', listStyle)

const list = ('name').split('');

const { listItem, listItemActive } = listStyle;

const UlList = () => {
  return (
    <ul className={listStyle.list}>
      {
        list.map((item) => {
          const itemCls = cls(listItem, listItemActive);
          return (
          <li key={item} className={itemCls}>{item}</li>
          )
        })
      }
    </ul>
  )
}

export default UlList;
