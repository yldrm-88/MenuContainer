document.addEventListener('DOMContentLoaded',()=>{
    const menuContainer=document.querySelector(".menu-container");
    const dropdownMenu=document.querySelector(".dropdown-menu");

    menuContainer.addEventListener('mouseover',()=>{
        dropdownMenu.style.display="block";
    })
    menuContainer.addEventListener('mouseout',()=>{
        dropdownMenu.style.display="none";
    })
})