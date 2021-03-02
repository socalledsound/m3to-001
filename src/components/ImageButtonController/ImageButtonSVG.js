import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addImageButtonToRedux, updateImageButton} from '../../redux/imageButtonReducer/imageButtons.actions';
import { selectImageButton } from '../../redux/imageButtonReducer/imageButtons.selectors';
import ImageButton from '../../redux/ImageButton/ImageButton';
import CircleControl from './CircleControl';
// import RectControl from './RectControl';

class ImageButtonSVG extends Component {
    constructor(props){
        super(props);
        this.state = {
            // init: false,
            // active: false,
            lastMousePos : {x : 0, y: 0},
        }
        // this.init();
    }

    componentDidMount(){
        this.init();
    }


    init(){
        const { addImageButtonToRedux } = this.props;
                // const { xModification, yModification } = this.state;
                const {idx, crowdCircle} = this.props;
                const { points, inc, centerX, centerY, imageButtonSize } = crowdCircle;
        
                // i think this centerX/2 offset is a mistake!!!  and maybe the cause of my earlier issues 
                const newImageButton = new ImageButton( idx, inc, 
                                                        points[idx].x + centerX/2, 
                                                        points[idx].y + centerY/2, 
                                                        imageButtonSize
                                                        ); 
        
                addImageButtonToRedux(newImageButton)
                //  this.setState({ imageButton: newImageButton, init: true });
                
    }

    hoverVolumeControl = () => {
        const { idx, imageButton } = this.props;
        const updatedImageButton = {...imageButton};
        updatedImageButton.volumeControl.hover = !imageButton.volumeControl.hover;
        // this.setState({ imageButton : updatedImageButton });
        updateImageButton(idx, updatedImageButton);
    }

    hoverRotateControl = () => {
        const { idx, imageButton } = this.props;
        const updatedImageButton = {...imageButton};
        updatedImageButton.rotateControl.hover = !imageButton.rotateControl.hover;
        // this.setState({ imageButton : updatedImageButton });
        updateImageButton(idx, updatedImageButton)
    }

    hoverPitchControl = () => {
        const { idx, imageButton } = this.props;
        const updatedImageButton = {...imageButton};
        updatedImageButton.pitchControl.hover = !imageButton.pitchControl.hover;
        // this.setState({ imageButton : updatedImageButton });
        updateImageButton(idx, updatedImageButton);
    }

    toggleMain = () => {
        const { trigCrowdSound, idx, crowdCircle} = this.props;
        const { id } = crowdCircle;
        trigCrowdSound(idx + id);
        this.toggleOutline();
    }

    toggleOutline(){
        const { idx, imageButton } = this.props;
        const updatedImageButton = {...imageButton};
        updatedImageButton.active = !updatedImageButton.active
        // this.setState({ imageButton : updatedImageButton });
        updateImageButton(idx, updatedImageButton);
    }

    toggleRotateControl = () => {
        const { idx, imageButton } = this.props;
        console.log('toggleRotate');
        const updatedImageButton = {...imageButton};
        updatedImageButton.rotateControl.active = !imageButton.rotateControl.active;
        // this.setState({ imageButton : updatedImageButton });
        updateImageButton(idx, updatedImageButton);
    }

    toggleVolumeControl = () => {
        const { idx, imageButton } = this.props;
        const updatedImageButton = {...imageButton};
        updatedImageButton.volumeControl.active = !imageButton.volumeControl.active;
        // this.setState({ imageButton : updatedImageButton });
        updateImageButton(idx, updatedImageButton);
    }

    togglePitchControl = () => {
        const { idx, imageButton } = this.props;
        const updatedImageButton = {...imageButton};
        updatedImageButton.pitchControl.active = !imageButton.pitchControl.active;
        // this.setState({ imageButton : updatedImageButton });
        updateImageButton(idx, updatedImageButton);
    }

    render(){
       
        const {idx, image, crowdCircle, imageButton} = this.props;
        const { id } = crowdCircle;
        
        return ( 
            <g>
                {(imageButton != null) &&
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
                    // updateParentWithMouseUp={this.resetRotateControl}
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
                    // updateParentWithMouseUp={this.resetVolumeControl}
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
                    // updateParentWithMouseUp={this.resetPitchControl}
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

const mapStateToProps = (state, ownProps) => ({
    mousePos :  state.mouse.mousePos,
    imageButton : selectImageButton(ownProps.idx)(state),
})

const mapDispatchToProps = dispatch => ({
    addImageButtonToRedux : (imageButton) => dispatch(addImageButtonToRedux(imageButton)),
    updateImageButton : (idx, imageButton) => dispatch(updateImageButton(idx, imageButton)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ImageButtonSVG)

