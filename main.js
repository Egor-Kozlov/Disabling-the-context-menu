"use strict";

let mainDiv = document.querySelector("#main-div");
let popupDiv = document.querySelector("#popup-div");

mainDiv.addEventListener("contextmenu", function rightClick(e) {  
  let y = e.clientY + "px";
  let x = e.clientX + "px";
  popupDiv.style.visibility = "visible";
  popupDiv.style.top = y;
  popupDiv.style.left = x;
  document.oncontextmenu = function () {
    return false;
  };
});

mainDiv.addEventListener('click', function leftClick(e) {
    popupDiv.style.visibility = "hidden";
})


