/* LOADING DATA START */
let cartArr = [];
if(localStorage["shopping"]){
    const retrieving = localStorage["shopping"];
    cartArr = JSON.parse(retrieving);
}
if(cartArr.length){
    let countIdx = cartArr.length;
    localStorage.setItem("index", countIdx);
}
/* LOADING DATA END */

/* ADDING ITEM ID START */
cartArr.forEach((item, i) => {
    item.id = `N${i}`;
});
/* ADDING ITEM ID END */

/* BURGERMENU START */
const burgerMenu = document.querySelector("#burgerMenu");
const menu = document.querySelector(".menu");

burgerMenu.addEventListener("click", () => {
    menu.classList.toggle("toggleMenu");
});
/* BURGERMENU END */

/* LIST BUILDING START */
const listCont = document.querySelector("#listCont");
const empty = document.querySelector("#empty");
let tot = 0;
let deleteArr = [];


if(cartArr.length>0){
    empty.style.display = "none";
    cartArr.forEach((item) => {
        //INITIALISING
        const listItem = document.createElement("div");
        const itemImg = document.createElement("img");
        const itemName = document.createElement("h3");
        const PnDCont = document.createElement("div");
        const itemPrice = document.createElement("h3");
        const itemDelete = document.createElement("button");

        //DIV
        listItem.classList.add("listItem");
        listItem.setAttribute("id", item.id);
        listCont.appendChild(listItem);
        deleteArr.push(item.id);

        //img
        itemImg.src = item.image;
        itemImg.classList.add("itemImg");
        listItem.appendChild(itemImg);

        //name
        itemName.textContent = `The ${item.name} by ${item.artist}`;
        itemName.classList.add("itemName");
        listItem.appendChild(itemName);

        //price&delete
        //cont
        PnDCont.classList.add("PnDCont");
        listItem.appendChild(PnDCont);
        //price
        itemPrice.textContent = `${item.price} Eth`;
        itemPrice.classList.add("itemPrice");
        PnDCont.appendChild(itemPrice);
        //delete
        itemDelete.textContent = "Remove";
        itemDelete.classList.add("itemDelete");
        itemDelete.setAttribute("id", item.id);
        PnDCont.appendChild(itemDelete);

        tot += item.price;
    });
}
else {
    empty.style.display = "block"; 
}
/* LIST BUILDING END */

/* TOTAL START */
if(0<cartArr.length){
    //Clear Cart
    const clear = document.createElement("button");
    clear.textContent = "Remove All";
    clear.classList.add("checkOut");
    totCont.appendChild(clear);

    //Checkout
    const checkOut = document.createElement("button");
    checkOut.textContent = "Check-out";
    checkOut.classList.add("checkOut");
    totCont.appendChild(checkOut);

    //Spacer
    const totSpace = document.createElement("span");
    totSpace.classList.add("space");
    totCont.appendChild(totSpace);

    //Total display
    const totPrint = document.createElement("h3");
    totPrint.textContent = `Total: ${tot} Eth`;
    totPrint.classList.add("itemPrice");
    totCont.appendChild(totPrint);

    //Border line
    totCont.style.border = "0px";
    totCont.style.borderTop = "1px";
    totCont.style.borderStyle = "solid";
    totCont.style.borderColor = "lightgray";
}
/* TOTAL END */
        
/* REMOVE ALL START */
let cancelAll = document.querySelector(".checkOut");
if(cartArr.length>0){
cancelAll.addEventListener("click", () => {
    localStorage.clear();
    window.location = "cart.html";
});
}
/* REMOVE ALL END */

/* REMOVE ITEM START */
let butRefArr = [];
let stringifiedArr;
if(cartArr.length>0){
    deleteArr.forEach((item) => {
        butRefArr.push(document.querySelector(`#${item}`).lastChild);
});
deleteArr.forEach((item, i) => {
    butRefArr[i].addEventListener("click", () => {
        let x = document.getElementById(item);
        x.style.display = "none";

        cartArr.splice(i, 1);
        butRefArr.splice(i, 1);
        deleteArr.splice(i, 1);
        if(cartArr.length>=0){
            let countIdx = cartArr.length;
            localStorage.setItem("index", countIdx);
        }

        stringifiedArr = JSON.stringify(cartArr);
        localStorage.setItem("shopping",stringifiedArr);
        window.location = "cart.html";

    });
});
}
/* REMOVE ITEM END */

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

//AUTOMATED SLIDE NEWS
newsValue();
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