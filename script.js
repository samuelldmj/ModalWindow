'use strict';

//getting the classes of the html documents
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');

//using the DRY principle

//removing the hidden class to display the div modal content
const openModal = function () {
    // console.log('Button clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

//adding the hidden class to make modal not display
const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}


for (let i = 0; i < btnShowModal.length; i++) {
    btnShowModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal)

//modal window closes when the overlay is clicked
overlay.addEventListener('click', closeModal)


//using the escape key to exit the modal
document.addEventListener('keydown', function (e) {
    // console.log(e.key);
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
})





















































































































