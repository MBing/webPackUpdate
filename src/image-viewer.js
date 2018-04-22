import big from '../assets/images/big.jpg';
import small from '../assets/images/small.jpg';

import './image-viewer.css'; // no detailed import when code just needs to load.

export default () => {
	const image = document.createElement('img');
	image.src = small;

	document.body.appendChild(image);

	const bigImage = document.createElement('img');
	bigImage.src = big;

	document.body.appendChild(bigImage);	
};
