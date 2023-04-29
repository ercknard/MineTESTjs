const typedTextSpan = document.querySelector(".typed-text");
    const cursorSpan = document.querySelector(".cursor");
    
    const textArray = ["SPACE STATION"];
    const typingDelay = 2;
    const erasingDelay = 200;
    const newTextDelay = 200; // Delay between current and next text
    let textArrayIndex = 0;
    let charIndex = 0;
    
    function type() {
      if (charIndex < textArray[textArrayIndex].length) {
        if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
      } 
      else {
        cursorSpan.classList.remove("typing");
          setTimeout(erase, newTextDelay);
      }
    }
    
    function erase() {
        if (charIndex > 0) {
        if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
        charIndex--;
        setTimeout(erase, erasingDelay);
      } 
      else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if(textArrayIndex>=textArray.length) textArrayIndex=0;
        setTimeout(type, typingDelay + 1100);
      }
    }

    document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
      if(textArray.length) setTimeout(type, newTextDelay + 250);
    }); 

    







// const typedTextSpan1 = document.querySelector(".typed-text-1");
//     const cursorSpan1 = document.querySelector(".cursor-1");
    
//     const textArray1 = ["CRYPTECHTEST WORLD"];
//     const typingDelay1 = 2;
//     const erasingDelay1 = 200;
//     const newTextDelay1 = 200; // Delay between current and next text
//     let textArrayIndex1 = 0;
//     let charIndex1 = 0;
    
//     function type() {
//       if (charIndex1 < textArray[textArrayIndex1].length) {
//         if(!cursorSpan1.classList.contains("typing-1")) cursorSpan1.classList.add("typing-1");
//         typedTextSpan1.textContent += textArray[textArrayIndex1].charAt(charIndex1);
//         charIndex1++;
//         setTimeout(type, typingDelay1);
//       } 
//       else {
//         cursorSpan1.classList.remove("typing-1");
//           setTimeout(erase, newTextDelay1);
//       }
//     }
    
//     function erase() {
//         if (charIndex1 > 0) {
//         if(!cursorSpan1.classList.contains("typing-1")) cursorSpan1.classList.add("typing-1");
//         typedTextSpan1.textContent = textArray[textArrayIndex1].substring(0, charIndex1-1);
//         charIndex1--;
//         setTimeout(erase, erasingDelay1);
//       } 
//       else {
//         cursorSpan1.classList.remove("typing-1");
//         textArrayIndex1++;
//         if(textArrayIndex1>=textArray.length) textArrayIndex1=0;
//         setTimeout(type, typingDelay1 + 1100);
//       }
//     }

//     document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
//       if(textArray.length) setTimeout(type, newTextDelay1 + 250);
//     }); 