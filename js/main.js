var ItemAuction = (function () {
    function ItemAuction() {
    }
    return ItemAuction;
}());
window.onload = function () {
    var addBtn = document.querySelector("input[type=button]");
    addBtn.onclick = addItem;
};
function addItem() {
    console.log("Add video game was called");
    if (isAllDataValid()) {
        var game = getAuction();
        displayItem(game);
    }
}
function getById(id) {
    return document.getElementById(id);
}
function getAuction() {
    var Item = new ItemAuction();
    var titleInput = getById("title");
    Item.title = titleInput.value;
    var priceInput = getById("price");
    Item.Price = parseFloat(priceInput.value);
    var bindItem = getById("Bind");
    Item.isBindItem = bindItem.checked;
    console.log(Item);
    return Item;
}
function displayItem(myGame) {
    var displayDiv = getById("display");
    var ItemHeading = document.createElement("h2");
    ItemHeading.innerText = myGame.title;
    var itemInfo = document.createElement("p");
    var bindItemInfo = "";
    if (myGame.isBindItem) {
        bindItemInfo = "This is bind once it traded.";
    }
    else {
        bindItemInfo = "It is not a bind Item!";
    }
    itemInfo.innerText = myGame.title + " has a Option of " + myGame.Option + ". It costs $" + myGame.Price.toFixed(2) + ". " + bindItemInfo;
    displayDiv.appendChild(ItemHeading);
    displayDiv.appendChild(itemInfo);
}
function isAllDataValid() {
    return true;
}
