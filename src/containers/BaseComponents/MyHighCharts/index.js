import React, { memo, useState, useEffect } from 'react';
import axios from 'axios';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import './index.scss';
const requestMiShopFlow = () => {
  return axios.get('http://mock.be.mi.com/mock/418/statFlow/widget');
}

const options = {
  credits: {
    enabled: false
  },
  tooltip: {
    shared: true,
    crosshairs: {
      width: 10,
      color: 'rgba(205, 205, 205, 0.2)',
      dashStyle: 'solid',
    },
    formatter() {
      console.log('this0:', this.points[0].point.type);
      console.log('this1:', this.points[1].point.type);
    }
  },
  chart: {
    type: 'spline',
    height: 300,
    marker: {
      borderWidth: 30,
      symbol: 'circle'        // 曲线节点类型
    },
    spacingLeft: 5,
  },
  title: {
    text: null,     // 取消标题
  },
  legend: {
    enabled: false,  // 取消图例
  },
  plotOptions: {
		spline: {
			marker: {
				enabled: false
			},
    }
  },
  xAxis: [
    {
      tickLength: 0,
      title: {
        text: null,  // 取消X轴标题
      },
      minPadding: 0.05,
      maxPadding: 0.05,
    }
  ],
  yAxis: [
    {
      gridLineDashStyle: 'longdash',
      title: {
        text: null,  // 取消Y轴标题
      }
    }
  ],
  series: [
    {
      lineWidth: 10,
      color: 'rgba(60, 130, 255, 1)',
      marker: {
        className: 'aaa',
        symbol: 'circle',
        lineColor: '#fff',
        lineWidth: 5,
        radius: 10,
      },
      data: [
        {
          type: 'a',
          y: 29.9
        },
        {
          type: 'a',
          y: 71.5
        },
        {
          type: 'a',
          y: 76.4
        },
        {
          type: 'a',
          y: 29.9
        },
        {
          type: 'a',
          y: 71.5
        },
        {
          type: 'a',
          y: 76.4
        },
      ]
    },
    {
      lineWidth: 10,
      color: 'rgba(255, 102, 73, 1)',
      marker: {
        className: 'bbb',
        symbol: 'circle',
        lineColor: '#fff',
        lineWidth: 5,
        radius: 10,
      },
      data: [
        {
          type: 'b',
          y: 19.9
        },
        {
          type: 'b',
          y: 11.5
        },
        {
          type: 'b',
          y: 86.4
        },
        {
          type: 'b',
          y: 19.9
        },
        {
          type: 'b',
          y: 11.5
        },
        {
          type: 'b',
          y: 86.4
        },
      ]
    }
  ]
}

export default memo(() => {
  return (
    <div id='container'>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
    </div>
  )
})
