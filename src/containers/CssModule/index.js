import React, { Component } from 'react';

import listStyle from './style/list.module.css';

const list = ('name').split('');

const UlList = () => {
  return (
    <ul className={listStyle.list}>
      {
        list.map((item) => {
          return (
          <li key={item}>{item}</li>
          )
        })
      }
    </ul>
  )
}

export default UlList;
