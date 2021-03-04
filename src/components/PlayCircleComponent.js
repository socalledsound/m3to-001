import React from 'react';
const PlayCircleComponent = ({ x, y, size, fill, stroke, strokeWidth, direction, playing, updateParentWithClick, updateParentWithHover }) => {
    // console.log(x,y,size);
    return ( 
        <g onClick={updateParentWithClick}>
        <circle 
            cx={x} cy={y} r={size} fill={fill}
            stroke={stroke} strokeWidth={strokeWidth}
            
            // onMouseEnter={updateParentWithHover}
            // onMouseLeave={updateParentWithHover}
            // onMouseDown={updateParentWithMouseDown}
            // onMouseUp={updateParentWithMouseUp}
            />


            {

                !playing ? 
                direction > 0 ?  
                    <polygon className="play-btn" points={`${x - size/4},${y - size/2},${x + size/2},${y},${x - size/4},${y + size/2}`} fill="#444"/>
                :
                
                    <polygon className="play-btn" points={`${x + size/4},${y - size/2},${x - size/2},${y},${x + size/4},${y + size/2}`} fill="#444"/>
                
                :
                    <g>
                        <rect x={x - size/2} y={y - size/2} width={size * 0.4} height={size } fill="#444"/>
                        <rect x={x + size/8} y={y - size/2} width={size * 0.4} height={size } fill="#444"/>
                    </g>
            }


 
            
            </g>
     );
}
 
export default PlayCircleComponent;