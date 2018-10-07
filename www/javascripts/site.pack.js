// This is a main JavaScript file that will ll be compiled into /javascripts/site.js
//
// Any JavaScript file in your site folder can be referenced here by using import or require statements.
// Additionally, you can import modules installed via your package.json file.
//
// For example:
// import './fileName'
//
// To learn more, visit https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import

import './nav.js';

/* lightboxes */

baguetteBox.run('#benchitems');
baguetteBox.run('.modalpics');

/* making header current-page styles work (temporary, until vapid lets you pass data to partials) */

var navElement = document.querySelectorAll("nav[role='navigation']")[0];
var navItems = navElement.children;
var pathName = window.location.pathname;
if (pathName === "/"){
  pathName = "/index.html"
}
for (var i = 0; i < navItems.length; i++) {
  var href = navItems[i].getAttribute("href").replace(".html","");
  if (pathName.indexOf(href) !== -1){
    navItems[i].classList.add("current");
  }
}

/* modals */

var products = document.getElementsByClassName("product");
for (var i = 0; i < products.length; i++){
  products[i].onclick = function(){
    modalShow(this.id);
  }
}

var cover = document.getElementById("cover");

function modalShow(productId){
  document.getElementsByTagName("body")[0].style.overflow = "hidden";
  cover.classList.remove("hide-modals");
  cover.classList.add("hiding");
  window.requestAnimationFrame(function(){
    cover.classList.remove("hiding");
    document.getElementById("modal-" + productId).classList.remove("hidden-modal");
  })
}

var modalCloseButtons = document.getElementsByClassName("modal-close");
for (var i = 0; i < modalCloseButtons.length; i++){
  modalCloseButtons[i].onclick = function(){
    modalHide();
  }
}

function modalHide(){
  document.getElementsByTagName("body")[0].style.overflow = "";
  cover.classList.add("hiding");
  cover.addEventListener("transitionend", function handler(event){
    cover.classList.remove("hiding");
    cover.classList.add("hide-modals");
    var modals = document.getElementsByClassName("modal");
    for (var i = 0; i < modals.length; i++){
      modals[i].classList.add("hidden-modal");
    }
    cover.removeEventListener("transitionend", handler);
  });
}