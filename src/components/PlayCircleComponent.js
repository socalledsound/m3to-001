import React from 'react';
const PlayCircleComponent = ({ x, y, size, fill, stroke, strokeWidth, updateParentWithClick, updateParentWithHover }) => {
    // console.log(x,y,size);
    return ( 
        <circle 
            cx={x} cy={y} r={size} fill={fill}
            stroke={stroke} strokeWidth={strokeWidth}
            onClick={updateParentWithClick}
            // onMouseEnter={updateParentWithHover}
            // onMouseLeave={updateParentWithHover}
            // onMouseDown={updateParentWithMouseDown}
            // onMouseUp={updateParentWithMouseUp}
            />

     );
}
 
export default PlayCircleComponent;