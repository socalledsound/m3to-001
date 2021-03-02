import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { degreesToRadians, getControlPos } from '../../utils';
import ImageButton from '../../redux/ImageButton/ImageButton';
import CircleControl from './CircleControl';
// import RectControl from './RectControl';

class ImageButtonSVG extends Component {
    constructor(props){
        super(props);
        this.state = {
            init: false,
            // active: false,
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
                const { points, inc, centerX, centerY, imageButtonSize } = crowdCircle;
        
                // i think this centerX/2 offset is a mistake!!!  and maybe the cause of my earlier issues 
                const newImageButton = new ImageButton( idx, inc, 
                                                        points[idx].x + centerX/2, 
                                                        points[idx].y + centerY/2, 
                                                        imageButtonSize
                                                        ); 
        
        
                this.setState({ imageButton: newImageButton, init: true });
    }

    hoverVolumeControl = () => {
        const { imageButton } = this.state;
        const updatedImageButton = {...imageButton};
        updatedImageButton.volumeControl.hover = !imageButton.volumeControl.hover;
        this.setState({ imageButton : updatedImageButton });
    }

    hoverRotateControl = () => {
        const { imageButton } = this.state;
        const updatedImageButton = {...imageButton};
        updatedImageButton.rotateControl.hover = !imageButton.rotateControl.hover;
        this.setState({ imageButton : updatedImageButton });
    }

    hoverPitchControl = () => {
        const { imageButton } = this.state;
        const updatedImageButton = {...imageButton};
        updatedImageButton.pitchControl.hover = !imageButton.pitchControl.hover;
        this.setState({ imageButton : updatedImageButton });
    }

    toggleMain = () => {
        const { trigCrowdSound, idx, crowdCircle} = this.props;
        const { id } = crowdCircle;
        trigCrowdSound(idx + id);
        this.toggleOutline();
    }

    toggleOutline(){
        const { imageButton } = this.state;
        const updatedImageButton = {...imageButton};
        updatedImageButton.active = !updatedImageButton.active
        this.setState({ imageButton : updatedImageButton });
    }

    resetRotateControl = () => {
        const { imageButton } = this.state;
        const updatedImageButton = {...imageButton};
        updatedImageButton.rotateControl.active = false;
         updatedImageButton.rotateControl.hover = false;
        this.setState({ imageButton : updatedImageButton });
    }

    resetVolumeControl = () => {
        const { imageButton } = this.state;
        const updatedImageButton = {...imageButton};
        updatedImageButton.volumeControl.active = false;
        // updatedImageButton.volumeControl.hover = false;
        this.setState({ imageButton : updatedImageButton });
    }

    resetPitchControl = () => {
        const { imageButton } = this.state;
        const updatedImageButton = {...imageButton};
        updatedImageButton.pitchControl.active = false;
        // updatedImageButton.pitchControl.hover = false;
        this.setState({ imageButton : updatedImageButton });
    }

    toggleRotateControl = () => {
        const { imageButton } = this.state;
        const updatedImageButton = {...imageButton};
        updatedImageButton.rotateControl.active = !imageButton.rotateControl.active;
        this.setState({ imageButton : updatedImageButton });
    }

    toggleVolumeControl = () => {
        const { imageButton } = this.state;
        const updatedImageButton = {...imageButton};
        updatedImageButton.volumeControl.active = !imageButton.volumeControl.active;
        this.setState({ imageButton : updatedImageButton });
    }

    togglePitchControl = () => {
        const { imageButton } = this.state;
        const updatedImageButton = {...imageButton};
        updatedImageButton.pitchControl.active = !imageButton.pitchControl.active;
        this.setState({ imageButton : updatedImageButton });
    }

    render(){
        const { imageButton, init } = this.state;
        const {idx, image, crowdCircle} = this.props;
        const { id } = crowdCircle;
        // console.log(init, imageButton);
        return ( 
            <g>
                {init &&
            <g transform={`rotate(0,${imageButton.pos.x}, ${imageButton.pos.y})`}>
                <defs>
                    <pattern id={`image${idx + id}`} height="100%" width="100%" patternContentUnits = "objectBoundingBox">
                         <image x="0" y="0" height="1" width="1" xlinkHref={image} preserveAspectRatio = "none" ></image>
                    </pattern>
                </defs>
                
                <circle onClick={this.toggleMain} cx={imageButton.pos.x} cy={imageButton.pos.y} r={imageButton.size} 
                        fill={`url(#image${idx})`} 
                        strokeWidth={imageButton.strokeWidth}
                        transform={`rotate(
                            ${imageButton.imageTheta},
                            ${imageButton.pos.x},
                            ${imageButton.pos.y}
                        )`}
                        stroke={imageButton.active ? imageButton.stroke : ''}
                />
    
                
                
                <CircleControl 
                    x={imageButton.rotateControl.pos.x} y={imageButton.rotateControl.pos.y} 
                    r={imageButton.rotateControl.size} 
                    fill={imageButton.rotateControl.active ? imageButton.rotateControl.activeFill :
                            imageButton.rotateControl.hover ? imageButton.rotateControl.hoverFill : imageButton.rotateControl.fill} 
                    stroke={imageButton.rotateControl.stroke} 
                    strokeWidth={imageButton.rotateControl.strokeWidth}
                    updateParentWithMouseDown={this.toggleRotateControl}
                    updateParentWithHover={this.hoverRotateControl}
                    updateParentWithMouseUp={this.resetRotateControl}
                />

                 <CircleControl 
                    x={imageButton.volumeControl.pos.x} y={imageButton.volumeControl.pos.y} 
                    r={imageButton.volumeControl.size} 
                    fill={imageButton.volumeControl.active ? imageButton.volumeControl.activeFill :
                            imageButton.volumeControl.hover ? imageButton.volumeControl.hoverFill : imageButton.volumeControl.fill} 
                    stroke={imageButton.volumeControl.stroke} 
                    strokeWidth={imageButton.volumeControl.strokeWidth}
                    updateParentWithMouseDown={this.toggleVolumeControl}
                    updateParentWithHover={this.hoverVolumeControl}
                    updateParentWithMouseUp={this.resetVolumeControl}
                />

                <CircleControl 
                    x={imageButton.pitchControl.pos.x} y={imageButton.pitchControl.pos.y} 
                    r={imageButton.pitchControl.size} 
                    fill={imageButton.pitchControl.active ? imageButton.pitchControl.activeFill :
                            imageButton.pitchControl.hover ? imageButton.pitchControl.hoverFill : imageButton.pitchControl.fill} 
                    stroke={imageButton.pitchControl.stroke} 
                    strokeWidth={imageButton.pitchControl.strokeWidth}
                    updateParentWithMouseDown={this.togglePitchControl}
                    updateParentWithHover={this.hoverPitchControl}
                    updateParentWithMouseUp={this.resetPitchControl}
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
