window.onload=function(){

    // burger animation
    
    let burger = document.getElementById("burger");
    let menu = document.querySelector(".header-main-nav");
    
    function burgerClick()  {
        if (burger.classList.contains('active')) {
            burger.classList.remove('active');
            menu.classList.remove('translated');
            }
            else {
            burger.classList.add('active');
            menu.classList.add('translated');
            }
        }
    burger.addEventListener('click', burgerClick) ;
    }