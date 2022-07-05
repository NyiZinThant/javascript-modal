'use strict';

const domModal = document.querySelector('.modal');
const domOverlay = document.querySelector('.overlay');
const domClose = document.querySelector('.close-modal');
const domModalBtns = document.querySelectorAll('.show-modal');

const openModal = function () {
  domModal.classList.remove('hidden');
  domOverlay.classList.remove('hidden');
};

const closeModal = function () {
  domModal.classList.add('hidden');
  domOverlay.classList.add('hidden');
  console.log('click');
};

for (let i = 0; i < domModalBtns.length; i++)
  domModalBtns[i].addEventListener('click', openModal);

domClose.addEventListener('click', closeModal);
domOverlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !domModal.classList.contains('hidden')) {
    closeModal();
  }
});
