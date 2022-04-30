const close_menu = document.querySelector('.main-menu__close')
const bg_menu = document.querySelector('.bg_menu')
const main_menu = document.querySelector('.main-menu')
const hamburger = document.querySelector('.hamburger')

hamburger.addEventListener('click', () => {
  bg_menu.classList.toggle('bg_menu__active')
  main_menu.classList.toggle('main-menu__active')
})

close_menu.addEventListener('click', () => {
  bg_menu.classList.toggle('bg_menu__active')
  main_menu.classList.toggle('main-menu__active')
})
