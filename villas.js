// *************************************************************************Première carousel
const carousel1 = document.querySelector(".carousel1");
const firstImg1 = carousel1.querySelectorAll("img")[0];
const arrowIcons1 = document.querySelectorAll("#left1, #right1");

let isDragStart1 = false;
let isDragging1 = false;
let prevPageX1;
let prevScrollLeft1;
let positionDiff1;
let arrowClicked1 = false;

/* Affiche/masque les flèches gauche/droite */
const showHideIcons1 = () => {
let scrollWidth1 = carousel1.scrollWidth - carousel1.clientWidth;
arrowIcons1[0].style.display = carousel1.scrollLeft == 0 ? "none" : "block";
arrowIcons1[1].style.display = carousel1.scrollLeft == scrollWidth1 ? "none" : "block";
};

/* Décale les images au clic sur les flèches */
arrowIcons1.forEach((icon) => {
icon.addEventListener("click", () => {
let firstImgWidth1 = firstImg1.clientWidth + 14;
carousel1.scrollLeft += icon.id == "left1" ? -firstImgWidth1 : firstImgWidth1;
showHideIcons1();
arrowClickHandler1();
});
});

/* Défilement automatique */
const autoScroll1 = () => {
if (arrowClicked1) {
return;
}
let firstImgWidth1 = firstImg1.clientWidth + 14;
carousel1.scrollLeft += firstImgWidth1;
showHideIcons1();
};

setInterval(autoScroll1, 5000);

/* Drag and drop */
const dragStart1 = (e) => {
isDragStart1 = true;
prevPageX1 = e.pageX || e.touches[0].pageX;
prevScrollLeft1 = carousel1.scrollLeft;
};

const dragging1 = (e) => {
if (!isDragStart1) return;
e.preventDefault();
isDragging1 = true;
carousel1.classList.add("dragging");
positionDiff1 = (e.pageX || e.touches[0].pageX) - prevPageX1;
carousel1.scrollLeft = prevScrollLeft1 - positionDiff1;
showHideIcons1();
};

const dragStop1 = () => {
isDragStart1 = false;
carousel1.classList.remove("dragging");
if (!isDragging1) return;
isDragging1 = false;
autoSlide1();
};

carousel1.addEventListener("mousedown", dragStart1);
carousel1.addEventListener("touchstart", dragStart1);

document.addEventListener("mousemove", dragging1);
carousel1.addEventListener("touchmove", dragging1);

document.addEventListener("mouseup", dragStop1);
carousel1.addEventListener("touchend", dragStop1);

// *********************************************************Deuxième carousel
const carousel2 = document.querySelector(".carousel2");
const firstImg2 = carousel2.querySelectorAll("img")[0];
const arrowIcons2 = document.querySelectorAll("#left2, #right2");

let isDragStart2 = false;
let isDragging2 = false;
let prevPageX2;
let prevScrollLeft2;
let positionDiff2;
let arrowClicked2 = false;

/* fait apparaitre la fleche de gauche */
const showHideIcons2 = () => {
let scrollWidth2 = carousel2.scrollWidth - carousel2.clientWidth;
arrowIcons2[0].style.display = carousel2.scrollLeft == 0 ? "none" : "block";
arrowIcons2[1].style.display = carousel2.scrollLeft == scrollWidth2 ? "none" : "block";
};

/* décalage de l'image au clic */
arrowIcons2.forEach((icon) => {
icon.addEventListener("click", () => {
let firstImgWidth2 = firstImg2.clientWidth + 14;
carousel2.scrollLeft += icon.id == "left2" ? -firstImgWidth2 : firstImgWidth2;
showHideIcons2();
arrowClickHandler2();
});
});

/* auto scroll */
const autoScroll2 = () => {
if (arrowClicked2) {
return;
}
let firstImgWidth2 = firstImg2.clientWidth + 14;
carousel2.scrollLeft += firstImgWidth2;
showHideIcons2();
};

setInterval(autoScroll2, 3000);

/* drag */
const dragStart2 = (e) => {
isDragStart2 = true;
prevPageX2 = e.pageX || e.touches[0].pageX;
prevScrollLeft2 = carousel2.scrollLeft;
};

const dragging2 = (e) => {
if (!isDragStart2) return;
e.preventDefault();
isDragging2 = true;
carousel2.classList.add("dragging");
positionDiff2 = (e.pageX || e.touches[0].pageX) - prevPageX2;
carousel2.scrollLeft = prevScrollLeft2 - positionDiff2;
showHideIcons2();
};

const dragStop2 = () => {
isDragStart2 = false;
carousel2.classList.remove("dragging");

if (!isDragging2) return;
isDragging2 = false;
autoSlide2();
};

carousel2.addEventListener("mousedown", dragStart2);
carousel2.addEventListener("touchstart", dragStart2);

document.addEventListener("mousemove", dragging2);
carousel2.addEventListener("touchmove", dragging2);

document.addEventListener("mouseup", dragStop2);
carousel2.addEventListener("touchend", dragging2);


// *******************************************************************************Troisième carousel
const carousel3 = document.querySelector(".carousel3");
const firstImg3 = carousel3.querySelectorAll("img")[0];
const arrowIcons3 = document.querySelectorAll("#left3, #right3");

let isDragStart3 = false;
let isDragging3 = false;
let prevPageX3;
let prevScrollLeft3;
let positionDiff3;
let arrowClicked3 = false;

/* fait apparaitre la fleche de gauche */
const showHideIcons3 = () => {
    let scrollWidth3 = carousel3.scrollWidth - carousel3.clientWidth;
    arrowIcons3[0].style.display = carousel3.scrollLeft == 0 ? "none" : "block";
    arrowIcons3[1].style.display = carousel3.scrollLeft == scrollWidth3 ? "none" : "block";
};

/* décalage de l'image au clic */
arrowIcons3.forEach((icon) => {
  icon.addEventListener("click", () => {
    let firstImgWidth3 = firstImg3.clientWidth + 14;
    carousel3.scrollLeft += icon.id == "left3" ? -firstImgWidth3 : firstImgWidth3;
    showHideIcons3();
    arrowClickHandler3();
  });
});

/* auto scroll */
const autoScroll3 = () => {
  if (arrowClicked3) {
    return;
  }
  let firstImgWidth3 = firstImg3.clientWidth + 14;
  carousel3.scrollLeft += firstImgWidth3;
  showHideIcons3();
};

setInterval(autoScroll3, 4000);

/* drag */
const dragStart3 = (e) => {
  isDragStart3 = true;
  prevPageX3 = e.pageX || e.touches[0].pageX;
  prevScrollLeft3 = carousel3.scrollLeft;
};

const dragging3 = (e) => {
  if (!isDragStart3) return;
  e.preventDefault();
  isDragging3 = true;
  carousel3.classList.add("dragging");
  positionDiff3 = (e.pageX || e.touches[0].pageX) - prevPageX3;
  carousel3.scrollLeft = prevScrollLeft3 - positionDiff3;
  showHideIcons3();
};

const dragStop3 = () => {
  isDragStart3 = false;
  carousel3.classList.remove("dragging");

  if (!isDragging3) return;
  isDragging3 = false;
  autoSlide3();
};

carousel3.addEventListener("mousedown", dragStart3);
carousel3.addEventListener("touchstart", dragStart3);

document.addEventListener("mousemove", dragging3);
carousel3.addEventListener("touchmove", dragging3);

document.addEventListener("mouseup", dragStop3);
carousel3.addEventListener("touchend", dragging3);


// *******************************************************************************Quatrième carousel
const carousel4 = document.querySelector(".carousel4");
const firstImg4 = carousel4.querySelectorAll("img")[0];
const arrowIcons4 = document.querySelectorAll("#left4, #right4");

let isDragStart4 = false;
let isDragging4 = false;
let prevPageX4;
let prevScrollLeft4;
let positionDiff4;
let arrowClicked4 = false;

/* fait apparaitre la fleche de gauche */
const showHideIcons4 = () => {
let scrollWidth4 = carousel4.scrollWidth - carousel4.clientWidth;
arrowIcons4[0].style.display = carousel4.scrollLeft == 0 ? "none" : "block";
arrowIcons4[1].style.display = carousel4.scrollLeft == scrollWidth4 ? "none" : "block";
};

/* décalage de l'image au clic */
arrowIcons4.forEach((icon) => {
icon.addEventListener("click", () => {
let firstImgWidth4 = firstImg4.clientWidth + 14;
carousel4.scrollLeft += icon.id == "left4" ? -firstImgWidth4 : firstImgWidth4;
showHideIcons4();
arrowClickHandler4();
});
});

/* auto scroll */
const autoScroll4 = () => {
if (arrowClicked4) {
return;
}
let firstImgWidth4 = firstImg4.clientWidth + 14;
carousel4.scrollLeft += firstImgWidth4;
showHideIcons4();
};

setInterval(autoScroll4, 5000);

/* drag */
const dragStart4 = (e) => {
isDragStart4 = true;
prevPageX4 = e.pageX || e.touches[0].pageX;
prevScrollLeft4 = carousel4.scrollLeft;
};

const dragging4 = (e) => {
if (!isDragStart4) return;
e.preventDefault();
isDragging4 = true;
carousel4.classList.add("dragging");
positionDiff4 = (e.pageX || e.touches[0].pageX) - prevPageX4;
carousel4.scrollLeft = prevScrollLeft4 - positionDiff4;
showHideIcons4();
};

const dragStop4 = () => {
isDragStart4 = false;
carousel4.classList.remove("dragging");

if (!isDragging4) return;
isDragging4 = false;
autoSlide4();
};

carousel4.addEventListener("mousedown", dragStart4);
carousel4.addEventListener("touchstart", dragStart4);

document.addEventListener("mousemove", dragging4);
carousel4.addEventListener("touchmove", dragging4);

document.addEventListener("mouseup", dragStop4);
carousel4.addEventListener("touchend", dragging4);


// *******************************************************************************Cinquième carousel
const carousel5 = document.querySelector(".carousel5");
const firstImg5 = carousel5.querySelectorAll("img")[0];
const arrowIcons5 = document.querySelectorAll("#left5, #right5");

let isDragStart5 = false;
let isDragging5 = false;
let prevPageX5;
let prevScrollLeft5;
let positionDiff5;
let arrowClicked5 = false;

/* fait apparaitre la fleche de gauche */
const showHideIcons5 = () => {
let scrollWidth5 = carousel5.scrollWidth - carousel5.clientWidth;
arrowIcons5[0].style.display = carousel5.scrollLeft == 0 ? "none" : "block";
arrowIcons5[1].style.display = carousel5.scrollLeft == scrollWidth5 ? "none" : "block";
};

/* décalage de l'image au clic */
arrowIcons5.forEach((icon) => {
icon.addEventListener("click", () => {
let firstImgWidth5 = firstImg5.clientWidth + 14;
carousel5.scrollLeft += icon.id == "left5" ? -firstImgWidth5 : firstImgWidth5;
showHideIcons5();
arrowClickHandler5();
});
});

/* auto scroll */
const autoScroll5 = () => {
if (arrowClicked5) {
return;
}
let firstImgWidth5 = firstImg5.clientWidth + 14;
carousel5.scrollLeft += firstImgWidth5;
showHideIcons5();
};

setInterval(autoScroll5, 3000);

/* drag */
const dragStart5 = (e) => {
isDragStart5 = true;
prevPageX5 = e.pageX || e.touches[0].pageX;
prevScrollLeft5 = carousel5.scrollLeft;
};

const dragging5 = (e) => {
if (!isDragStart5) return;
e.preventDefault();
isDragging5 = true;
carousel5.classList.add("dragging");
positionDiff5 = (e.pageX || e.touches[0].pageX) - prevPageX5;
carousel5.scrollLeft = prevScrollLeft5 - positionDiff5;
showHideIcons5();
};

const dragStop5 = () => {
isDragStart5 = false;
carousel5.classList.remove("dragging");

if (!isDragging5) return;
isDragging5 = false;
autoSlide5();
};

carousel5.addEventListener("mousedown", dragStart5);
carousel5.addEventListener("touchstart", dragStart5);

document.addEventListener("mousemove", dragging5);
carousel5.addEventListener("touchmove", dragging5);

document.addEventListener("mouseup", dragStop5);
carousel5.addEventListener("touchend", dragging5);



