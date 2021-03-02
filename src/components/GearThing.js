import React, { Component } from 'react';
import { connect } from 'react-redux';
import { trigCrowdSound } from '../redux/audio/actions';
import { initTimer,  } from '../redux/masterClock/masterClock.actions';
import { startAnimating, pauseAnimating, incrementTheta } from '../redux/gearAnimationReducer/gearAnimation.actions';
import PlayCircleComponent from './PlayCircleComponent';
import ImageButtonSVG from './ImageButtonController/ImageButtonSVG';
import PlayCircle from '../redux/PlayCircle';
class GearThing extends Component {
    state = { 
        oldTick : 0,
        ticking : false,
        playCircleForward : null,
        playCircleBackward: null,
        playCircleInit : false,
     }

    //  incrementTheta() {
    //      const { theta } = this.state;
    //      let newTheta = theta + 1;
    //     this.setState({theta: newTheta });
    //  }

    componentDidMount(){
        const { ticking } = this.state;
        this.initPlayCircles();
        if(!ticking){
            this.tick();
            console.log('in here');
            this.setState({ ticking : true});     
        }
        console.log(ticking);
    }

    initPlayCircles(){
        const { crowdCircle } = this.props;
        const newPlayCircleBackward = new PlayCircle(crowdCircle.centerX - crowdCircle.radius * 0.2, crowdCircle.centerY, crowdCircle.radius * 0.15);
        const newPlayCircleForward = new PlayCircle(crowdCircle.centerX + crowdCircle.radius * 0.2, crowdCircle.centerY, crowdCircle.radius * 0.15);

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

    togglePlayCircleForward = () => {
        const { playCircleForward } = this.state;
        this.playForward();
        const updatedPlayCircleForward = {...playCircleForward};
        updatedPlayCircleForward.active = !updatedPlayCircleForward.active;
        this.setState({ playCircleForward :  updatedPlayCircleForward });
    }

    togglePlayCircleBackward = () => {
        const { playCircleBackward } = this.state;
        this.playBackward();
        const updatedPlayCircleBackward = {...playCircleBackward};
        updatedPlayCircleBackward.active = !updatedPlayCircleBackward.active;
        this.setState({ playCircleBackward :  updatedPlayCircleBackward });
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

    tick(){
        const { idx, 
            // incrementTheta, tickTime 
            } = this.props;
        
        const loop = () => {
            const { incrementTheta, 
                    // tickTime, 
                    gearsAnimating } = this.props;
            // console.log(tickTime);
            if(gearsAnimating[idx]){
                incrementTheta(idx);
            }
            window.requestAnimationFrame(loop);
        }
        loop();

        
        
       
    }

    render() { 
       const { playCircleForward, playCircleBackward, playCircleInit } = this.state;
        const {idx, imgArray, crowdCircle, trigCrowdSound, theta} = this.props;

        // console.log(playCircleInit);
        if(playCircleBackward !== null){
            console.log(playCircleBackward.active);
        }
        

        return ( 
            <g >
  
                <g >
                    {/* <circle cx={400} cy={400} r={100} fill={'#00FF00'} /> */}
                    
                    <circle cx={crowdCircle.centerX} cy={crowdCircle.centerY} r={crowdCircle.radius * 2.0} fill="#aaaaaa11" />  
                    <circle  cx={crowdCircle.centerX} cy={crowdCircle.centerY} r={crowdCircle.radius * 0.5} fill="#aaaaaaaa" />  
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
                            ${crowdCircle.centerX},
                            ${crowdCircle.centerY}
                            ) 
                            translate(
                                ${-window.innerWidth/4},
                                ${-window.innerHeight/4}
                                )       
                    `}>
            

                {imgArray.map((img, idx) => 
                    <ImageButtonSVG 
                        key={`crowdKey${idx}`} 
                        idx={idx} 
                        trigCrowdSound={trigCrowdSound} 
                        image={img} 
                        crowdCircle={crowdCircle}/>
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

})

const mapDispatchToProps = dispatch => ({
    trigCrowdSound : idx => dispatch(trigCrowdSound(idx)),
    initTimer : () => dispatch(initTimer()),
    startAnimating : (idx, amt) => dispatch(startAnimating(idx, amt)),
    pauseAnimating : (idx) => dispatch(pauseAnimating(idx)),
    incrementTheta : (idx) => dispatch(incrementTheta(idx)),
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


