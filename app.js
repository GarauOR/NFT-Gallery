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
        price.textContent = `${priceArr[i]} Eth`;
    }
});

leftSlide.addEventListener("click", () => {
    if(i>0){
        i--;
        img.src = imgArr[i];
        descr.textContent = descrArr[i];
        price.textContent = `${priceArr[i]} Eth`;
    }
});
/* SLIDER END */

/* ITEM COUNTER START */
let countIdx;
if(localStorage["index"]){
    countIdx = localStorage.getItem("index");
    countIdx = Number(countIdx);
}
else {countIdx = 0;}
let counter = document.querySelector("#counter");
counter.textContent = countIdx;
/* ITEM COUNTER END */

/* LOCAL STORAGE START */
let nameArr = ["Red storm", "Blue Tempest", "Green Spark"];
let artistArr = ["Luca Garau", "Luca Garau", "Luca Garau"];
let cartArr = [];
const addCart = document.querySelector("#descr button");
addCart.addEventListener("click", () => {
    if(localStorage["shopping"]){
        let retrieving = localStorage["shopping"];
        cartArr = JSON.parse(retrieving);
    }
    let itemCart = {
        image: imgArr[i],
        name: nameArr[i],
        artist: artistArr[i],
        price: priceArr[i]
    };
    cartArr.push(itemCart);
    let stringifiedArr = JSON.stringify(cartArr);
    localStorage.setItem("shopping",stringifiedArr);
    countIdx += 1;
    counter.textContent = countIdx;
});
/* LOCAL STORAGE END */