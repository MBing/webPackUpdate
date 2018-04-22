const button = document.createElement('button');
button.innerText = 'Click me';

button.onclick = () => {
	// System is a special (promise) module from ES6 spec. This will import all dependencies of the file you import as well!
	// used for code splitting
	System.import('./image-viewer')
			.then(module => {
				module.default()
			});
};

document.body.appendChild(button);