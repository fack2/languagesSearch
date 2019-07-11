let request = (url, cb) => {
	fetch(url)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			return cb(data);
		});
};
const searchBox = document.getElementById('searchBox');
const searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click', () => {
	window.location.assign(`https://www.google.com/search?q=${searchBox.value}`);
});
let pressedLanguage = 'ar';
const text = 'Welcome to our website! press the search button to redirect to google.';
const randomText = document.getElementById('randomText');

randomText.innerText = text;

const translateWelcomeMesseage = () => {
	const key = 'trnsl.1.1.20190702T084028Z.6d9a7275087030e7.c7f5e34f73df150db59b46361478dc0c93bfd86c';
	request(
		`https://translate.yandex.net/api/v1.5/tr.json/translate?key=${key}&text=${text}&lang=en-${pressedLanguage}`,
		(data) => {
			randomText.innerText = data.text[0];
			randomText.style.display = 'block';
		}
	);
};

searchBox.addEventListener('keyup', () => {
	const inputValue = searchBox.value;
	request(`/search=${inputValue}`, (enteredLanguage) => {
		const langList = document.getElementById('langList');
		langList.innerHTML = '';
		langList.style.display = 'none';
		enteredLanguage.forEach((element) => {
			langList.style.display = 'block';

			const langItem = document.createElement('a');
			langItem.addEventListener('click', () => {
				pressedLanguage = element.code;
				translateWelcomeMesseage();
				searchBox.value = langItem.innerText;

				langList.style.display = 'none';
			});

			langItem.setAttribute('class', 'item');
			const br = document.createElement('br');
			langItem.setAttribute('href', '#');
			langItem.innerHTML = element.name;
			langList.appendChild(langItem);
			langList.appendChild(br);
		});
	});
});
