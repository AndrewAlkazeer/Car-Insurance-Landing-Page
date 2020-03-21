window.onload = () =>{
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
  };