//BURGER MENU START
const burgerMenu = document.querySelector("#burgerMenu");
const menu = document.querySelector(".menu");

burgerMenu.addEventListener("click", () => {
    menu.classList.toggle("toggleMenu");
});
//BURGER MENU END

/* INITIALIZING NFTARRAY START */
let nftArr = [{
    image: "img/nft1.bmp",
    descr: "Beautiful, passionate Red!",
    price: 10,
    name: "Red storm",
    artist: "Luca Garau",
    }, {
    image: "img/nft2.bmp",
    descr: "Intense, dreaming Blue",
    price: 0.578,
    name: "Blue Tempest",
    artist: "Luca Garau",
    }, {
    image: "img/nft3.bmp",
    descr: "Wild freedom, Green",
    price: 2.32,   
    name: "Green Spark",
    artist: "Luca Garau", 
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
    console.log(unique(cartArr));
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
    {image: "https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/H8WuRINimqur8ud/finance-abstract-financial-background_sr2reankl_thumbnail-1080_01.png",
    para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil minima eos similique adipisci recusandae? Deserunt, voluptas! Saepe provident reprehenderit eius itaque, quis totam, molestiae culpa sit earum distinctio at aperiam?",
    title: "Title 1",
    dot: document.querySelector("#dot1"),},
    {image: "https://th.bing.com/th/id/R.e8e94cfb7eb1113e0b3333f25192b098?rik=fqTHOJ%2br2OiBAw&pid=ImgRaw&r=0",
    para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil minima eos similique adipisci recusandae? Deserunt, voluptas! Saepe provident reprehenderit eius itaque, quis totam, molestiae culpa sit earum distinctio at aperiam?",
    title: "Title 2",
    dot: document.querySelector("#dot2"),},
    {image: "https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/H8WuRINimqur8ud/global-economy-finance-background_b86pzpyq__d_thumbnail-1080_01.png",
    para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil minima eos similique adipisci recusandae? Deserunt, voluptas! Saepe provident reprehenderit eius itaque, quis totam, molestiae culpa sit earum distinctio at aperiam?",
    title: "Title 3",
    dot: document.querySelector("#dot3"),}
];
const imgNews = document.querySelector("#newsBox img");
const paraNews = document.querySelector("#newsBox p");
const titleNews = document.querySelector("#newsBox h3");
let newsValue = () => {
    imgNews.src = newsArr[idx].image;
    titleNews.textContent = newsArr[idx].title;
    paraNews.textContent = newsArr[idx].para;
    newsArr[idx].dot.style.backgroundColor = ("white");
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