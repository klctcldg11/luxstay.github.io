const headerItem = document.querySelector('.js-header-open')
const navConutri = document.querySelector('.header__nav-countri')
const appContainer = document.querySelector('.container')
const appHeader = document.querySelector('.header')


function showNavCountri() {
    navConutri.classList.add('open')
}
function hideNavCountri() {
    navConutri.classList.remove('open')
}
headerItem.addEventListener('click', showNavCountri)
appContainer.addEventListener('click', hideNavCountri)
