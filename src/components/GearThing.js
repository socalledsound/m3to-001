import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  trigCrowdSound, playAllCrowdSounds } from '../redux/audio/audio.actions';
import { initTimer,  } from '../redux/masterClock/masterClock.actions';
import { startAnimating, pauseAnimating, incrementTheta } from '../redux/gearAnimationReducer/gearAnimation.actions';
import { updateImageButton, resetImageButtonStates } from '../redux/imageButtonReducer/imageButtons.actions';

import PlayCircleComponent from './PlayCircleComponent';
import { playCircleSettings } from '../globalSettings';
import ImageButtonSVG from './ImageButtonController/ImageButtonSVG';
import PlayCircle from '../redux/PlayCircle';
// import { imageButton } from '../globalSettings';
class GearThing extends Component {
    state = { 
        oldTick : 0,
        ticking : false,
        playCircleForward : null,
        playCircleBackward: null,
        playingForward : false,
        playingBackward : false,
        playCircleInit : false,
     }

    //  incrementTheta() {
    //      const { theta } = this.state;
    //      let newTheta = theta + 1;
    //     this.setState({theta: newTheta });
    //  }

    componentDidMount(){
        // const { ticking } = this.state;
        this.initPlayCircles();
        // if(!ticking){
        //     this.tick();
        //     console.log('in here');
        //     this.setState({ ticking : true});     
        // }
        // console.log(ticking);
    }

    initPlayCircles(){
        const { crowdCircle } = this.props;
        const newPlayCircleBackward = new PlayCircle(crowdCircle.center.x - crowdCircle.radius * playCircleSettings.playCircleXscaler, 
            crowdCircle.center.y - crowdCircle.radius * playCircleSettings.playCircleYscaler, 
            crowdCircle.radius * playCircleSettings.playCircleSizeScaler);
        const newPlayCircleForward = new PlayCircle(crowdCircle.center.x + crowdCircle.radius * playCircleSettings.playCircleXscaler, 
            crowdCircle.center.y - crowdCircle.radius * playCircleSettings.playCircleYscaler, 
            crowdCircle.radius * playCircleSettings.playCircleSizeScaler);

        this.setState({ playCircleForward : newPlayCircleForward, playCircleBackward : newPlayCircleBackward, playCircleInit : true });
    }

    startAnimation = (dir) => {
        const { idx, startAnimating } = this.props;
        startAnimating(idx, dir);
        
    }

    pauseAnimation = () => {
        const { idx, pauseAnimating } = this.props;
        pauseAnimating(idx);
    }

    hoverPlayCircleForward = () => {
        const { playCircleForward } = this.state;
        const updatedPlayCircleForward = {...playCircleForward};
        updatedPlayCircleForward.hover = !updatedPlayCircleForward.hover;
        this.setState({ playCircleForward :  updatedPlayCircleForward });
    }


    hoverPlayCircleBackward = () => {
        const { playCircleBackward } = this.state;
        const updatedPlayCircleBackward = {...playCircleBackward};
        updatedPlayCircleBackward.hover = !updatedPlayCircleBackward.hover;
        this.setState({ playCircleBackward :  updatedPlayCircleBackward });
    }


    playForward(){
        this.toggleTicker(1);
    }

    playBackward(){
        this.toggleTicker(-1);
    }

    setImageButtonsToRotate(dir){
        const { imageButtons, updateImageButton, trigCrowdSound } = this.props;
        imageButtons.forEach(imageButton => {
            const newImageButton = {...imageButton};
            if(!newImageButton.tweaking){
                newImageButton.rotating = !imageButton.rotating;
                newImageButton.active = !imageButton.active;
            } else {
                trigCrowdSound(imageButton.idx, {vol: 1.0, rate: 1.0}, dir);
                newImageButton.tweaking = false;
            }
            
            newImageButton.rotateDir = dir;
            updateImageButton(imageButton.idx, newImageButton);
        })
    }

    togglePlayCircleForward = () => {
        const { playCircleForward, playingForward } = this.state;
        const { playAllCrowdSounds } = this.props;
        const dir = 1;
        this.playForward();
        playAllCrowdSounds(dir);       
        this.setImageButtonsToRotate(dir);
        const updatedPlayCircleForward = {...playCircleForward};
        updatedPlayCircleForward.active = !updatedPlayCircleForward.active;
        this.setState({ playCircleForward :  updatedPlayCircleForward, playingForward : !playingForward });
    }

    togglePlayCircleBackward = () => {
        const { playCircleBackward, playingBackward } = this.state;
        const { playAllCrowdSounds } = this.props;
        const dir = -1;
        this.playBackward();
        playAllCrowdSounds(dir);
        this.setImageButtonsToRotate(dir);
        const updatedPlayCircleBackward = {...playCircleBackward};
        updatedPlayCircleBackward.active = !updatedPlayCircleBackward.active;
        this.setState({ playCircleBackward :  updatedPlayCircleBackward, playingBackward: !playingBackward });
    }




   toggleTicker = (dir) => {
       const { idx, initTimer, timerStarted, gearsAnimating } = this.props;
       if(!timerStarted){
           initTimer();
       }
       console.log(timerStarted);
       if(!gearsAnimating[idx]){
           this.startAnimation(dir)
       } else {
           this.pauseAnimation();
       }
    }

    // tick(){
    //     const { idx, 
    //         // incrementTheta, tickTime 
    //         } = this.props;
        
    //     const loop = () => {
    //         const { incrementTheta, 
    //                 // tickTime, 
    //                 gearsAnimating } = this.props;
    //         // console.log(tickTime);
    //         if(gearsAnimating[idx]){
    //             incrementTheta(idx);
    //         }
    //         window.requestAnimationFrame(loop);
    //     }
    //     loop();    
    //}

    render() { 
       const { playCircleForward, playCircleBackward, playingForward, playingBackward, playCircleInit } = this.state;
        const {idx, imgArray, crowdCircle, theta} = this.props;
        // console.log(imgArray[idx]);
        // console.log(playCircleInit);
        // if(playCircleBackward !== null){
        //     // console.log(playCircleBackward.active);
        // }
        

        return ( 
            <g >
  
                <g >
                    {/* <circle cx={400} cy={400} r={100} fill={'#00FF00'} /> */}
                    
                    <circle cx={crowdCircle.center.x} cy={crowdCircle.center.y} r={crowdCircle.radius * crowdCircle.backgroundCircleScaler} fill="#aaaaaa11" />  
                    <circle  cx={crowdCircle.center.x} cy={crowdCircle.center.y} r={crowdCircle.radius * crowdCircle.controlUnitScaler} fill="#aaaaaaaa" />  
                    {playCircleInit &&
                        <g>
                            {!playCircleBackward.active &&
                                <PlayCircleComponent 
                                x={playCircleForward.pos.x} y={playCircleForward.pos.y} 
                                size={playCircleForward.size} 
                                fill={playCircleForward.active ? playCircleForward.activeFill :
                                    playCircleForward.hover ? playCircleForward.hoverFill : playCircleForward.fill} 
                                stroke={playCircleForward.stroke} 
                                strokeWidth={playCircleForward.strokeWidth}
                                direction={1}
                                playing={playingForward}
                                updateParentWithClick={this.togglePlayCircleForward}
                                // updateParentWithHover={this.hoverPlayCircleForward}
                                // updateParentWithMouseUp={this.resetRotateControl}
                                />
                            }
                            {!playCircleForward.active &&
                                <PlayCircleComponent x={playCircleBackward.pos.x} y={playCircleBackward.pos.y} 
                                size={playCircleBackward.size} 
                                fill={playCircleBackward.active ? playCircleBackward.activeFill :
                                    playCircleBackward.hover ? playCircleBackward.hoverFill : playCircleBackward.fill} 
                                stroke={playCircleForward.stroke} 
                                strokeWidth={playCircleBackward.strokeWidth}
                                direction={-1}
                                playing={playingBackward}
                                updateParentWithClick={this.togglePlayCircleBackward}
                                // updateParentWithHover={this.hoverPlayCircleBackward}
                                    />
                            }
                        </g>
                    }
                    
                  
                </g>

                {/* <g>
                    <circle cx={crowdCircle.centerX + crowdCircle.radius/2 + 50} cy={crowdCircle.centerY + crowdCircle.radius/2} r={crowdCircle.radius * 2.0} fill="#aaaaaa11" />  
                    <circle onClick={() => this.toggleTicker()}cx={1450} cy={500} r={crowdCircle.radius * 0.5} fill="#FF0000" />  
                </g> */}
                <g transform={
                    `rotate(
                            ${theta[idx]},
                            ${crowdCircle.center.x},
                            ${crowdCircle.center.y}
                            ) 
                            translate(
                                ${-window.innerWidth/4},
                                ${-window.innerHeight/4}
                                )       
                    `}>
            

                {crowdCircle.points.map((point, idx) => {
                    // console.log(imgArray[idx], crowdCircle);
                    return(
                    <ImageButtonSVG 
                        key={`crowdKey${idx}`} 
                        idx={idx} 
                        images={imgArray[idx]} 
                        crowdCircle={crowdCircle}/>
                    )}
                         )}         
                </g>
         </g>
         );
    }
}
 

const mapStateToProps = state => ({
    timerStarted : state.masterClock.timerStarted,
    tickTime : state.masterClock.tickTime,
    tickerRunning : state.masterClock.tickerRunning,
    gearsAnimating : state.gearsAnimation.gearsAnimating,
    theta : state.gearsAnimation.theta,
    imageButtons : state.imageButtonsSlice.imageButtons,

})

const mapDispatchToProps = dispatch => ({
    
    playAllCrowdSounds : (dir) => dispatch(playAllCrowdSounds(dir)),
    initTimer : () => dispatch(initTimer()),
    startAnimating : (idx, amt) => dispatch(startAnimating(idx, amt)),
    pauseAnimating : (idx) => dispatch(pauseAnimating(idx)),
    incrementTheta : (idx) => dispatch(incrementTheta(idx)),
    updateImageButton : (idx, imageButton) => dispatch(updateImageButton(idx, imageButton)),
    resetImageButtonStates : () => dispatch(resetImageButtonStates()),
    trigCrowdSound : (idx, audioParameters, dir) => dispatch(trigCrowdSound(idx, audioParameters, dir)),
    // pauseTicker : () => dispatch(pauseTicker()),
    // restartTicker : () => dispatch(restartTicker()),
    // tickTime : () => dispatch(tickTime()),
})

export default connect(mapStateToProps, mapDispatchToProps)(GearThing);
// const newTick = tickTime > oldTick ? true : false;
        // if(gearsAnimating[idx] && newTick){
        //     this.tick();
        //     console.log('in here');
        //     this.setState({ oldTick : tickTime});     
        // }

        // console.log(crowdCircle.centerX, crowdCircle.centerY);

        // window.addEventListener('mousemove', (e) => console.log(e.clientX, crowdCircle.centerX))

        // console.log(window.innerWidth);


