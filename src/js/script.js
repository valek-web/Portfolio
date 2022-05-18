const axios = require('axios')
const close_menu = document.querySelector('.main-menu__close')
const bg_menu = document.querySelector('.bg_menu')
const main_menu = document.querySelector('.main-menu')
const hamburger = document.querySelector('.hamburger')
const menu_link = document.querySelectorAll('.main-menu__link')

hamburger.addEventListener('click', () => {
  bg_menu.classList.toggle('bg_menu__active')
  main_menu.classList.toggle('main-menu__active')
  hamburger.classList.toggle('hamburger-animation')
})

close_menu.addEventListener('click', () => {
  bg_menu.classList.toggle('bg_menu__active')
  main_menu.classList.toggle('main-menu__active')
  hamburger.classList.toggle('hamburger-animation')
})

for (let i = 0; i < menu_link.length; i++) {
  menu_link[i].addEventListener('click', () => {
    bg_menu.classList.toggle('bg_menu__active')
    main_menu.classList.toggle('main-menu__active')
    hamburger.classList.toggle('hamburger-animation')
  })
}

axios
  .post('./../mailer/smart.php', {
    firstName: 'Fred',
    lastName: 'Flintstone',
  })
  .then(function (response) {
    console.log(response)
  })
  .catch(function (error) {
    console.log(error)
  })
