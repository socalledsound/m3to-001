import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateMousePos, storeMouseRef } from '../redux/mouseReducer/mouse.actions';
import { resetImageButtonControlStates } from '../redux/imageButtonReducer/imageButtons.actions';
import { canvasWidth, canvasHeight, crowdCircles } from '../globalSettings';
import { images } from '../redux/images';
import GearThing from './GearThing';

class Main extends Component {
    constructor(props){
        super(props)
        this.svgRef = React.createRef();
    }

    componentDidMount(){
        const { resetClicked, updateMousePos } = this.props;
        this.svgRef.current.addEventListener("touchstart", (e) => {
            e.preventDefault();
           // this.props.updateMousePos(e.clientX, e.clientY);
           // this.props.startDrawing();
        });

        this.svgRef.current.addEventListener("touchmove", (e) => {
            e.preventDefault();

            updateMousePos(e.touches[0].pageX, e.touches[0].pageY)
        });

        this.svgRef.current.addEventListener("touchend", (e) => {
            e.preventDefault();
            resetClicked();
         });
    }

    mouseUp = (x, y) => {
        const { resetImageButtonControlStates } = this.props;
        resetImageButtonControlStates();
        storeMouseRef({x : x, y: y});
    }

    render(){
       const { trigCrowdSound, updateMousePos } = this.props
        return (
            <div
            onMouseMove={(e) => updateMousePos(e.clientX, e.clientY)}
            onMouseUp={(e) => this.mouseUp(e.clientX, e.clientY)}
            style={{ overflow: "hidden" }}
            ref={this.svgRef}
        >
            <svg
            viewBox={`0 0 ${canvasWidth} ${canvasHeight}`}
            width={canvasWidth}
            height={canvasHeight}
            >
               {images.map((arr, idx) => 
                    <GearThing 
                        key={`gear-${idx}`} 
                        idx={idx} imgArray={arr} 
                        crowdCircle={crowdCircles[idx]} 
                        trigCrowdSound={trigCrowdSound}
                    />
                    
                )} 

                
   
            </svg>
                </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateMousePos : (x, y) => dispatch(updateMousePos(x, y)),
    storeMouseRef : (mousePos) => dispatch(storeMouseRef(mousePos)),
    resetImageButtonControlStates : () => dispatch(resetImageButtonControlStates()),
})

export default connect(null, mapDispatchToProps)(Main)