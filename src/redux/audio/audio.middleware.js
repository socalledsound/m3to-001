// import CrowdSound from './CrowdSound';
import { TRIG_CROWD_SOUND, } from './actions';
import CrowdSounds from './CrowdSounds';
// import { crowdSounds } from '../../index';

const audioMiddleWare = store => {
    const crowdSounds = new CrowdSounds();

    return next => action => {

        switch (action.type){
            
            case TRIG_CROWD_SOUND : 
            console.log(action);
            crowdSounds.trig(action.idx);
                break;

            default :
                break;
        }
        next(action);
    }
}
export default audioMiddleWare