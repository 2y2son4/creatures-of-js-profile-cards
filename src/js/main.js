/* eslint-disable no-undef */
'use strict';

const formElement = document.querySelector('.js-form');

function preventSubmit(event) {
  event.preventDefault();
}
formElement.addEventListener('submit', preventSubmit);

getFromLocalStorage();

updateAllInputs();
handlerPalette();
updatePhoto();
