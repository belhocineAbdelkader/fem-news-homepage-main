/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
const btnMenu = document.querySelector<HTMLButtonElement>('.main-menu-toggle');
const btnMenuClose = document.querySelector<HTMLButtonElement>('.main-menu-toggle.close-menu');
const navWrapper = document.querySelector('.primary-header_wrapper_content');

let isOpen = false; // Variable to track menu state

btnMenu?.addEventListener('click', () => {
    btnMenu?.classList.add('display-none');
    btnMenuClose?.classList.remove('display-none');
    navWrapper?.classList.toggle('only-desktop', isOpen);

    isOpen = !isOpen; // Toggle menu state
});

btnMenuClose?.addEventListener('click', () => {
    btnMenu?.classList.remove('display-none');
    btnMenuClose?.classList.add('display-none');
    navWrapper?.classList.toggle('only-desktop', isOpen);

    isOpen = !isOpen; // Toggle menu state
});


