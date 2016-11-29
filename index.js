'use strict';
const fs = require('fs');
const path = require('path');
const reqProp = require('req-prop');
const camelcase = require('camelcase');

const files = fs.readdirSync(path.resolve('./config'));

let config = Object.create(null);

for (const file of files) {
	const key = camelcase(path.parse(file).name);
	config = reqProp(key, `./config/${file}`);
}

module.exports = config;
