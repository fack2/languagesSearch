function request(url, cb) {
  fetch(url)
    .then(response => {
      return response.json();
    })
    .then(data => {
      return cb(data);
    });
}
const searchBox = document.getElementById("searchBox");
searchBox.addEventListener("keyup", () => {
  var inputValue = searchBox.value;
  request(`/search=${inputValue}`, lang => {
    console.log(lang);

    const langList = document.getElementById("langList");
    langList.innerHTML = "";

    lang.forEach(element => {
      const langItem = document.createElement("a");
      const br = document.createElement("br");
      langItem.setAttribute("href", "#");
      langItem.innerHTML = element.name;

      langList.appendChild(langItem);
      langList.appendChild(br);

      document.body.appendChild(langList);
    });
  });
});
