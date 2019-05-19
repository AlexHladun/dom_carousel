'use strict';
const container = document.querySelector('#container');
const buttons = document.querySelector('#buttons');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

function carousel(evnt) {
  const size = 390;
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
  if (Math.ceil(container.scrollLeft) === 910) {
    next.disabled = true;
    next.style.opacity = 0.5;
  } else {
    next.disabled = false;
    next.style.opacity = 1;
  };
  if (Math.ceil(container.scrollLeft) === 0) {
    prev.disabled = true;
    prev.style.opacity = 0.5;
  } else {
    prev.disabled = false;
    prev.style.opacity = 1;
  }
};

buttons.addEventListener('click', carousel);
