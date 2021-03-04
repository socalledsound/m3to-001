
export const circleCoords = (numImages, centerX, centerY, radius) => {
    console.log(centerX, radius);
    const inc = 360/numImages;
    const points = range(numImages);
    return points.map(idx => {
        const theta = degreesToRadians(inc * idx);
        return ({
            x: centerX + (radius * Math.cos(theta)),
            y: centerY + (radius * Math.sin(theta)),
        })
    })
}


export const getDistance = (pos1, pos2) => {
    const dx = pos1.x - pos2.x;
    const dy = pos1.y - pos2.y;
    return Math.sqrt(dx * dx + dy * dy) 
  }

//   export const getRotationDistance = (pos1, pos2, centerPos) => {
//         const distance = 1  
//     return distance
//   }
  

export const degreesToRadians = angle => (Math.PI * angle) / 180;
const range = count => Array.from(Array(count).keys());

export const mapVal = (value, x1, y1, x2, y2) => (value - x1) * (y2 - x2) / (y1 - x1) + x2;

export const constrainTheta = ( theta ) => {
    const thetaMin = -45;
    const thetaMax = 45;
    return theta < thetaMin ?  thetaMin : theta > thetaMax ? thetaMax : theta; 
}

export const getControlPos = (offsetX, offsetY, r, theta) => {

    return ({
        x: offsetX + (r * Math.cos(theta)),
        y: offsetY + (r * Math.sin(theta)),
    })
}



export const getAngles = (numImages) => {
    const inc = 360/numImages;
    const angles = range(numImages);
    return angles.map(idx => {
        return degreesToRadians(inc * idx)
    })
}


export const getMarkCoords = (dir, numMarks, dist, theta) => {
    return 1
}
