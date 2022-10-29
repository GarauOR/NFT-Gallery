//BURGER MENU START
const burgerMenu = document.querySelector("#burgerMenu");
const menu = document.querySelector(".menu");

burgerMenu.addEventListener("click", () => {
    menu.classList.toggle("toggleMenu");
});
//BURGER MENU END

/* SLIDER START */
const rightSlide = document.querySelector("#rightSlide");
const leftSlide = document.querySelector("#leftSlide");
let imgArr = ["img/nft1.bmp", "img/nft2.bmp", "img/nft3.bmp"];
let descrArr = ["Beautiful, passionate Red!", "Intense, dreaming Blue", "Wild freedom, Green"];
let priceArr = [10, 0.578, 2.32];

const img = document.querySelector("#slider img");
const descr = document.querySelector("#descr p");
const price = document.querySelector("#price");
let i=0;
img.src = imgArr[i];
descr.textContent = descrArr[i];
price.textContent = `${priceArr[i]} Eth`;

rightSlide.addEventListener("click", () => {
    if(i<(imgArr.length-1)){
        i++;
        img.src = imgArr[i];
        descr.textContent = descrArr[i];
        price.textContent = priceArr[i];
    }
});

leftSlide.addEventListener("click", () => {
    if(i>0){
        i--;
        img.src = imgArr[i];
        descr.textContent = descrArr[i];
        price.textContent = priceArr[i];
    }
});
/* SLIDER END */

/* SESSION STORAGE START */
/* SESSION STORAGE END */