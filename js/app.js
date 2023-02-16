let navBar = document.querySelector('.navbar');
let menus = document.querySelector('#menus');

menus.onclick = () => {
    menus.classList.toggle('fa-times');
    navBar.classList.toggle('active');
}

window.onscroll = () => {
    menus.classList.remove('fa-times');
    navBar.classList.remove('active');
}