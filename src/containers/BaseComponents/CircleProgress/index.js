import React, { memo, useEffect, useRef, useCallback } from 'react';
import './index.scss';

const prefixCls = 'circle-progress';

const getAngle = (value) => {
  return (value / 180) * Math.PI
}

export default memo((props) => {
  const {
    value = 50,
    color = 'rgba(29, 213, 151, 0)',
    circleWidth = 2,
    size = 40,
    startAngle = 30,
    anticlockwise = false,
    text = '90%',
    fontSize = 18,
  } = props;

  const canvas = useRef(null);

  // (value / 100) * 360 / 180 * Math.PI
  

  useEffect(() => {
    const cvsCtx = canvas.current.getContext('2d');
    const canvasInnerCircle = () => {
      console.log('canvas:', canvas);
      
      cvsCtx.strokeStyle = color;
      cvsCtx.lineWidth = circleWidth;
      cvsCtx.beginPath();
      cvsCtx.arc(size, size,size * 0.9, getAngle(0), getAngle(360), anticlockwise);
      cvsCtx.stroke();
    }

    const canvasText = () => {
      cvsCtx.font = `${fontSize}px Arial,"Microsoft YaHei"`;
      cvsCtx.fillStyle = color;
      cvsCtx.textAlign = 'center';
      cvsCtx.textBaseline = 'middle';
      cvsCtx.fillText(text, canvas.current.width / 2, canvas.current.height / 2);
    }

    const canvasProgress = () => {
      const gradient = cvsCtx.createLinearGradient(size, 0, size, size * 2);
      gradient.addColorStop(0, 'rgba(29, 213, 151, 0.2)');
      gradient.addColorStop(1, 'rgba(29, 213, 151, 1)');
      cvsCtx.strokeStyle = gradient;
      cvsCtx.lineWidth = 8;
      cvsCtx.beginPath();
      cvsCtx.arc(size, size,size * 0.9, getAngle(-90), getAngle(90), anticlockwise);
      cvsCtx.stroke();
    }

    const canvasOuterCircle = () => {
      const gradient = cvsCtx.createLinearGradient(size, 0, size, size * 2);
      gradient.addColorStop(0, 'rgba(29, 213, 151, 0.2)');
      gradient.addColorStop(1, 'rgba(29, 213, 151, 1)');
      cvsCtx.lineWidth = 12;
    }

    canvasInnerCircle();
    canvasText();
    canvasProgress()
   
    
  }, [props])
  return (
    <canvas 
      className={prefixCls}
      width={size * 2}
      height={size * 2}
      ref={canvas}
      data-text={text}
    >
    </canvas>
  )
})

