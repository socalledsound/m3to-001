import { degreesToRadians, getControlPos, getMarkCoords, mapVal } from '../../utils';

class Slider {
    constructor (idx, inc, x, y, imageButtonSize, settings ){
        this.type = settings.type;
        this.rotationCenterPos = {x: x, y: y};
        this.originalTheta = idx * inc;
        this.currentTheta = this.originalTheta;
        this.parentSize = imageButtonSize; 
        this.settings = settings;
        this.pos = getControlPos(x, y, imageButtonSize * settings.positionScaler, degreesToRadians(idx * inc));
        this.originalPos = this.pos;
        this.plusMarkPositions = getMarkCoords(1, 10, 10);
        this.size = imageButtonSize/settings.scaler;
        this.fill = settings.fill;
        this.hoverFill = settings.hoverFill;
        this.activeFill = settings.activeFill;
        this.stroke = settings.stroke;
        this.strokeWidth = settings.strokeWidth;
        this.clicked = false;
        this.hover = false;
        this.dragging = false;
        // this.volScaler = 1.0;
        this.val = 1.0
       
    }


    updatePos = () => {
        
        this.pos = getControlPos(
                        this.rotationCenterPos.x, 
                        this.rotationCenterPos.y, 
                        this.parentSize * this.settings.positionScaler, 
                        degreesToRadians(this.currentTheta)
                        );
    }

    updateTheta = (theta )=> {
        this.currentTheta = this.originalTheta + theta;
    }

    updateVal = (theta) => {
        const offset = theta - this.originalTheta;
        // console.log(offset);
        // console.log(mapVal(offset, -45, 45, 2.0, 0.0));
        if(this.originalTheta < 90 || this.orginalTheta > 270){
            this.val = mapVal(offset, this.originalTheta - 45, this.originalTheta + 45, 2.0, 0.0);
        } else {
            this.val = mapVal(offset, this.originalTheta - 45, this.originalTheta + 45, 0.0, 2.0);
        }
        
    }


}
export default Slider
