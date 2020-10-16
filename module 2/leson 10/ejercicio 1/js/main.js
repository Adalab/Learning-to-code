"use strict";
// Ejercicio 1. Petición a servidor
function getNumber() {
  fetch("https://api.rand.fun/text/password?length=10")
    .then((response) => response.json())
    .then((data) => {
      document.querySelector(".js-result").innerHTML = data.result;
    });
}
document.querySelector(".js-number").addEventListener("click", getNumber);
