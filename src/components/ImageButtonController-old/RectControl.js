import React from 'react';

const RectControl = ({x, y, width, height, transform, lineStart, lineEnd, fill, stroke, strokeWidth}) => {
    // console.log(lineStart, lineEnd);
    return ( 
        <g transform={transform} >
        <rect x={x} y ={y} width={width} height={height}  fill={fill} stroke={stroke} strokeWidth={strokeWidth}/> 
        {/* <line x1={lineStart.x} y1={lineStart.y} x2={lineEnd.x} y2={lineStart.y} stroke={stroke} strokeWidth={strokeWidth} /> */}
        </g>
        );
}
 
export default RectControl;