'use strict';
const container = document.querySelector('#container-images');
const buttons = document.querySelector('#buttons');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const size = document.querySelector('#container-images').offsetWidth;
const imgSize = document.querySelector('img').offsetWidth;
const imgCount = document.querySelectorAll('img').length
const maxSize = imgCount * imgSize - size;


function carousel(evnt) {
  const target = evnt.target;
  const action = target.getAttribute('data-action');
  switch (action) {
    case 'next':
      container.scrollLeft += size;
      break;
    case 'prev':
      container.scrollLeft -= size;
      break;
  };
  disBtn();
};

function disBtn() {
  if (Math.ceil(container.scrollLeft) === maxSize) {
    next.classList.add('disabled');
  } else {
    next.classList.remove('disabled');
  };
  if (Math.ceil(container.scrollLeft) === 0) {
    prev.classList.add('disabled');
  } else {
    prev.classList.remove('disabled');
  }
};

buttons.addEventListener('click', carousel);
