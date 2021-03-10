// import crowdImage0 from '../assets/img/0.jpg';
// import crowdImage1 from '../assets/img/1.jpg';
// import crowdImage2 from '../assets/img/2.jpg';
// import crowdImage3 from '../assets/img/3.jpg';
// import crowdImage4 from '../assets/img/4.jpg';
// import crowdImage5 from '../assets/img/5.jpg';
// import crowdImage6 from '../assets/img/6.jpg';
// import crowdImage7 from '../assets/img/7.jpg';
// import crowdImage8 from '../assets/img/8.jpg';
// import crowdImage9 from '../assets/img/9.jpg';
// import img0 from './img/0.png';
// import img1 from './img/1.png';
// import img2 from './img/2.png';
// import img3 from './img/3.png';
// import img4 from './img/4.png';
// import img5 from './img/5.png';
// import img6 from './img/6.png';
// import img7 from './img/7.png';
// import img8 from './img/8.png';
// import img9 from './img/9.png';


//const images1 = [crowdImage0, crowdImage1, crowdImage2, crowdImage3, crowdImage4, crowdImage5, crowdImage6, crowdImage7, crowdImage8,crowdImage9];

// const images2 = [crowdImage0, crowdImage1, crowdImage2, crowdImage3, crowdImage4, crowdImage5, crowdImage6, crowdImage7, crowdImage8,crowdImage9];

// export const images = [images1, images2];
// export const images = [images1];

const importAll = require =>
  require.keys().reduce((acc, next, i) => {
    acc[i] = require(next);
    // console.log(acc)
    return acc;
  }, []);

const images0 = importAll(
  require.context("./img/0", false, /\.(png|jpe?g|svg)$/)
);

const images1 = importAll(
  require.context("./img/1", false, /\.(png|jpe?g|svg)$/)
);

const images2 = importAll(
  require.context("./img/2", false, /\.(png|jpe?g|svg)$/)
);


const images3 = importAll(
  require.context("./img/3", false, /\.(png|jpe?g|svg)$/)
);


const images4 = importAll(
  require.context("./img/4", false, /\.(png|jpe?g|svg)$/)
);


const images5 = importAll(
  require.context("./img/5", false, /\.(png|jpe?g|svg)$/)
);


const images6 = importAll(
  require.context("./img/6", false, /\.(png|jpe?g|svg)$/)
);


const images7 = importAll(
  require.context("./img/7", false, /\.(png|jpe?g|svg)$/)
);


const images8 = importAll(
  require.context("./img/8", false, /\.(png|jpe?g|svg)$/)
);


const images9 = importAll(
  require.context("./img/9", false, /\.(png|jpe?g|svg)$/)
);

// export default images

// console.log(images2);

// const images1 = [img0, img1, img2, img3, img4, img5, img6, img7, img8, img9];

export const images = [[images0, images1, images2, images3, images4, images5, images6, images7, images8, images9]];