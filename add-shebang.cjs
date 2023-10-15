const path = require('path');
const prependFile = require('prepend-file');

const shebangLine = '#!/usr/bin/env node\n';
const filePath = path.join(__dirname, 'out', 'index.js');

prependFile(filePath, shebangLine, (err) => {
	if (err) {
		console.error('Error adding shebang line:', err);
	} else {
		console.log('Shebang line added to ./out/index.js');
	}
});
