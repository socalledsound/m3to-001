export const degreesToRadians = angle => (Math.PI * angle) / 180;
const range = count => Array.from(Array(count).keys());

export const getControlPos = (offsetX, offsetY, r, theta) => {
    return ({
        x: offsetX + (r * Math.cos(theta)),
        y: offsetY + (r * Math.sin(theta)),
    })
}

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