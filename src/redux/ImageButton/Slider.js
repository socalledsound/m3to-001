import { degreesToRadians, getControlPos, getMarkCoords, mapVal, constrainTheta } from '../../utils';

class Slider {
    constructor (idx, inc, x, y, imageButtonSize, settings ){
        this.type = settings.type;
        this.rotationCenterPos = {x: x, y: y};
        this.originalTheta = idx * inc;
        this.orientationTheta = idx * inc;
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

        // console.log(this.rotationCenterPos);
        // console.log(this.pos);
       
    }

    rotateWithParent(pos, radius, theta){
        this.pos = getControlPos(pos.x, pos.y, radius * this.settings.positionScaler, degreesToRadians(theta));
        this.orientationTheta = theta;
        this.rotationCenterPos = pos;
    }



    updatePos = (theta) => {
        // console.log(this.rotationCenterPos);
        this.pos = getControlPos(
                        this.rotationCenterPos.x, 
                        this.rotationCenterPos.y, 
                        this.parentSize * this.settings.positionScaler, 
                         degreesToRadians(theta + this.orientationTheta)
                        
                        );
    }

    updateSetting = (mousePos, mouseRef) => {
        // const mouseDist = mousePos.y - mouseRef.y;
        //const constrainedTheta = constrainTheta(mouseDist/3);
        // console.log(mousePos.x + window.innerWidth/4, this.rotationCenterPos, this.pos);
        const theta = Math.atan2((mousePos.y + window.innerHeight/4) - this.rotationCenterPos.y, (mousePos.x + window.innerWidth/4) - this.rotationCenterPos.x );
        // const theta = Math.atan2(0, -100);
        // console.log(theta);
        const convertedTheta = theta * (180/Math.PI);
        console.log(this.originalTheta);
        const normalizedTheta = convertedTheta - this.originalTheta;
        console.log(normalizedTheta);
        const constrainedTheta = constrainTheta(normalizedTheta, this.originalTheta);
        console.log(constrainedTheta);
        this.updateTheta(constrainedTheta);
        this.updateVal(constrainedTheta);
        this.updatePos(constrainedTheta);
    }


    updateTheta = (theta )=> {
        this.currentThetaOffset = this.originalTheta + theta;
    }

    updateVal = (theta) => {

        this.val = mapVal(theta, 45, -45, 0.0, 2.0);

    }


}
export default Slider
