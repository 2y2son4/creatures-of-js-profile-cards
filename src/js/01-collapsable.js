'use strict';
const sectionElement = document.querySelector('.js-collapsable');
const headerElement = document.querySelector('.collapsable__header');
// const containerElement = document.querySelector('.collapsable__container');

function collapsableHandler () {
    sectionElement.classList.toggle('collapsed');
    // headerElement.classList.toggle('collapsable__header--arrow');
    // containerElement.classList.toggle('collapsable__container');
};

headerElement.addEventListener ('click', collapsableHandler);