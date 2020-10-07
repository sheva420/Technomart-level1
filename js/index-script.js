var link1 = document.querySelector(".modal-write-button");
var popup1 = document.querySelector(".modal-write-us");


var close1 = document.querySelector(".modal-write-close");
var link2 = document.querySelector(".map");
var popup2 = document.querySelector(".modal-map");
var close2 = document.querySelector(".modal-map-close");


var slide1 = document.querySelector(".category-item-4");
var slide2 = document.querySelector(".category-item-5");
var rightarrow = document.querySelector(".slider-right-arrow");
var leftarrow = document.querySelector(".slider-left-arrow");
var sliderlink1 = document.querySelector(".slider-controls-item--1");
var sliderlink2 = document.querySelector(".slider-controls-item--2");


var search = document.querySelector(".main-header-search");
var searchinput = document.querySelector(".search-input");
var header = document.querySelector(".main-header-wrapper")


var serviceslink1 = document.querySelector(".services-navigation-item-1");
var serviceslink2 = document.querySelector(".services-navigation-item-2");
var serviceslink3 = document.querySelector(".services-navigation-item-3");
var serviceslide1 = document.querySelector(".service-item-1");
var serviceslide2 = document.querySelector(".service-item-2");
var serviceslide3 = document.querySelector(".service-item-3");


link1.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup1.classList.add("modal-show");
})
close1.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup1.classList.remove("modal-show");
})


link2.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup2.classList.add("modal-show");
})
close2.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup2.classList.remove("modal-show");
})


rightarrow.addEventListener("click", function (evt) {
	evt.preventDefault();
	slide2.classList.toggle("slider-show");
	slide1.classList.toggle("slider-show");
})
leftarrow.addEventListener("click", function (evt) {
	evt.preventDefault();
	slide2.classList.toggle("slider-show");
	slide1.classList.toggle("slider-show");
})
sliderlink1.addEventListener("click", function (evt) {
	evt.preventDefault();
	slide2.classList.toggle("slider-show");
	slide1.classList.toggle("slider-show");
})
sliderlink2.addEventListener("click", function (evt) {
	evt.preventDefault();
	slide2.classList.toggle("slider-show");
	slide1.classList.toggle("slider-show");
})


serviceslink1.addEventListener("click", function (evt) {
	evt.preventDefault();
	serviceslide1.classList.add("service-item-show");
	serviceslide2.classList.remove("service-item-show");
	serviceslide3.classList.remove("service-item-show");
	serviceslink1.classList.add("services-navigation-item-current");
	serviceslink2.classList.remove("services-navigation-item-current");
	serviceslink3.classList.remove("services-navigation-item-current");
})
serviceslink2.addEventListener("click", function (evt) {
	evt.preventDefault();
	serviceslide1.classList.remove("service-item-show");
	serviceslide2.classList.add("service-item-show");
	serviceslide3.classList.remove("service-item-show");
	serviceslink1.classList.remove("services-navigation-item-current");
	serviceslink2.classList.add("services-navigation-item-current");
	serviceslink3.classList.remove("services-navigation-item-current");
})
serviceslink3.addEventListener("click", function (evt) {
	evt.preventDefault();
	serviceslide1.classList.remove("service-item-show");
	serviceslide2.classList.remove("service-item-show");
	serviceslide3.classList.add("service-item-show");
	serviceslink1.classList.remove("services-navigation-item-current");
	serviceslink2.classList.remove("services-navigation-item-current");
	serviceslink3.classList.add("services-navigation-item-current");
})


searchinput.addEventListener("click", function (evt) {
	evt.preventDefault();
	search.classList.add("main-header-search-focus");
})

header.addEventListener("click", function (evt) {
	evt.preventDefault();
	search.classList.remove("main-header-search-focus");
})
