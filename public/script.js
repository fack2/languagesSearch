function request(url, cb) {
	fetch(url)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			return cb(data);
		});
}
const searchBox = document.getElementById('searchBox');
searchBox.addEventListener('keyup', () => {
	var inputValue = searchBox.value;
	request(`/search=${inputValue}`, (lang) => {
		console.log(lang);

		const langList = document.getElementById('langList');
		langList.innerHTML = '';
		langList.style.display = 'none';
		lang.forEach((element) => {
			langList.style.display = 'block';

			const langItem = document.createElement('a');
			langItem.setAttribute('class', 'item');
			const br = document.createElement('br');
			const form = document.getElementById('form');
			langItem.setAttribute('href', '#');
			langItem.innerHTML = element.name;
			langList.appendChild(langItem);
			langList.appendChild(br);
		});
	});
});
