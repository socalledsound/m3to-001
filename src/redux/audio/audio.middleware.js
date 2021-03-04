// import CrowdSound from './CrowdSound';
import AudioActionTypes from './audio.actions.types';
import CrowdSounds from './CrowdSounds';
// import { crowdSounds } from '../../index';

const audioMiddleWare = store => {
    const crowdSounds = new CrowdSounds();

    return next => action => {

        switch (action.type){
            
            case AudioActionTypes.TRIG_CROWD_SOUND : 
                console.log(action);
                crowdSounds.trig(action.payload.idx, action.payload.audioParameters, action.payload.dir);
                break;

            case AudioActionTypes.PLAY_ALL_CROWD_SOUNDS : 
                console.log(action);
                crowdSounds.trigAll(action.payload.dir);
                break;

            case AudioActionTypes.STOP_PLAYING_SOUND :
                crowdSounds.stop(action.payload.idx);
                break;
            case AudioActionTypes.UPDATE_VOLUME :
                crowdSounds.updateVolume(action.payload.idx, action.payload.val);
                break;  
                
            case AudioActionTypes.UPDATE_PITCH :
                    crowdSounds.updatePitch(action.payload.idx, action.payload.val);
                    break;    
                      
            default :
                break;
        }
        next(action);
    }
}
export default audioMiddleWare