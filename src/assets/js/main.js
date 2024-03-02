/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
var btnMenu = document.querySelector('.main-menu-toggle');
var btnMenuClose = document.querySelector('.main-menu-toggle.close-menu');
var navWrapper = document.querySelector('.primary-header_wrapper_content');
var isOpen = false; // Variable to track menu state
btnMenu === null || btnMenu === void 0 ? void 0 : btnMenu.addEventListener('click', function () {
    btnMenu === null || btnMenu === void 0 ? void 0 : btnMenu.classList.add('display-none');
    btnMenuClose === null || btnMenuClose === void 0 ? void 0 : btnMenuClose.classList.remove('display-none');
    navWrapper === null || navWrapper === void 0 ? void 0 : navWrapper.classList.toggle('only-desktop', isOpen);
    isOpen = !isOpen; // Toggle menu state
});
btnMenuClose === null || btnMenuClose === void 0 ? void 0 : btnMenuClose.addEventListener('click', function () {
    btnMenu === null || btnMenu === void 0 ? void 0 : btnMenu.classList.remove('display-none');
    btnMenuClose === null || btnMenuClose === void 0 ? void 0 : btnMenuClose.classList.add('display-none');
    navWrapper === null || navWrapper === void 0 ? void 0 : navWrapper.classList.toggle('only-desktop', isOpen);
    isOpen = !isOpen; // Toggle menu state
});
