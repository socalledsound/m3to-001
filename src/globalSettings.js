import CrowdCircle from "./redux/CrowdCircle";
// import { circleCoords } from './utils';

//general
export const canvasWidth = window.innerWidth;
export const canvasHeight = window.innerHeight;
export const numImages = 10;
export const numButtons = numImages;

const centerX = canvasWidth/2; 
const centerY = canvasHeight/2.0;

//gear
const radius = canvasWidth/7;
const imageScaler = 4;
export const gearSpeed = 0.3;


//crowdCircle
const crowdCircle1 = new CrowdCircle(0, numImages, centerX, centerY, radius, imageScaler);

export const crowdCircles = [crowdCircle1];


//playCircle
export const playCircleSettings = {
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
    sizeScaler : 1.0,
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
    size : radius/8  * 1.5,
    positionScaler : 0.65, 
}

export const volumeControl = {
    type: 'volume control',
    fill : '#555',
    hoverFill : '#FF00FF33',
    activeFill : '#FF00FF',
    stroke : '#000',
    strokeWidth : '2',
    scaler : 3,
    size : radius/3 * 2,
    positionScaler : 1.9,
}

export const pitchControl = {
    type: 'pitch control',
    fill : '#666',
    hoverFill : '#FFFF0077',
    activeFill : '#FFFF00',
    stroke : '#000',
    strokeWidth : '2',
    scaler : 3,
    size : radius/3 * 2,
    positionScaler : 3.0,
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