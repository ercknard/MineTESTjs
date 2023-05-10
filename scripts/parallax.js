let front_bg = document.getElementById('front-bg');
let mid_bg = document.getElementById('mid-bg');
let sun = document.getElementById('sun');
let cloudI = document.getElementById('cloudI');
let back_bg = document.getElementById('back-bg');
let leftsky = document.getElementById('left-valve-sky');
let rightsky = document.getElementById('right-valve-sky');
let leftadmin = document.getElementById('left-valve-admin');
let rightadmin = document.getElementById('right-valve-admin');
let left = document.getElementById('left-valve');
let right = document.getElementById('right-valve');
// let space = document.getElementById('op-space');
// let world = document.getElementById('op-world');
// let admin = document.getElementById('op-admin');
// let pepe = document.getElementById('pepe-landing');

window.addEventListener('scroll',function(){
    let value = window.scrollY;
    front_bg.style.top = value * 0.40 + 'px';
    mid_bg.style.top = value * 0.60 + 'px';
    sun.style.top = value * .4 + 'px';
    cloudI.style.left = value * .5 + 'px';
    back_bg.style.top = value * 0.80 + 'px';
    leftsky.style.left = value * -.5 + 'px';
    rightsky.style.left = value * .5 + 'px';
    left.style.left = value * -.25 + 'px';
    right.style.left = value * .25 + 'px';
    leftadmin.style.left = value * -.15 + 'px';
    rightadmin.style.left = value * .15 + 'px';
    // space.style.left = value * 0.40 + 'px';
    // world.style.top = value * 0.40 + 'px';
    // admin.style.top = value * 0.40 + 'px';
    // pepe.style.top = value * .65 + 'px';
    console.log(left.style.left);
})