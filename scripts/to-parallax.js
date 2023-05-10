// (function() {
//     // Add event listener
//     document.addEventListener("mousemove", parallax);
//     const elem = document.querySelector("#parallax");
//     // Magic happens here
//     function parallax(e) {
//         let _w = window.innerWidth/2;
//         let _h = window.innerHeight/2;
//         let _mouseX = e.clientX;
//         let _mouseY = e.clientY;
//         let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
//         let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
//         let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
//         let x = `${_depth3}, ${_depth2}, ${_depth1}`;
//         console.log(x);
//         elem.style.backgroundPosition = x;
//     }

// })();

// window.addEventListener('scroll', function() {
// 	parallax(window.pageYOffset / 440);
// });

// window.addEventListener('touchmove', function() {
// 	parallax(window.pageYOffset / 440);
// });

// window.addEventListener('gesturechange', function() {
// 	parallax(window.pageYOffset / 440);
// });

// document.addEventListener('scroll', function() {
// 	parallax(window.pageYOffset / 440);
// });

// document.addEventListener('touchmove', function() {
// 	parallax(window.pageYOffset / 440);
// });

// document.addEventListener('gesturechange', function() {
// 	parallax(window.pageYOffset / 440);
// });

// var e = document.getElementsByClassName('parallax');
// var i = 0;
// var l = e.length;
// // var o = []; // offset for each element
// var v = [];
// // var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
// var path = 'polygon(0 0, 100% 0%, 50% 100%, 0% 100%)';

// // function position() {
// //	for (i = 0; i < l; i++) {
// //		o[i] = e[i].getBoundingClientRect().top + window.pageYOffset;
// //		console.log("class value: " + o[i]);
// //	}
// //}

// //position();

// function parallax(scroll) {
// 	// console.log("Scrolled: " + scroll);
// 	for (i = 0; i < l; i++) {
// 		v[i] = e[i].className.replace(/[^-\d]+([-\d]+)/gm, "$1");
// 		// console.log("class value: " + v);
// 		e[i].style.top = (scroll * v[i]) + "%";

// 		// polygon(0 0, 100% 0%, 50% 100%, 0% 100%);
// 		var path = 'polygon(0% 0%, ' + (90 - (scroll * 200)) + '% 0%, ' + (70 - (scroll * 200)) + '% 100%, 0% 100%)';
// 		if (i % 2 > 0.5) {
// 			e[i].style.webkitClipPath = path;
// 			e[i].style.clipPath = path;
// 			e[i].style.webkitFilter = 'blur(' + (scroll * 20) + 'px) brightness(' + (0.9 - (scroll * 0.9)) + ')';
// 			e[i].style.blur = 'blur(' + (scroll * 20) + 'px) brightness(' + (0.9 - (scroll * 0.9)) + ')';
// 		}
// 	}
// };

// const $card = document.querySelector('.card');
// let bounds;

// function rotateToMouse(e) {
//   const mouseX = e.clientX;
//   const mouseY = e.clientY;
//   const leftX = mouseX - bounds.x;
//   const topY = mouseY - bounds.y;
//   const center = {
//     x: leftX - bounds.width / 2,
//     y: topY - bounds.height / 2
//   }
//   const distance = Math.sqrt(center.x**2 + center.y**2);
  
//   $card.style.transform = `
//     scale3d(1.07, 1.07, 1.07)
//     rotate3d(
//       ${center.y / 100},
//       ${-center.x / 100},
//       0,
//       ${Math.log(distance)* 2}deg
//     )
//   `;
  
//   $card.querySelector('.glow').style.backgroundImage = `
//     radial-gradient(
//       circle at
//       ${center.x * 2 + bounds.width/2}px
//       ${center.y * 2 + bounds.height/2}px,
//       #ffffff55,
//       #0000000f
//     )
//   `;
// }

// $card.addEventListener('mouseenter', () => {
//   bounds = $card.getBoundingClientRect();
//   document.addEventListener('mousemove', rotateToMouse);
// });

// $card.addEventListener('mouseleave', () => {
//   document.removeEventListener('mousemove', rotateToMouse);
//   $card.style.transform = '';
//   $card.style.background = '';
// });