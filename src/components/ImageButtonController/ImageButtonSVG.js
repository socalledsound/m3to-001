import React, { Component } from 'react';
import { connect } from 'react-redux';
import { mapVal } from '../../utils';
import { storeMouseRef } from '../../redux/mouseReducer/mouse.actions';
import { initTimer } from '../../redux/masterClock/masterClock.actions';
import { trigCrowdSound, stopPlayingSound } from '../../redux/audio/audio.actions';
import { addImageButtonToRedux, updateImageButton, setTweakingIdx, setRotatingIdx, setVolumingIdx, setPitchingIdx} from '../../redux/imageButtonReducer/imageButtons.actions';
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
                const { points, inc, center, imageButtonSize, angles } = crowdCircle;
            // console.log(points, center);
                // i think this center.x/2 offset is a mistake!!!  and maybe the cause of my earlier issues ??
                const newImageButton = new ImageButton( idx, inc, 
                                                        points[idx].x + center.x/2, 
                                                        points[idx].y + center.y/2, 
                                                        imageButtonSize,
                                                        angles[idx],
                                                        ); 
        
                addImageButtonToRedux(newImageButton)
                //  this.setState({ imageButton: newImageButton, init: true });
                
    }

    calcImageSize(imageButton){
        
        const scaler = mapVal(imageButton.volumeControl.val,
                                0.0, 2.0, 0.6,1.4);

        return imageButton.size * scaler
    }


    hoverVolumeControl = () => {
        const { idx, imageButton, updateImageButton } = this.props;
        const updatedImageButton = {...imageButton};
        updatedImageButton.volumeControl.hover = !imageButton.volumeControl.hover;
        // this.setState({ imageButton : updatedImageButton });
        updateImageButton(idx, updatedImageButton);
    }

    hoverRotateControl = () => {
        const { idx, imageButton, updateImageButton } = this.props;
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

    mouseUp = () => {
        this.stopTweaking();
        this.stopSound();
    }

    stopSound = () => {
        const { idx, stopPlayingSound } = this.props;
        stopPlayingSound(idx);
    }

    stopTweaking(){
        const { idx, imageButton, updateImageButton } = this.props;
        const updatedImageButton = {...imageButton};
        updatedImageButton.active = false;
        updatedImageButton.rotating = false;
        updatedImageButton.voluming = false;
        updatedImageButton.pitching = false;
        updatedImageButton.tweaking = false;
        updatedImageButton.rotateControl.active = false;
        updatedImageButton.volumeControl.active = false;
        updateImageButton(idx, updatedImageButton);
    }

    toggleMain = () => {
        const { trigCrowdSound, idx, timerStarted, initTimer, imageButton, updateImageButton} = this.props;
        const updatedImageButton = this.toggleMC({ ...imageButton});
        const audioParameters = {vol: 1.0, rate: 1.0, offset: updatedImageButton.imageTheta};
        const dir = 1;
        trigCrowdSound(idx, audioParameters, dir);
        updateImageButton(idx, updatedImageButton);
        if(!timerStarted){
            initTimer();
        }
    }

    toggleMC = (imgButton) => {
        imgButton.active = !imgButton.active;
        imgButton.rotating = !imgButton.rotating;
        imgButton.tweaking = !imgButton.tweaking;
        return imgButton
    }

    setControlActive = (imgButton, setting) => {
        imgButton.tweaking = setting;
        setting.active = true;
        return imgButton
    }

    toggleControl = (e) => {
        const { idx, imageButton, storeMouseRef, mousePos, timerStarted, initTimer, updateImageButton, setTweakingIdx  } = this.props;
        const imageButtonToUpdate = {...imageButton};
        const setting = e.target.id; 
        const updatedImageButton = this.setControlActive(imageButtonToUpdate, imageButtonToUpdate[setting]);
        console.log(imageButtonToUpdate);
        updateImageButton(idx, updatedImageButton);
        storeMouseRef(mousePos);
        setTweakingIdx(idx);
       
        if(!timerStarted){
            initTimer();
        }
    }

   

    // toggleRotateControl = () => {
    //     const { trigCrowdSound, idx, imageButton, storeMouseRef, mousePos, setRotatingIdx, timerStarted, initTimer, updateImageButton  } = this.props;
    //     const imageButtonToUpdate = {...imageButton};
    //     const updatedImageButton = this.setControlActive(imageButtonToUpdate, imageButtonToUpdate.rotateControl);
    //     const audioParameters = {vol: 1.0, rate: 1.0, offset: updatedImageButton.imageTheta};
    //     const dir = 1;
    //     updateImageButton(idx, updatedImageButton);
    //     storeMouseRef(mousePos);
    //     setRotatingIdx(idx);
    //     trigCrowdSound(idx, audioParameters, dir);
    //     if(!timerStarted){
    //         initTimer();
    //     }
    // }

    // toggleVolumeControl = () => {
    //     const { idx, imageButton, storeMouseRef, mousePos, setVolumingIdx, timerStarted, initTimer, updateImageButton  } = this.props;
    //     const imageButtonToUpdate = {...imageButton};
    //     const updatedImageButton = this.setControlActive(imageButtonToUpdate, imageButtonToUpdate.volumeControl);
    //     // const audioParameters = {vol: 1.0, rate: 1.0, offset: updatedImageButton.imageTheta};
    //     // const dir = 1;
    //     updateImageButton(idx, updatedImageButton);
    //     storeMouseRef(mousePos);
    //     setVolumingIdx(idx);
    //     // trigCrowdSound(idx, audioParameters, dir);
    //     if(!timerStarted){
    //         initTimer();
    //     }
    // }

    // togglePitchControl = () => {
    //     const { idx, imageButton, storeMouseRef, mousePos, setPitchingIdx, timerStarted, initTimer, updateImageButton  } = this.props;
    //     const imageButtonToUpdate = {...imageButton};
    //     const updatedImageButton = this.setControlActive(imageButtonToUpdate, imageButtonToUpdate.pitchControl);
    //     updateImageButton(idx, updatedImageButton);
    //     storeMouseRef(mousePos);
    //     setPitchingIdx(idx);
    //     // trigCrowdSound(idx, audioParameters, dir);
    //     if(!timerStarted){
    //         initTimer();
    //     }
    // }

    render(){
       
        const {idx, images, crowdCircle, imageButton} = this.props;
        const { id } = crowdCircle;
        
        if(imageButton != null){
            // console.log(images[imageButton.imageIdx]);
            // console.log(imageButton.imageIdx);
        }
       
        
        
        return ( 
            <g>
                {(imageButton != null) &&
            <g transform={`rotate(0,${imageButton.pos.x}, ${imageButton.pos.y})`}>
                <defs>
                    <pattern id={`image${idx + id}`} height="100%" width="100%" patternContentUnits = "objectBoundingBox">
                         <image x="0" y="0" height="1" width="1" xlinkHref={images[imageButton.imageIdx].default} preserveAspectRatio = "none" ></image>
                    </pattern>
                </defs>
                
                <circle  cx={imageButton.pos.x} cy={imageButton.pos.y} r={this.calcImageSize(imageButton)} 
                        fill={`url(#image${idx})`} 
                        strokeWidth={imageButton.strokeWidth}
                        transform={`rotate(
                            ${imageButton.imageTheta},
                            ${imageButton.pos.x},
                            ${imageButton.pos.y}
                        )`}
                        stroke={imageButton.active ? imageButton.stroke : ''}
                        // updateParentWithMouseDown={this.toggleMain}
                        onClick={this.toggleMain}
                />
    
                
                
                {/* <CircleControl 
                onClick={this.toggleRotateControl}
                    x={imageButton.rotateControl.pos.x} y={imageButton.rotateControl.pos.y} 
                    r={imageButton.rotateControl.size} 
                    fill={imageButton.rotateControl.active ? imageButton.rotateControl.activeFill :
                            imageButton.rotateControl.hover ? imageButton.rotateControl.hoverFill : imageButton.rotateControl.fill} 
                    stroke={imageButton.rotateControl.stroke} 
                    strokeWidth={imageButton.rotateControl.strokeWidth}
                    updateParentWithMouseDown={this.toggleRotateControl}
                    updateParentWithMouseUp={this.mouseUp}
                    updateParentWithHover={this.hoverRotateControl}
                    // updateParentWithMouseUp={this.resetRotateControl}
                /> */}
                {imageButton.tweaking && 
                <g>
                 <CircleControl 
                    name="volumeControl"
                    x={imageButton.volumeControl.pos.x} y={imageButton.volumeControl.pos.y} 
                    r={imageButton.volumeControl.size} 
                    fill={imageButton.volumeControl.active ? imageButton.volumeControl.activeFill :
                            imageButton.volumeControl.hover ? imageButton.volumeControl.hoverFill : imageButton.volumeControl.fill} 
                    stroke={imageButton.volumeControl.stroke} 
                    strokeWidth={imageButton.volumeControl.strokeWidth}
                    updateParentWithMouseDown={this.toggleControl}
                    // updateParentWithMouseUp={this.mouseUp}
                    updateParentWithHover={this.hoverVolumeControl}
                    
                    // updateParentWithMouseUp={this.resetVolumeControl}
                />

                <CircleControl 
                    name="pitchControl"
                    x={imageButton.pitchControl.pos.x} y={imageButton.pitchControl.pos.y} 
                    r={imageButton.pitchControl.size} 
                    fill={imageButton.pitchControl.active ? imageButton.pitchControl.activeFill :
                            imageButton.pitchControl.hover ? imageButton.pitchControl.hoverFill : imageButton.pitchControl.fill} 
                    stroke={imageButton.pitchControl.stroke} 
                    strokeWidth={imageButton.pitchControl.strokeWidth}
                    updateParentWithMouseDown={this.toggleControl}
                    // updateParentWithMouseUp={this.mouseUp}
                    updateParentWithHover={this.hoverPitchControl}
                    // updateParentWithMouseUp={this.resetPitchControl}
                /> 
                </g>
                    }
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
    storeMouseRef : (mousePos) => dispatch(storeMouseRef(mousePos)),
    setRotatingIdx : (idx) => dispatch(setRotatingIdx(idx)),
    setVolumingIdx: (idx) => dispatch(setVolumingIdx(idx)), 
    setPitchingIdx: (idx) => dispatch(setPitchingIdx(idx)),
    setTweakingIdx: (idx) => dispatch(setTweakingIdx(idx)),
    initTimer : ( ) => dispatch(initTimer()),
    trigCrowdSound : (idx, audioParameters, dir) => dispatch(trigCrowdSound(idx, audioParameters, dir)),
    stopPlayingSound : (idx) => dispatch(stopPlayingSound(idx)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ImageButtonSVG)

