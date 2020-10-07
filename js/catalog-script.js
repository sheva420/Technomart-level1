var buttons = document.querySelectorAll('.buy-button'),
    index, button;
var popup = document.querySelector(".modal-cart");
var close = document.querySelector(".modal-close");

var search = document.querySelector(".main-header-search");
var searchinput = document.querySelector(".search-input");
var header = document.querySelector(".main-header-wrapper")

for (index = 0; index < buttons.length; index++) {
    button = buttons[index];
    button.addEventListener('click', clickHandler);
    button.addEventListener('dblclick', doubleClickHandler);
}

function clickHandler(event) {
    console.log('click', this.innerText);
    event.preventDefault();
	popup.classList.add("modal-show");
}

function doubleClickHandler(event) {
    console.log('doubleclick', this.innerText);
    this.removeEventListener('click', clickHandler);    
    this.removeEventListener('dblclick', doubleClickHandler);
}

close.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.remove("modal-show");
})


searchinput.addEventListener("click", function (evt) {
	evt.preventDefault();
	search.classList.add("main-header-search-focus");
})

header.addEventListener("click", function (evt) {
	evt.preventDefault();
	search.classList.remove("main-header-search-focus");
})