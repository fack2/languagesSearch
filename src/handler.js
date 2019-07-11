const fs = require('fs');
const path = require('path');

const homeHandler = (request, response) => {
	const filePath = path.join(__dirname, '..', 'public', 'index.html');
	fs.readFile(filePath, (error, file) => {
		if (error) {
			response.writeHead(500, { 'Content-Type': 'text/html' });
			response.end('<h1>server Error</h1>');
		} else {
			response.writeHead(200, { 'Content-Type': 'text/html' });
			response.end(file);
		}
	});
};

const searchHandler = (request, response, url) => {
	let searchLang = url.split('=')[1];
	const filePath = path.join(__dirname, 'data', 'db.json');
	fs.readFile(filePath, 'utf-8', (err, file) => {
		if (err) console.log(err);
		else if (searchLang.length > 0) {
			response.writeHead(200, { 'Content-Type': 'application/json' });
			const allLang = JSON.parse(file);

			const capitalizedFirstLetter = searchLang[0].toUpperCase();
			searchLang = capitalizedFirstLetter + searchLang.slice(1);
			console.log('search', searchLang);
			const filteredLanguages = allLang.filter((element) => {
				return element.name.indexOf(searchLang) === 0;
			});
			console.log(filteredLanguages);
			response.end(JSON.stringify(filteredLanguages));
		} else {
			response.writeHead(200, { 'Content-Type': 'application/json' });
			response.end(JSON.stringify(''));
		}
	});
};

const publicHandler = (request, response, url) => {
	const extension = url.split('.')[1];
	const extensionType = {
		html: 'text/html',
		css: 'text/css',
		js: 'application/javascript',
		jpg: 'image/jpg',
		png: 'image/png',
		ico: 'image/x-icon'
	};
	const filePath = path.join(__dirname, '..', 'public', url);

	fs.readFile(filePath, (error, file) => {
		if (error) {
			response.writeHead(500, { 'Content-Type': 'text/html' });
			response.end('<h1>this is error message should be</h1>');
		} else {
			response.writeHead(200, { 'Content-Type': extensionType[extension] });
			response.end(file);
		}
	});
};

module.exports = { homeHandler, searchHandler, publicHandler };
