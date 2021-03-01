import React, { Component } from 'react';
import IntroModal from './components/IntroModal';
// import Main from './components/Main';
import MainSVG from './components/MainSVG';
const appContainer = {
    backgroundColor : '#333',
    height: '100vh',
    width: '100vw',
    position : 'absolute',
}
class App extends Component {
    state = { 
        showModal: false,
     }

    render() { 
        const { showModal } = this.state;
        return ( 
            <div style={appContainer}>
                {/* {showModal ? <IntroModal /> : <Main />} */}
                {showModal ? <IntroModal /> : <MainSVG />}
            </div>
          

         );
    }
}


export default App