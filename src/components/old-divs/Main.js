import React, { Component } from 'react';
import { connect } from 'react-redux';
import { trigCrowdSound } from '../redux/audio/actions';
import ImageButton from './ImageButton';
import { images }  from '../redux/images';
import { circleCoords } from '../utils';
console.log(images);
const points = circleCoords(images.length, 500, 300, 300);

class Main extends Component {
    state = {

    }

    // logIndex = (idx) => {
    //     console.log('playing', idx);
    // }

    render(){
       const { trigCrowdSound } = this.props
        return (
            <div>
                {images.map((img, idx) => <ImageButton key={`crowdKey${idx}`} idx={idx} handleClick={trigCrowdSound} image={img}  left={points[idx].x} top={points[idx].y}/>)}
               </div>
           
        )
    }
}
const mapDispatchToProps = dispatch => ({
    trigCrowdSound : idx => dispatch(trigCrowdSound(idx)),
})

export default connect(null, mapDispatchToProps)(Main);