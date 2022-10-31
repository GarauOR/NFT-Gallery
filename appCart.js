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
if(0<cartArr.length){
    empty.style.display = "none";
    cartArr.forEach((item) => {
        //DIV
        const listItem = document.createElement("div");
        listItem.classList.add("listItem");
        listItem.setAttribute("id", item.id);
        listCont.appendChild(listItem);
        deleteArr.push(item.id);

        //img
        const itemImg = document.createElement("img");
        itemImg.src = item.image;
        itemImg.classList.add("itemImg");
        listItem.appendChild(itemImg);

        //name
        const itemName = document.createElement("h3");
        itemName.textContent = `The ${item.name} by ${item.artist}`;
        itemName.classList.add("itemName");
        listItem.appendChild(itemName);

        //price&delete
        //cont
        const PnDCont = document.createElement("div");
        PnDCont.classList.add("PnDCont");
        listItem.appendChild(PnDCont);
        //price
        const itemPrice = document.createElement("h3");
        itemPrice.textContent = `${item.price} Eth`;
        itemPrice.classList.add("itemPrice");
        PnDCont.appendChild(itemPrice);
        //delete
        const itemDelete = document.createElement("button");
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
if(0<cartArr.length){
cancelAll.addEventListener("click", () => {
    localStorage.clear();
    window.location = "cart.html";
});
}
/* REMOVE ALL END */

/* REMOVE ITEM START */
let butRefArr = [];
let stringifiedArr;
if(0<cartArr.length){
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
        if(cartArr.length){
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

/* DATA START */
/* DATA END */