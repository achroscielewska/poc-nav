var nav = document.getElementById("nav-1");
var hrefElements = nav.getElementsByTagName("a");
var numHrefElements = hrefElements.length;

var slide1 = document.getElementsByClassName("slide1")[0];
var slide2 = document.getElementsByClassName("slide2")[0];

var firstElement = document.getElementById("firstElement");
var firstElementPosition = firstElement.getBoundingClientRect();
slide1.style.opacity = "1";
slide1.style.left = `${this.offsetLeft}px`;
slide1.style.width = `${firstElementPosition.width}px`;

function clickElement() {
  // https://www.w3schools.com/jsref/met_element_getboundingclientrect.asp
  var position = this.getBoundingClientRect();

  slide1.style.opacity = "1";
  slide1.style.left = `${this.offsetLeft}px`;
  slide1.style.width = `${position.width}px`;
}

function mouseoverElement() {
  var position = this.getBoundingClientRect();

  slide2.style.opacity = "1";
  slide2.style.left = `${this.offsetLeft}px`;
  slide2.style.width = `${position.width}px`;
  slide2.classList.add("squeeze");
}

function mouseoutElement() {
  slide2.style.opacity = "0";
  slide2.classList.remove("squeeze");
}

for (var i = 0; i < numHrefElements; i++) {
  hrefElements[i].addEventListener("click", clickElement, false);
}

for (var i = 0; i < numHrefElements; i++) {
  hrefElements[i].addEventListener("mouseover", mouseoverElement, false);
}

for (var i = 0; i < numHrefElements; i++) {
  hrefElements[i].addEventListener("mouseout", mouseoutElement, false);
}
