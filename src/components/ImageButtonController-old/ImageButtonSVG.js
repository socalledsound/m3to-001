import React, { Component } from 'react';
import { connect } from 'react-redux';
import { degreesToRadians, getControlPos } from '../../utils';
import { imageButtonOutlineColor } from '../../globalSettings';
import CircleControl from './CircleControl';
// import RectControl from './RectControl';

class ImageButtonSVG extends Component {
    constructor(props){
        super(props);
        this.state = {
            init: false,
            active: false,
            xModification : 0,
            yModification : -40,
            imageTheta : 0,
            volScaler : 1.0,
            pitchScaler : 1.0,
            lastMousePos : {x : 0, y: 0},
        }
        // this.init();
    }

    componentDidMount(){
        this.init();
    }


    init(){
        // const { xModification, yModification } = this.state;
        const {idx, crowdCircle} = this.props;
        const { points, inc, centerX, centerY, circleSize } = crowdCircle;
        const x = points[idx].x + centerX/2;
        const y = points[idx].y + centerY/2;
        const theta = degreesToRadians(idx * inc);
        const rotateControlPos = getControlPos(x, y, circleSize/1.5, theta);
        // const volumeControlPos = getControlPos(x, y, circleSize + xModification, theta);
        
        // const pitchControlPos = getControlPos(x, y, circleSize * -1.45 - 40, theta);
        const volumeControlPos = getControlPos(x, y, circleSize + 60, theta);
        const pitchControlPos = getControlPos(x, y, circleSize + 140, theta);
  
        // const volumeControlLineStart = getControlPos(x, y, circleSize * 1.1, theta);
        // const volumeControlLineEnd = getControlPos(x, y, circleSize * 1.5, theta);
        const controlRotateTheta = idx * inc;

        this.setState({
            x,
            y,
            rotateControlPos,
            volumeControlPos,
            pitchControlPos,
            controlRotateTheta,
            init: true,
        })
    }

    toggleMain = () => {
        const { trigCrowdSound, idx, crowdCircle} = this.props;
        const { id } = crowdCircle;
        trigCrowdSound(idx + id);
        this.toggleOutline();
    }

    toggleOutline(){
        this.setState({ active: !this.state.active });
    }

    toggleRotateControl(){
        console.log('rotate clicked');
    }

    render(){
        const {
            x,
            y,
            rotateControlPos,
            volumeControlPos,
            pitchControlPos,
            // controlRotateTheta,
            init,
            active,
            // xModification,
            // yModification,
            imageTheta,
            volScaler,
            pitchScaler,
        } = this.state;
        const {idx, image, crowdCircle} = this.props;
        const { id, circleSize, controlScaler, 
                // controlWidth, controlHeight, 
                controlFill, controlStroke, controlStrokeWidth } = crowdCircle;
        
        return ( 
            <g>
                {init &&
            <g transform={`rotate(0,${x}, ${y})`}>
                <defs>
                    <pattern id={`image${idx + id}`} height="100%" width="100%" patternContentUnits = "objectBoundingBox">
                         <image x="0" y="0" height="1" width="1" xlinkHref={image} preserveAspectRatio = "none" ></image>
                    </pattern>
                </defs>
                
                <circle onClick={this.toggleMain} cx={x} cy={y} r={circleSize} 
                        fill={`url(#image${idx})`} 
                        strokeWidth={5}
                        transform={`rotate(
                            ${imageTheta},
                            ${x},
                            ${y}
                        )`}
                        stroke={active ? imageButtonOutlineColor : ''}
                />
    
                
                
                <CircleControl 
                    x={rotateControlPos.x} y={rotateControlPos.y} r={circleSize/controlScaler * 1.5} 
                    fill={controlFill} stroke={controlStroke} strokeWidth={controlStrokeWidth}
                    updateParent={this.toggleRotateControl}
                />

                <CircleControl 
                    x={volumeControlPos.x} y={volumeControlPos.y} r={circleSize/controlScaler * 2 * volScaler} 
                    fill={controlFill} stroke={controlStroke} strokeWidth={controlStrokeWidth}
                    updateParent={this.toggleVolControl}
                />

                <CircleControl 
                    x={pitchControlPos.x} y={pitchControlPos.y} r={circleSize/controlScaler * 2 * pitchScaler} 
                    fill={controlFill} stroke={controlStroke} strokeWidth={controlStrokeWidth}
                    updateParent={this.togglePitchControl}
                />

                {/* <RectControl 
                    x={volumeControlPos.x} y={volumeControlPos.y- controlHeight/8} width={controlWidth * 2} height={controlHeight/2} 
                    // lineStart={volumeControlLineStart} lineEnd={volumeControlLineEnd}
                    transform={`rotate(${controlRotateTheta}, ${volumeControlPos.x}, ${volumeControlPos.y})`} 
                    fill={controlFill} stroke={controlStroke} strokeWidth={controlStrokeWidth}
                />
                <RectControl 
                    x={pitchControlPos.x + controlWidth/2} y={pitchControlPos.y - controlHeight} width={controlWidth/2} height={controlHeight * 2} 
                    // lineStart={pitchControlLineStart} lineEnd={pitchControlLineEnd}
                    transform={`rotate(${controlRotateTheta}, ${pitchControlPos.x}, ${pitchControlPos.y})`} 
                    fill={controlFill} stroke={controlStroke} strokeWidth={controlStrokeWidth}
                /> */}
                
                
            </g>
            }
            </g>
            
               
    
         )
    }
}

const mapStateToProps = state => ({
    mousePos :  state.mouse.mousePos,
})

export default connect(mapStateToProps)(ImageButtonSVG)



                // {/* image with filter doesn't clip */}
                // {/* <filter id={`image${idx}`} x="0%" y="0%" width="100%" height="100%">
                //     <feImage xlinkHref={image}/>
                // </filter>
                // <circle cx={left} cy={top} r={100} filter={`url(#image${idx})`} /> */}


// const ImageButtonSVG = ({idx, image, handleClick, crowdCircle}) => {

//     // console.log(image, crowdCircle);
//     return ( 
     
//         <g transform={`rotate(0,${x}, ${y})`}>
//             <defs>
//                 <pattern id={`image${idx + id}`} height="100%" width="100%" patternContentUnits = "objectBoundingBox">
//                      <image x="0" y="0" height="1" width="1" xlinkHref={image} preserveAspectRatio = "none" ></image>
//                 </pattern>
//             </defs>
            
//             <circle onClick={() => handleClick(idx + id)} cx={x} cy={y} r={circleSize} fill={`url(#image${idx})`} />

     
//             <CircleControl 
//                 x={circleControlPos.x} y={circleControlPos.y} r={circleSize/controlScaler} 
//                 fill={controlFill}  
//             />
//             <RectControl 
//                 x={volumeControlPos.x} y={volumeControlPos.y - controlHeight/2} width={controlWidth} height={controlHeight} 
//                 // lineStart={volumeControlLineStart} lineEnd={volumeControlLineEnd}
//                 transform={`rotate(${controlRotateTheta}, ${volumeControlPos.x}, ${volumeControlPos.y})`} 
//                 fill={controlFill} stroke={controlStroke} strokeWidth={controlStrokeWidth}
//             />
//             <RectControl 
//                 x={pitchControlPos.x} y={pitchControlPos.y - controlHeight/2} width={controlWidth} height={controlHeight} 
//                 // lineStart={pitchControlLineStart} lineEnd={pitchControlLineEnd}
//                 transform={`rotate(${controlRotateTheta}, ${pitchControlPos.x}, ${pitchControlPos.y})`} 
//                 fill={controlFill} stroke={controlStroke} strokeWidth={controlStrokeWidth}
//             />
//             {/* image with filter doesn't clip */}
//             {/* <filter id={`image${idx}`} x="0%" y="0%" width="100%" height="100%">
//                 <feImage xlinkHref={image}/>
//             </filter>
//             <circle cx={left} cy={top} r={100} filter={`url(#image${idx})`} /> */}
//         </g>
 
           

//      );
// }
 
// export default ImageButtonSVG;
