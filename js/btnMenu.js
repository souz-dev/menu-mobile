const $menu = document.querySelector('.menu')

const $btnMenuOpen= document.querySelector('.btnMenu_open')
const $btnMenuClose= document.querySelector('.btnMenu_open')


$btnMenuOpen.addEventListener('click',function(){
    $menu.classList.add('Menu_open')
})


$btnMenuClose.addEventListener('click',function(){
    $menu.classList.remove('Menu_open')
})