import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div className="home">
    <h4>Home111</h4>
    <ul>
      <li><Link to="/redux">查看Redux</Link></li>
      <li><Link to="/directions">查看Directions</Link></li>
      <li><Link to="/router">查看React Router</Link></li>
      <li><Link to="/axios">请求接口，获取数据</Link></li>
    </ul>
  </div>
);