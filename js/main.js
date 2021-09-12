// var lightboxConatainer= document.getElementById("lightboxConatainer");
// var lightboxItem= document.getElementById("lightboxItem");
// var prev=document.getElementById("prev");
// var closei=document.getElementById("close");
// var next=document.getElementById("next");
// var imgs=Array.from(document.querySelectorAll("img"));
// var currentIndex=0;

// for (let i = 0; i < imgs.length; i++) {
//     imgs[i].addEventListener("click",function(e){
//         lightboxConatainer.style.display="flex";
//         lightboxItem.style.backgroundImage=`url(${e.target.src})`;
//         var currentIndex=imgs.indexOf(e.target)
//     })
// }
// //----------------close---------------------
// closei.addEventListener("click",closeSlider)
// function closeSlider()
// {
//     lightboxConatainer.style.display="none";

// }
// //----------------close---------------------
// //----------------next---------------------
// next.addEventListener("click",nextSlide)
// function nextSlide()
// {
//     currentIndex++;
//     if (currentIndex==imgs.length) {
//         currentIndex=0;
//     }
//     var imgSrc=imgs[currentIndex].src;
//     lightboxItem.style.backgroundImage=`url(${imgSrc})`;
// }
// //----------------next---------------------
// //----------------prev---------------------

// prev.addEventListener("click",prevSlide)

// function prevSlide()
// {
//     currentIndex--;
//     if (currentIndex<0) {
//         currentIndex=imgs.length-1;
//     }
//     var imgSrc=imgs[currentIndex].src;
//     lightboxItem.style.backgroundImage=`url(${imgSrc})`;
// }
// //----------------prev---------------------
// //----------------keyboard---------------------

// document.addEventListener("keydown",function(e){
//    if (e.keyCode==27) {
//     closeSlider();
//    }
//    else if (e.keyCode==39 || e.keyCode==38) {
//     nextSlide();
//    }
//    else if (e.keyCode==37 || e.keyCode==40) {
//     prevSlide();
//    }
// })
// //----------------keyboard---------------------
// lightboxConatainer.addEventListener("click",function(e){
//     if(e.target!=lightboxItem && e.target!=prev && e.target!=next) {
//         closeSlider();
//     }
// })

// for (let i = 0; i < imgs.length; i++) {
//     imgs[i].addEventListener('click',function (e) {
//         lightboxConatainer.style.display='flex';
//         lightboxItem.style.backgroundImage=`url(${imgs[i].src})`
//         currentIndex=imgs.indexOf(imgs[i]);
//     })
// }

// function closeSlider() {
//     lightboxConatainer.style.display='none';
// }
// closei.addEventListener('click',closeSlider);

// function nextSlide() {
//     currentIndex++;
//     if (currentIndex==imgs.length) {
//         currentIndex=0;
//     }
//     lightboxItem.style.backgroundImage=`url(${imgs[currentIndex].src})`

// }
// next.addEventListener('click',nextSlide);

// function prevSlide() {
//     currentIndex--;
//     if (currentIndex<0) {
//         currentIndex=imgs.length-1;
//     }
//     lightboxItem.style.backgroundImage=`url(${imgs[currentIndex].src})`

// }
// prev.addEventListener('click',prevSlide);

// lightboxConatainer.onclick=function(e)
// {
//     if(e.target !=lightboxItem &&  e.target !=next && e.target !=prev){
//         lightboxConatainer.style.display='none';
//     }
// }

// document.addEventListener('keydown',function(e){
//     if(e.keyCode==27) {
//         closeSlider();
//     } else if (e.keyCode==39 || e.keyCode==38) {
//         nextSlide();
//     }
//     else if(e.keyCode==37 || e.keyCode==40) {
//         prevSlide();
//     }
// })

// let lightboxConatainer = document.getElementById("lightboxConatainer");
// let lightboxItem = document.getElementById("lightboxItem");
// let prev = document.getElementById("prev");
// let closei = document.getElementById("close");
// let next = document.getElementById("next");
// let imgs = Array.from(document.querySelectorAll("img"));
// let currentIndex = 0;

// for (let i = 0; i < imgs.length; i++) {
//   imgs[i].onclick = function (e) {
//     lightboxConatainer.style.display = "flex";
//     lightboxItem.style.backgroundImage = `url(${e.target.src})`;
//     currentIndex = imgs.indexOf(e.target);
//   };
// }
// closei.onclick = closeSlider;
// function closeSlider() {
//   lightboxConatainer.style.display = "none";
// }

// next.onclick = nextSlide;
// function nextSlide() {
//   currentIndex++;
//   if (currentIndex == imgs.length) {
//     currentIndex = 0;
//   }
//   let imgSrc = imgs[currentIndex].src;
//   lightboxItem.style.backgroundImage = `url(${imgSrc})`;
// }

// prev.onclick = prevSlide;
// function prevSlide() {
//   currentIndex--;
//   if (currentIndex < 0) {
//     currentIndex = imgs.length - 1;
//   }
//   let imgSrc = imgs[currentIndex].src;
//   lightboxItem.style.backgroundImage = `url(${imgSrc})`;
// }

// document.onkeyup = function (e) {
//   if (e.keyCode == 27) {
//     closeSlider();
//   } else if (e.keyCode == 39 || e.keyCode == 38) {
//     nextSlide();
//   } else if (e.keyCode == 37 || e.keyCode == 40) {
//     prevSlide();
//   }
// };

// lightboxConatainer.onclick = function (e) {
//   if (e.target !== lightboxItem && e.target !== prev && e.target !== next) {
//     closeSlider();
//   }
// };

let lightboxConatainer = document.getElementById("lightboxConatainer");
let lightboxItem = document.getElementById("lightboxItem");
let prev = document.getElementById("prev");
let closei = document.getElementById("close");
let next = document.getElementById("next");
let imgs = Array.from(document.querySelectorAll("img"));
let currentIndex = 0;

for (let i = 0; i < imgs.length; i++) {
  imgs[i].onclick = function (e) {
    lightboxConatainer.style.display = "flex";
    lightboxItem.style.backgroundImage = `url(${e.target.src})`;
    currentIndex = imgs.indexOf(e.target);
  };
}

closei.onclick = closeSlider;
function closeSlider() {
  lightboxConatainer.style.display = "none";
}

next.onclick = nextSlide;
function nextSlide() {
  currentIndex++;
  if (currentIndex == imgs.length) {
    currentIndex = 0;
  }
  let imgSrc = imgs[currentIndex].src;
  lightboxItem.style.backgroundImage = `url(${imgSrc})`;
}

prev.onclick = prevSlide;
function prevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = imgs.length - 1;
  }
  let imgSrc = imgs[currentIndex].src;
  lightboxItem.style.backgroundImage = `url(${imgSrc})`;
}

document.onkeyup = function (e) {
  if (e.keyCode == 27) {
    closeSlider();
  } else if (e.keyCode == 39 || e.keyCode == 38) {
    nextSlide();
  } else if (e.keyCode == 37 || e.keyCode == 40) {
    prevSlide();
  }
};

lightboxConatainer.onclick = function (e) {
  if (e.target !== lightboxItem && e.target !== next && e.target !== prev) {
    closeSlider();
  }
};
