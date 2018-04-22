import big from '../assets/images/big.jpg';
import small from '../assets/images/small.jpg';

import './image-viewer.css';

const image = document.createElement('img');
image.src = small;

document.body.appendChild(image);

const bigImage = document.createElement('img');
bigImage.src = big;

document.body.appendChild(bigImage);
