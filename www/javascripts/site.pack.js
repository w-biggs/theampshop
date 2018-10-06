// This is a main JavaScript file that will ll be compiled into /javascripts/site.js
//
// Any JavaScript file in your site folder can be referenced here by using import or require statements.
// Additionally, you can import modules installed via your package.json file.
//
// For example:
// import './fileName'
//
// To learn more, visit https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import

document.getElementById("nav-expander").onclick = function(){
  toggleNav();
}

function toggleNav(){
  var navElement = document.querySelectorAll("nav[role='navigation']")[0];
  var navHeight = properHeight(navElement);
  console.log(navHeight);
  if(navElement.getAttribute('data-collapsed') === 'true'){
    navElement.style.height = navHeight + "px";
    navElement.setAttribute('data-collapsed', 'false');
  } else {
    var navTransition = navElement.style.transition;
    navElement.style.transition = "";
    requestAnimationFrame(function(){
      navElement.style.height = navHeight + "px";
      navElement.style.transition = navTransition;
      requestAnimationFrame(function(){
        navElement.style.height = "0px";
      });
    });
    navElement.setAttribute('data-collapsed', 'true');
  }
}

/* scrollHeight doesn't include all child margins on Firefox, having to do this instead */
function properHeight(el) {
  var children = el.children;
  var totalHeight = 0;
  for (var i = 0; i < children.length; i++) {
    totalHeight += outerHeight(children[i]);
  }
  return totalHeight;
}

/* get height of single element including its margins */
function outerHeight(el) {
  var height = el.offsetHeight;
  var style = getComputedStyle(el);
  height += parseInt(style.marginTop) + parseInt(style.marginBottom);
  return height;
}