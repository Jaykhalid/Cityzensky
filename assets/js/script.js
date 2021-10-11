/* Memanipulasi Navbar supaya tampilannya Responsive */
const menu     = document.querySelector('.sideNav');
const bars     = document.getElementById('menuBars');
const menuSide = document.querySelector('.sideColumn');
const closeNav = document.getElementById('closeSideNav');
const limenu   = document.querySelector('.limenu');

bars.addEventListener('click', function() 
{
    document.querySelector('body').style.overflow = 'auto';
    menu.style.width = '100%';
    menu.style.display = 'inline';
});

closeSideNav.addEventListener('click', function() 
{ 
    menu.style.width = '0%';
    document.querySelector('body').style.overflow = 'auto';
    menu.style.display = 'none';

});

document.querySelector('.limenu').addEventListener('click', () => 
{
    menu.style.width = '0%';
    document.querySelector('body').style.overflow = 'auto';
    menu.style.display = 'none';
})

document.querySelector('.limenu1').addEventListener('click', () => 
{
    menu.style.width = '0%';
    document.querySelector('body').style.overflow = 'auto';
    menu.style.display = 'none';
})
document.querySelector('.limenu2').addEventListener('click', () => 
{
    menu.style.width = '0%';
    document.querySelector('body').style.overflow = 'auto';
    menu.style.display = 'none';
})
document.querySelector('.limenu3').addEventListener('click', () => 
{
    menu.style.width = '0%';
    document.querySelector('body').style.overflow = 'auto';
    menu.style.display = 'none';
})

