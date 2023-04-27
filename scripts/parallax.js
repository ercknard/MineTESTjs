let front_bg = document.getElementById('front-bg');
let mid_bg = document.getElementById('mid-bg');
//  let sun = document.getElementById('sun');
let cloudI = document.getElementById('cloudI');
let back_bg = document.getElementById('back-bg');

window.addEventListener('scroll',function(){
    let value = window.scrollY;
    front_bg.style.top = value * 0.20 + 'px';
    mid_bg.style.top = value * 0.30 + 'px';
  //   sun.style.top = value * .5 + 'px';
    cloudI.style.left = value * .5 + 'px';
    back_bg.style.top = value * 0.40 + 'px';
})