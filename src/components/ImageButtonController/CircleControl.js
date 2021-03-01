import React, { Component } from 'react';

class CircleControl extends Component {

    render(){
        const {x, y, r, fill, stroke, strokeWidth , updateParent} = this.props;
        return ( 
            <circle  
                cx={x} cy={y} r={r} fill={fill} 
                stroke={stroke} strokeWidth={strokeWidth * 1.2}
                onClick={updateParent}
            />
         );
    }
}
export default CircleControl;