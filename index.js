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

// View project details DL push
projects_button.forEach(item => {
  var button_name = "(not_set)"
  console.log(item)
  console.log(item.innerText)
  if (item.innerText == 'PROJECTS') {
    console.log('Projectssss')
    button_name = 'PROJECTS'
  } else if (item.innerTest == 'VIEW') {
    console.log('VIEWW----- ')
    button_name = item.parentElement.querySelector('h3').textContent;
  }
  item.addEventListener('click', (event) => {
    window.dataLayer.push({
      'event': 'button_click',
      'button_name': button_name
    });
  });
});




