function request(url, cb) {
  fetch(url)
    .then(response => {
      return response.json();
    })
    .then(data => {
      return cb(data);
    });
}
const searchBox = document.getElementById('searchBox');
const searchButton = document.getElementById('bu');
searchButton.addEventListener("click",()=>{

	window.location.assign(`https://www.google.com/search?q=${searchBox.value}`)
})
let lan="ar";
function ran(){
	request("https://www.randomtext.me/api/lorem/ul-5/5-15", (aaa) => {
		console.log("5555555555555");	
		const randomText=document.getElementById("randomText");
		randomText.style.display = 'none';

		randomText.innerHTML=aaa.text_out;
				console.log(randomText.innerText);	
				const key = 'trnsl.1.1.20190702T084028Z.6d9a7275087030e7.c7f5e34f73df150db59b46361478dc0c93bfd86c';
		request(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=${key}&text=${randomText.innerText}&lang=la-${lan}`, (bbb) => {
			randomText.innerText=bbb.text[0];
		randomText.style.display = 'block';
		})
	})	
}

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
			langItem.addEventListener("click",()=>{

				lan=element.code;
				ran();
				searchBox.value=langItem.innerText;

		langList.style.display = 'none';
    });

  
      langItem.setAttribute("class", "item");
      const br = document.createElement("br");
      const form = document.getElementById("form");
      langItem.setAttribute("href", "#");
      langItem.innerHTML = element.name;
      langList.appendChild(langItem);
      langList.appendChild(br);
    });
  });
});
