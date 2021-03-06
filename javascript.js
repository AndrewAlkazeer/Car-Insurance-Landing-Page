// First page including navbar for large screens
var navMenu = document.getElementsByClassName('nav-menu');
var hiddenMenu = document.getElementsByClassName('collapse-menu');
var navArrow = document.getElementsByClassName('nav-arrow');
var menuTitle = document.getElementsByClassName('menu-title');
var menuP1 = document.getElementsByClassName('menu-p1');
var menuP2 = document.getElementsByClassName('menu-p2');
var menuP3 = document.getElementsByClassName('menu-p3');
var menuP4 = document.getElementsByClassName('menu-p4');
// second page
var pointer = document.getElementsByClassName('pointer');
var btn1 = document.getElementsByClassName('btn-1');
var btn2 = document.getElementsByClassName('btn-2');
var leftImgCont = document.getElementsByClassName('img-cont');
var rightTextCont = document.getElementsByClassName('p-selections-sub-cont');
// Third page
var dropdownCont = document.getElementsByClassName('dropdown-cont');
var dropdownI = document.getElementsByClassName('dropdown-i');
// Fourth page
var priceOptionsUl = document.getElementsByClassName('price-options-ul');
var priceOptionsP = document.getElementsByClassName('price-options-p');
var priceOptionsBtn = document.getElementsByClassName('price-options-btn');
// Fifth page
reviewsTextContSub = document.getElementsByClassName('reviews-text-cont-sub');
reviewsImgContSub = document.getElementsByClassName('reviews-img-cont-sub');
leftArrowCont = document.getElementsByClassName('left-arrow-cont');
rightArrowCont = document.getElementsByClassName('right-arrow-cont');
leftArrowI = document.getElementsByClassName('left-arrow-i');
rightArrowI = document.getElementsByClassName('right-arrow-i');

window.onload = ()=>{
    hiddenMenu[0].style.top = '-105%';
  navMenu[0].addEventListener('click', ()=>{
    if(hiddenMenu[0].style.top == '-105%'){
    hiddenMenu[0].style.top = '40%';
    hiddenMenu[0].style.transform = 'translateY(-40%)';
    hiddenMenu[0].style.transition = '0.4s ease-in-out';
    navMenu[0].style.fontWeight = 'bold';
    navArrow[0].style.transform = 'rotate(180deg)';
    navArrow[0].style.transition = '0.3s ease-in-out';
    document.body.style.overflow = 'hidden';
    // navbar menu title animation
   for(var i = 0; i < menuTitle.length; i++){
       menuTitle[i].style.opacity = '1';
       menuTitle[i].style.transition = '0.6s ease-in-out';
       menuTitle[i].style.transitionDelay = '0.3s';
       menuTitle[i].style.marginTop = '40px';
   }
   // navbar menu paragraph animation divided into 4 sets of animation with few delay between them
   for(var i = 0; i < menuP1.length; i++){
    menuP1[i].style.opacity = '1';
    menuP1[i].style.transition = '0.4s ease-in-out';
    menuP1[i].style.transitionDelay = '0.4s';
    menuP1[i].style.marginTop = '15px';
    }
    
    for(var i = 0; i < menuP2.length; i++){
        menuP2[i].style.opacity = '1';
        menuP2[i].style.transition = '0.4s ease-in-out';
        menuP2[i].style.transitionDelay = '0.5s';
        menuP2[i].style.marginTop = '15px';
        }
        for(var i = 0; i < menuP3.length; i++){
            menuP3[i].style.opacity = '1';
            menuP3[i].style.transition = '0.4s ease-in-out';
            menuP3[i].style.transitionDelay = '0.6s';
            menuP3[i].style.marginTop = '15px';
            }
            for(var i = 0; i < menuP4.length; i++){
                menuP4[i].style.opacity = '1';
                menuP4[i].style.transition = '0.4s ease-in-out';
                menuP4[i].style.transitionDelay = '0.7s';
                menuP4[i].style.marginTop = '15px';
                }
    } else{
    hiddenMenu[0].style.top = '-105%';
    hiddenMenu[0].style.transform = 'translateY(0%)';
    hiddenMenu[0].style.transition = '0.6s ease-in-out';
    navMenu[0].style.fontWeight = 'normal';
    navArrow[0].style.transform = 'rotate(0deg)';
    navArrow[0].style.transition = '0.3s ease-in-out';
    document.body.style.overflow = 'scroll';
// navbar menu title animation when menu closes
    for(var i = 0; i < menuTitle.length; i++){
        menuTitle[i].style.opacity = '0';
        menuTitle[i].style.transition = '0.4s ease-in-out';
        menuTitle[i].style.transitionDelay = '0.3s';
        menuTitle[i].style.marginTop = '20px';
    }
    // navbar menu paragraph animation divided into 4 sets of animation with few delay between them when menu closes
    for(var i = 0; i < menuP1.length; i++){
        menuP1[i].style.opacity = '0';
        menuP1[i].style.transition = '0.4s ease-in-out';
        menuP1[i].style.transitionDelay = '0.4s';
        menuP1[i].style.marginTop = '10px';
    }
    for(var i = 0; i < menuP2.length; i++){
        menuP2[i].style.opacity = '0';
        menuP2[i].style.transition = '0.4s ease-in-out';
        menuP2[i].style.transitionDelay = '0.4s';
        menuP2[i].style.marginTop = '10px';
    }
    for(var i = 0; i < menuP3.length; i++){
        menuP3[i].style.opacity = '0';
        menuP3[i].style.transition = '0.4s ease-in-out';
        menuP3[i].style.transitionDelay = '0.4s';
        menuP3[i].style.marginTop = '10px';
    }
    for(var i = 0; i < menuP4.length; i++){
        menuP4[i].style.opacity = '0';
        menuP4[i].style.transition = '0.4s ease-in-out';
        menuP4[i].style.transitionDelay = '0.4s';
        menuP4[i].style.marginTop = '10px';
    }
    }
});
btn1[0].addEventListener('click', ()=>{
    btn1[0].style.fontWeight = 'bold';
    btn2[0].style.fontWeight = 'normal';
    leftImgCont[0].style.left = '-95.5%';
    leftImgCont[0].style.transition = '0.5s ease-in-out';
    rightTextCont[0].style.left = '-102%';
    rightTextCont[0].style.transition = '0.5s ease-in-out';
    pointer[0].style.left = '0%';
    pointer[0].style.transition = '0.5s ease-in-out';
});
btn2[0].addEventListener('click', ()=>{
    btn2[0].style.fontWeight = 'bold';
    btn1[0].style.fontWeight = 'normal';
    leftImgCont[0].style.left = '0%';
    leftImgCont[0].style.transition = '0.5s ease-in-out';
    rightTextCont[0].style.left = '0%';
    rightTextCont[0].style.transition = '0.5s ease-in-out';
    pointer[0].style.left = '110%';
    pointer[0].style.transition = '0.5s ease-in-out';
});

dropdownCont[0].addEventListener('click', ()=>{
    var curIAttr = dropdownI[0].getAttribute('class');
    if(curIAttr == 'glyphicon glyphicon-chevron-down dropdown-i'){
        dropdownI[0].setAttribute('class', 'glyphicon glyphicon-chevron-up dropdown-i');
    } else{
        dropdownI[0].setAttribute('class', 'glyphicon glyphicon-chevron-down dropdown-i');
    }
});
dropdownCont[1].addEventListener('click', ()=>{
    var curIAttr = dropdownI[1].getAttribute('class');
    if(curIAttr == 'glyphicon glyphicon-chevron-down dropdown-i'){
        dropdownI[1].setAttribute('class', 'glyphicon glyphicon-chevron-up dropdown-i');
    } else{
        dropdownI[1].setAttribute('class', 'glyphicon glyphicon-chevron-down dropdown-i');
    }
});
dropdownCont[2].addEventListener('click', ()=>{
    var curIAttr = dropdownI[2].getAttribute('class');
    if(curIAttr == 'glyphicon glyphicon-chevron-down dropdown-i'){
        dropdownI[2].setAttribute('class', 'glyphicon glyphicon-chevron-up dropdown-i');
    } else{
        dropdownI[2].setAttribute('class', 'glyphicon glyphicon-chevron-down dropdown-i');
    }
});
dropdownCont[3].addEventListener('click', ()=>{
    var curIAttr = dropdownI[3].getAttribute('class');
    if(curIAttr == 'glyphicon glyphicon-chevron-down dropdown-i'){
        dropdownI[3].setAttribute('class', 'glyphicon glyphicon-chevron-up dropdown-i');
    } else{
        dropdownI[3].setAttribute('class', 'glyphicon glyphicon-chevron-down dropdown-i');
    }
});
dropdownCont[4].addEventListener('click', ()=>{
    var curIAttr = dropdownI[4].getAttribute('class');
    if(curIAttr == 'glyphicon glyphicon-chevron-down dropdown-i'){
        dropdownI[4].setAttribute('class', 'glyphicon glyphicon-chevron-up dropdown-i');
    } else{
        dropdownI[4].setAttribute('class', 'glyphicon glyphicon-chevron-down dropdown-i');
    }
});
rightArrowCont[0].addEventListener('click', ()=>{
    rightArrowI[0].style.color = '#AEB6BF';
    leftArrowI[0].style.color = 'black';
    rightArrowI[0].style.transition = '0.5s ease-in';
    reviewsTextContSub[0].style.left = '0';
    reviewsTextContSub[0].style.transition = '0.5s ease-in';
    reviewsImgContSub[0].style.left = '0';
    reviewsImgContSub[0].style.transition = '0.5s ease-in';
});
leftArrowCont[0].addEventListener('click', ()=>{
    leftArrowI[0].style.color = '#AEB6BF';
    rightArrowI[0].style.color = 'black';
    leftArrowI[0].style.transition = '0.5s ease-in';
    reviewsTextContSub[0].style.left = '-100%';
    reviewsTextContSub[0].style.transition = '0.5s ease-in';
    reviewsImgContSub[0].style.left = '-100%';
    reviewsImgContSub[0].style.transition = '0.5s ease-in';
});
// Navbar Mobile and medium screen menu btn
var one = document.querySelector('.one');
    var two = document.querySelector('.two');
    var three = document.querySelector('.three');
    var main = document.querySelector('.mobile-nav-btn-cont');
    var isClicked = false;
    var isClosed = true;
    // Menu Open
    main.addEventListener('click', ()=>{
     if(!isClicked && isClosed){
       isClicked = true;
       isClosed = false;
       mobileCollapseMenuCont.style.left = '0px';
       var animeMD = 0.3;
       for(var i = 0; i < mobileCollapseMenuTitle.length; i++){
           animeMD = animeMD + 0.2;
        mobileCollapseMenuTitle[i].style.left = '0px';
        mobileCollapseMenuTitle[i].style.opacity = '1';
        mobileCollapseMenuTitle[i].style.transitionDelay = `${animeMD}s`;
       }
      // Stage One Animation
      setTimeout(()=>{
      three.style.top = '100%';
      two.style.top = '100%';
      one.style.top = '100%';
      three.style.transform = 'translateY(0%)';
      two.style.transform = 'translateY(0%)';
      one.style.transform = 'translateY(0%)';
      three.style.transition = '0.7s ease-in-out';
      two.style.transition = '0.6s ease-in-out';
      one.style.transition = '0.5s ease-in-out';
      }, 200);
      // Stage Two Animation
      setTimeout(() =>{
      one.style.top = '-80%';
      two.style.top = '20%';
      three.style.top = '70%';
      three.style.transition = '0.2s ease-in-out';
      two.style.transition = '0.3s ease-in-out';
      one.style.transition = '0.4s ease-in-out';
      }, 1000);
      // Stage Three Animation
      setTimeout(() =>{
      three.style.top = '120%';
      two.style.top = '120%';
      one.style.top = '120%';
      three.style.transform = 'translateY(0%)';
      two.style.transform = 'translateY(0%)';
      one.style.transform = 'translateY(0%)';
      three.style.transition = '0.7s ease-in-out';
      two.style.transition = '0.3s ease-in-out';
      one.style.transition = '0.5s ease-in-out';
      two.style.opacity = '0';
      }, 1400);
      // Stage Four Animation
       setTimeout(() =>{
         one.style.transform = 'rotate(-30deg)';
         three.style.transform = 'rotate(30deg)';
         one.style.transition = '0.3s ease-in-out';
         three.style.transition = '0.3s ease-in-out';
       }, 1900);
       setTimeout(() =>{
         one.style.top = '70%';
         three.style.top = '70%';
         one.style.transform = 'rotate(-45deg)';
         three.style.transform = 'rotate(45deg)';
       }, 2200);
       }
      // Menu Close
     else{
         isClicked = false;
         isClosed = true;
         mobileCollapseMenuCont.style.left = '100%';
       var animeMD = 0.3;
       for(var i = 0; i < mobileCollapseMenuTitle.length; i++){
           animeMD = animeMD + 0.2;
        mobileCollapseMenuTitle[i].style.left = '-100px';
        mobileCollapseMenuTitle[i].style.opacity = '0';
        mobileCollapseMenuTitle[i].style.transitionDelay = `${animeMD}s`;
       }
         // Stage One
         setTimeout(() =>{
         one.style.transform = 'rotate(0deg)';
         three.style.transform = 'rotate(0deg)';
         three.style.top = '140%';
         two.style.top = '140%';
         one.style.top = '140%';
         two.style.opacity = '1';
         two.style.transitionDelay = '0.2s';
         }, 200);
         // Stage Two
         setTimeout(() =>{
         one.style.top = '-80%';
         two.style.top = '20%';
         three.style.top = '70%';
         three.style.transition = '0.3s ease-in-out';
         two.style.transition = '0.4s ease-in-out';
         one.style.transition = '0.5s ease-in-out';
         }, 500);
         // Stage Three
         setTimeout(() =>{
         one.style.top = '0%';
         two.style.top = '50%';
         three.style.top = '100%';
         three.style.transform = 'translateY(-100%)';
         two.style.transform = 'translateY(-50%)';
       //  one.style.transform = 'translateY(0%)';
         }, 900);
       };
    });
    var mobileCollapseMenuCont = document.querySelector('.mobile-collapse-menu');
    var mobileCollapseMenuTitle = document.querySelectorAll('.mobile-collapse-menu h1');
    var mobileCollapseMenu = document.querySelectorAll('.mobile-collapse-menu div');
    var set1 = document.querySelectorAll('.set-1 p');
    var set2 = document.querySelectorAll('.set-2 p');
    var set3 = document.querySelectorAll('.set-3 p');
    var set4 = document.querySelectorAll('.set-4 p');
    
    // Navbar mobile and medium screen menu

    // First Choice
    mobileCollapseMenuTitle[0].addEventListener('click', ()=>{
        if(mobileCollapseMenu[0].style.height == '0px' || mobileCollapseMenu[0].style.height == ''){
            for(var z = 0; z < mobileCollapseMenu.length; z++){
                mobileCollapseMenu[z].style.height = '0';
               
            }
        mobileCollapseMenu[0].style.height = '150px';
        mobileCollapseMenu[0].style.transition = '0.5s ease-in-out';
        var animeD = 0.3;
        for(var i = 0; i < set1.length; i++){
            animeD = animeD + 0.1;
            set1[i].style.opacity = '1';
            set1[i].style.transition = '0.5s ease-in-out';
            set1[i].style.transitionDelay = `${animeD}s`;
        }
    } else if(mobileCollapseMenu[0].style.height == '150px'){
        mobileCollapseMenu[0].style.height = '0px';
        for(var z = 0; z < set1.length; z++){
            set1[z].style.opacity = '0';
            set1[z].style.transition = '0.1s';
        }
    }
    });
    // Second Choice
    mobileCollapseMenuTitle[1].addEventListener('click', ()=>{
        if(mobileCollapseMenu[1].style.height == '0px' || mobileCollapseMenu[1].style.height == ''){
            for(var z = 0; z < mobileCollapseMenu.length; z++){
                mobileCollapseMenu[z].style.height = '0';
         
            }
        mobileCollapseMenu[1].style.height = '150px';
        mobileCollapseMenu[1].style.transition = '0.5s ease-in-out';
        var animeD = 0.3;
        for(var i = 0; i < set2.length; i++){
            animeD = animeD + 0.1;
            set2[i].style.opacity = '1';
            set2[i].style.transition = '0.5s ease-in-out';
            set2[i].style.transitionDelay = `${animeD}s`;
        }
    } else if(mobileCollapseMenu[1].style.height == '150px'){
        mobileCollapseMenu[1].style.height = '0px';
        for(var z = 0; z < set1.length; z++){
            set2[z].style.opacity = '0';
            set2[z].style.transition = '0.1s';
        }
    }
    });
    // Third Choice
    mobileCollapseMenuTitle[2].addEventListener('click', ()=>{
        if(mobileCollapseMenu[2].style.height == '0px' || mobileCollapseMenu[2].style.height == ''){
            for(var z = 0; z < mobileCollapseMenu.length; z++){
                mobileCollapseMenu[z].style.height = '0';
              
            }
        mobileCollapseMenu[2].style.height = '150px';
        mobileCollapseMenu[2].style.transition = '0.5s ease-in-out';
        var animeD = 0.3;
        for(var i = 0; i < set3.length; i++){
            animeD = animeD + 0.1;
            set3[i].style.opacity = '1';
            set3[i].style.transition = '0.5s ease-in-out';
            set3[i].style.transitionDelay = `${animeD}s`;
        }
    } else if(mobileCollapseMenu[2].style.height == '150px'){
        mobileCollapseMenu[2].style.height = '0px';
        for(var z = 0; z < set3.length; z++){
            set3[z].style.opacity = '0';
            set3[z].style.transition = '0.1s';
        }
    }
    });
    // Fourth Choice
    mobileCollapseMenuTitle[3].addEventListener('click', ()=>{
        if(mobileCollapseMenu[3].style.height == '0px' || mobileCollapseMenu[3].style.height == ''){
            for(var z = 0; z < mobileCollapseMenu.length; z++){
                mobileCollapseMenu[z].style.height = '0';
             
            }
        mobileCollapseMenu[3].style.height = '150px';
        mobileCollapseMenu[3].style.transition = '0.5s ease-in-out';
        var animeD = 0.3;
        for(var i = 0; i < set4.length; i++){
            animeD = animeD + 0.1;
            set4[i].style.opacity = '1';
            set4[i].style.transition = '0.5s ease-in-out';
            set4[i].style.transitionDelay = `${animeD}s`;
        }
    } else if(mobileCollapseMenu[3].style.height == '150px'){
        mobileCollapseMenu[3].style.height = '0px';
        for(var z = 0; z < set4.length; z++){
            set4[z].style.opacity = '0';
            set4[z].style.transition = '0.1s';
        }
    }
    });
}