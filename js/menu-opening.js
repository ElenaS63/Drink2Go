const navMain=document.querySelector(".main-menu"),navToggle=document.querySelector(".main-menu__toggle");navMain.classList.remove("main-menu--nojs"),navToggle.addEventListener("click",(function(){navMain.classList.contains("main-menu--closed")?(navMain.classList.remove("main-menu--closed"),navMain.classList.add("main-menu--opened")):(navMain.classList.add("main-menu--closed"),navMain.classList.remove("main-menu--opened"))}));