'use strict';

//getting the classes of the html documents

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');

for (let i = 0; i < btnShowModal.length; i++) {
    btnShowModal[i].addEventListener('click', function () {
        console.log('Button clicked');
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');

    });
}

//using the DRY principle
const closeModal = function () {

    modal.classList.add('hidden');
    overlay.classList.add('hidden');

}

btnCloseModal.addEventListener('click', closeModal)

overlay.addEventListener('click', closeModal)




















































































































