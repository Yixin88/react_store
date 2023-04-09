function nonActiveNavBar() {
    const menu_btn = document.querySelector('.hamburger');
    const mobile_btn = document.querySelector('.mobile-catagoryNav');
    const overlay = document.querySelector('.overlay');
    mobile_btn.classList.remove('is-active');
    menu_btn.classList.remove('is-active');
    overlay.classList.remove('is-active');
}

function activeNavBar() {
    const menu_btn = document.querySelector('.hamburger');
    const mobile_btn = document.querySelector('.mobile-catagoryNav');
    const overlay = document.querySelector('.overlay');
    menu_btn.classList.add('is-active');
    mobile_btn.classList.add('is-active');
    overlay.classList.add('is-active');
}

export {nonActiveNavBar, activeNavBar}