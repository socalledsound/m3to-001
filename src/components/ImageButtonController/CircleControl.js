import React, { Component } from 'react';

class CircleControl extends Component {

    render(){
        const {x, y, r, fill, stroke, strokeWidth , updateParentWithMouseDown , updateParentWithMouseUp ,updateParentWithHover, name} = this.props;
        return ( 
            <circle  
                cx={x} cy={y} r={r} fill={fill} 
                id={name}
                stroke={stroke} strokeWidth={strokeWidth * 1.2}
                onMouseDown={updateParentWithMouseDown}
                onMouseEnter={updateParentWithHover}
                onMouseLeave={updateParentWithHover}
                onMouseUp={updateParentWithMouseUp}
            />
         );
    }
}
export default CircleControl;