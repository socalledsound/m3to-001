import React from 'react';



const imageDiv = {
    backgroundColor: '#FFF',
    position: 'absolute',
    width: '200px',
    height: '200px',
    borderRadius: '100px',
    clipPath: 'circle(80px at center)',
}


const ImageButton = ({idx, image, top, left, handleClick}) => {
    console.log(top);
    return ( 

    <div onClick={() => handleClick(idx) } style={{...imageDiv, left: `${left}px`, top: `${top}px`}}>
        <img src={image} alt="crowdimage" style={{width: '100%', height: '100%'}} />
    </div>

     );
}
 
export default ImageButton;