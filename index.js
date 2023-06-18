// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector('.header__main-ham-menu-close')
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')
const projects_button = document.querySelectorAll('.btn')

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})

// // Projects button DL push
// projects_button.addEventListener('click', (event) => { 
//   window.dataLayer.push({
//     'event': 'button_click',
//     'button_name': 'projects_button'
//   })
// })

// Button Click dataLayer pushes
projects_button.forEach(item => {
  var button_name = "(not_set)"
  var innerText = item.innerText
  if (innerText == 'PROJECTS' || innerText == 'CONTACT') {
    button_name = item.innerText
  } else if (innerText == 'VIEW') {
    button_name = item.parentElement.querySelector('h3').textContent;
  } 
  item.addEventListener('click', (event) => {
    window.dataLayer.push({
      'event': 'button_click',
      'button_name': button_name
    });
  });
});




