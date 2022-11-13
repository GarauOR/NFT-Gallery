//BURGER MENU START
const burgerMenu = document.querySelector("#burgerMenu");
const menu = document.querySelector(".menu");

burgerMenu.addEventListener("click", () => {
    menu.classList.toggle("toggleMenu");
});
//BURGER MENU END

/* INITIALIZING NFTARRAY START */
let nftArr = [{
    image: "https://www.nftculture.com/wp-content/uploads/2021/08/60f5f85aa11d21c6d93034fd_oni-012-1024x1024.png",
    descr: "Masked Blonde Futuristic Punk, Yellow Eyes",
    price: 10,
    name: "Future-Punk 1047",
    artist: "John Doe",
    }, {
    image: "https://i.redd.it/jsb0qmqvswx61.jpg",
    descr: "Cyberpunk Netrunner Connection NFT",
    price: 0.578,
    name: "Netrunner Connection",
    artist: "Cyberpunk",
    }, {
    image: "https://www.cudedesign.co.uk/wp-content/uploads/2021/06/How-To-Lauch-Promote-Your-NFT-Featured-Image-Cude-Design.jpg",
    descr: "Modern World is Glitched",
    price: 2.32,   
    name: "Glitch",
    artist: "Jane Doe", 
    }];
/* INITIALIZING NFTARRAY END */

/* SLIDER START */
const rightSlide = document.querySelector("#rightSlide");
const leftSlide = document.querySelector("#leftSlide");
const img = document.querySelector("#slider img");
const descr = document.querySelector("#descr p");
const price = document.querySelector("#price");

let sliding = (i) => {
    img.src = nftArr[i].image;
    descr.textContent = nftArr[i].descr;
    price.textContent = `${nftArr[i].price} Eth`;
};

let i=0;
sliding(i);

rightSlide.addEventListener("click", () => {
    if(i<(nftArr.length-1)){
        i++;
        sliding(i);
    }
});

leftSlide.addEventListener("click", () => {
    if(i>0){
        i--;
        sliding(i);
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
let cartArr = [];
const addCart = document.querySelector("#descr button");

addCart.addEventListener("click", () => {
    if(localStorage["shopping"]){
        let retrieving = localStorage["shopping"];
        cartArr = JSON.parse(retrieving);
    }

    //UNIQUE ITEMS START
    let unique = (objArr) => {
        let j = 0;
        objArr.forEach((item) => {
            if(item.name == nftArr[i].name){
                j++;
            }
        });
        return j
    };
    //console.log(unique(cartArr));
    if (unique(cartArr)<1){
        cartArr.push(nftArr[i]);
        countIdx += 1;
    }
    //UNIQUE ITEMS END
    let stringifiedArr = JSON.stringify(cartArr);
    localStorage.setItem("shopping",stringifiedArr);    
    counter.textContent = countIdx;
});
/* LOCAL STORAGE END */

/* CONVERTER START */
let pounds = document.querySelector("#pounds");
let eths = document.querySelector("#ethereum");

pounds.addEventListener("keyup", () => {
    if(pounds.value>0){
        eths.value = pounds.value / 1363.29;
    }
    else {eths.value = "none"}
});

eths.addEventListener("keyup", () => {
    if(eths.value>0){
        pounds.value = eths.value * 1363.29;
    }
    else {pounds.value = "none"}
});
/* CONVERTER END */

/* NEWSFEED START */
//DECLARING
let newsArr = [
    {image: "https://insidebitcoins.com/wp-content/uploads/2022/11/TANU-3.png",
    para: "TANU (Treasure Area Needs U) Project NFTs have recorded a sharp rise in price since last Friday. The price average for the NFTs has risen from about $15K on Friday to about $152K on Monday, an 8x increase...",
    title: "TANU NFT Price is Pumping",
    dot: document.querySelector("#dot1"),},
    {image: "https://th.bing.com/th/id/OIP.9L4cXbo452m276-Y7EAVGQHaFd?pid=ImgDet&rs=1",
    para: "The Bored Ape Yacht Club (BAYC) is an exclusive community for holders of the ape and mutant themed NFT collections on Ethereum's blockchain. Commonly referred to as the Bored Apes, only 10,000 generative art....",
    title: "Bored Ape Sold For $114.000",
    dot: document.querySelector("#dot2"),},
    {image: "https://4.bp.blogspot.com/-S0DVw_7mr9E/VpGzpa1i3cI/AAAAAAAAK7U/GijN7pCvlzg/s1600/Dewar%2527s%2B12%2Byear%2BBlended%2BScotch%2BWhisky.JPG",
    para: "DEWAR’S® Scotch Whisky, the world’s most awarded blended Scotch whisky, has teamed up with BlockBar.com, the world’s first direct to consumer NFT marketplace for luxury wine and spirits, to release DEWAR’S...",
    title: "DEWAR'S Scotch Launches NFT",
    dot: document.querySelector("#dot3"),}
];
const imgNews = document.querySelector("#newsBox img");
const paraNews = document.querySelector("#newsBox p");
const titleNews = document.querySelector("#newsBox h3");
let newsValue = () => {
    imgNews.src = newsArr[idx].image;
    titleNews.textContent = newsArr[idx].title;
    paraNews.textContent = newsArr[idx].para;
    newsArr[idx].dot.style.backgroundColor = ("#e2dddf");
    idx++;
};
let idx = 0;

newsValue();

//AUTOMATED SLIDE NEWS
let assignNews = () => {
    if(idx==newsArr.length){
        idx=0
        newsArr[newsArr.length-1].dot.style.backgroundColor = ("transparent");
        newsValue();
    }
    else{
    newsArr[idx-1].dot.style.backgroundColor = ("transparent");
    newsValue();
    }
};  
setInterval(assignNews, 8000);
/* NEWSFEED END */