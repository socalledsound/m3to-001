import CrowdCircle from "./redux/CrowdCircle";
// import { circleCoords } from './utils';

//general
export const canvasWidth = window.innerWidth;
export const canvasHeight = window.innerHeight;
export const numCrowdCircles = 7;
export const numImages = 10;
export const numSounds = numCrowdCircles;
export const numButtons = numCrowdCircles;

export const centerX = canvasWidth/2; 
export const centerY = canvasHeight/2.0;

//crowd circle
export const crowdCircleRadius = canvasWidth/(numCrowdCircles);
const backgroundCircleScaler = 2.25;
const controlUnitScaler = 0.25;
const imageScaler = numCrowdCircles/2.5;
export const gearSpeed = 0.3;
export const crowdCircleRotationSpeed = 0.3;


//crowdCircle
const crowdCircle1 = new CrowdCircle(0, numCrowdCircles, centerX, centerY, imageScaler, crowdCircleRadius, crowdCircleRotationSpeed, backgroundCircleScaler, controlUnitScaler);

export const crowdCircles = [crowdCircle1];


//playCircle
export const playCircleSettings = {
    playCircleSizeScaler : 0.08,
    playCircleXscaler : 0.125,
    playCircleYscaler : 0,
    fill : '#FFFFFF99',
    hoverFill : '#FF00FF99',
    activeFill : '#00FF0099',
    stroke : '#000',
    strokeWidth : '2',
}




// imageButton
export const imageButton = {
    outlineColor : '#FF00FF',
    rotateSpeed : 0.5,
    numImages : numImages,
    imgTransitionSpeed : 3,
    sizeScaler : 2.0,
}


//image button controls
export const rotateControl = {
    type: 'rotate control',
    fill : '#CCC',
    hoverFill : '#FF0000aa',
    activeFill : '#FF0000',
    stroke : '#333',
    strokeWidth : '2',
    scaler : 4,
    size : crowdCircleRadius/8  * 1.5,
    positionScaler : 0.65, 
}

export const volumeControl = {
    type: 'volume control',
    fill : '#555',
    hoverFill : '#FF00FF33',
    activeFill : '#FF00FF',
    stroke : '#000',
    strokeWidth : '2',
    scaler : 5,
    size : crowdCircleRadius/10 * 2,
    positionScaler : 2.0,
}

export const pitchControl = {
    type: 'pitch control',
    fill : '#666',
    hoverFill : '#FFFF0077',
    activeFill : '#FFFF00',
    stroke : '#000',
    strokeWidth : '2',
    scaler : 5,
    size : crowdCircleRadius/10 * 2,
    positionScaler : 2.5,
}














// controlScaler,
// controlWidth,
// controlHeight,
// controlFill,
// controlStroke,
// controlStrokeWidth,



//const centerX1 = canvasWidth/2 - canvasWidth/4 - radius - (controlWidth * 2) + leftOffset;
//const centerX2 = canvasWidth/2 + canvasWidth/4 + radius + (controlWidth * 2) + leftOffset; 

// const centerX2 = canvasWidth/2; 
// const centerY2 = canvasHeight/2.0;






// export const crowdCircle2 = {
//     id: 10,
//     numImages,
//     inc : 360/numImages,
//     radius,
//     centerX : centerX2,
//     centerY : centerY2,
//     circleSize: radius/circleSizeScaler,
//     controlScaler,
//     controlWidth,
//     controlHeight,
//     controlFill : '#CCC',
//     controlStroke : '#333',
//     controlStrokeWidth: '2',
//     points :  circleCoords(numImages, centerX1, centerY1, radius)
// }

// export const crowdCircles = [crowdCircle1, crowdCircle2];


// export const points = circleCoords(images.length, centerX, centerY, radius);