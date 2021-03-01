import React, { Component } from 'react';
import { connect } from 'react-redux';
import { trigCrowdSound } from '../redux/audio/actions';
import { initTimer,  } from '../redux/masterClock/masterClock.actions';
import { startAnimating, pauseAnimating, incrementTheta } from '../redux/gearAnimationReducer/gearAnimation.actions';
import ImageButtonSVG from './ImageButtonController/ImageButtonSVG';
class GearThing extends Component {
    state = { 
        oldTick : 0,
        ticking : false,
     }

    //  incrementTheta() {
    //      const { theta } = this.state;
    //      let newTheta = theta + 1;
    //     this.setState({theta: newTheta });
    //  }

    componentDidMount(){
        const { ticking } = this.state;
        // const { idx, gearsAnimating, tickTime, } = this.props;
        console.log('in cdm');
        console.log(ticking);
        if(!ticking){
            this.tick();
            console.log('in here');
            this.setState({ ticking : true});     
        }
        console.log(ticking);
        // const newTick = tickTime > oldTick ? true : false;
        // if(gearsAnimating[idx] && newTick){
        //     this.tick();
        //     console.log('in here');
        //     this.setState({ oldTick : tickTime});     
        // }

        // console.log(crowdCircle.centerX, crowdCircle.centerY);

        // window.addEventListener('mousemove', (e) => console.log(e.clientX, crowdCircle.centerX))

        // console.log(window.innerWidth);




    }

    startAnimation = () => {
        const { idx, startAnimating } = this.props;
        startAnimating(idx);
        
    }

    pauseAnimation = () => {
        const { idx, pauseAnimating } = this.props;
        pauseAnimating(idx);
    }


   toggleTicker = () => {
       const { idx, initTimer, timerStarted, gearsAnimating } = this.props;
       if(!timerStarted){
           initTimer();
       }
       console.log(timerStarted);
       if(!gearsAnimating[idx]){
           this.startAnimation()
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
       
        const {idx, imgArray, crowdCircle, trigCrowdSound, theta} = this.props;



        return ( 
            <g >
                <g >
                    {/* <circle cx={400} cy={400} r={100} fill={'#00FF00'} /> */}
                    <circle cx={crowdCircle.centerX} cy={crowdCircle.centerY} r={crowdCircle.radius * 2.0} fill="#aaaaaa11" />  
                    <circle onClick={() => this.toggleTicker()} cx={crowdCircle.centerX} cy={crowdCircle.centerY} r={crowdCircle.radius * 0.5} fill="#aaaaaaaa" />  
                    <circle cx={crowdCircle.centerX - crowdCircle.radius * 0.2} cy={crowdCircle.centerY} r={crowdCircle.radius * 0.15} fill="#CCC" />
                    <circle cx={crowdCircle.centerX + crowdCircle.radius * 0.2} cy={crowdCircle.centerY} r={crowdCircle.radius * 0.15} fill="#CCC" />
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
    startAnimating : (idx) => dispatch(startAnimating(idx)),
    pauseAnimating : (idx) => dispatch(pauseAnimating(idx)),
    incrementTheta : (idx) => dispatch(incrementTheta(idx)),
    // pauseTicker : () => dispatch(pauseTicker()),
    // restartTicker : () => dispatch(restartTicker()),
    // tickTime : () => dispatch(tickTime()),
})

export default connect(mapStateToProps, mapDispatchToProps)(GearThing);
