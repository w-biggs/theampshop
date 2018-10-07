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

/* making header current-page styles work (temporary, until vapid lets you pass data to partials) */

var navElement = document.querySelectorAll("nav[role='navigation']")[0];
var navItems = navElement.children;
var pathName = window.location.pathname;
if (pathName === "/"){
  pathName = "/index.html"
}
console.log(pathName);
for (var i = 0; i < navItems.length; i++) {
  var href = navItems[i].getAttribute("href").replace(".html","");
  if (pathName.indexOf(href) !== -1){
    navItems[i].classList.add("current");
  }
}