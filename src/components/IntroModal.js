import React from 'react';


const modalContainer = {
    backgroundColor: '#FFF',
    opacity: '0.7',
    width: '60vh',
    height : '80vh',
    marginTop: '20vh',
    marginLeft: '20vh',
    padding: '20vh',

}

const modalText = {
    color : '#000000',
}


const IntroModal = () => {
    return ( 
        <div style={modalContainer}>
            <p style={modalText}>this is the text of my modal</p>
        </div>
     );
}
 
export default IntroModal