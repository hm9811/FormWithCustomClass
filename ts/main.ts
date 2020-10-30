class ItemAuction{
    title:string;
    Price:number;
    Option:string;
    isBindItem:boolean;
}

//test code

// let myGame = new VideoGame();
// myGame.title = "Mario";
// myGame.Option = "Cool Down %";
// myGame.isDigitalOnly = true;

window.onload = function() {
    let addBtn = <HTMLElement>document.querySelector("input[type=button]");
    addBtn.onclick = addItem;
}

function addItem(){
    console.log("Add video game was called");

    if(isAllDataValid()){
        let game = getAuction();
        displayItem(game);
    }
}

function getById(id:string){
    return <HTMLInputElement>document.getElementById(id);
}

/**
*gets all game data from the form
*and returns it in a videogame object
*/
function getAuction():ItemAuction {
    //TODO: Create Game
    let Item = new ItemAuction();
    //TODO: Populate with data from the form
    let titleInput = getById("title");
    Item.title = titleInput.value;

    let priceInput = getById("price");
    Item.Price = parseFloat(priceInput.value);



    //TODO: Return Game

    let bindItem = <HTMLInputElement>getById("Bind");
    Item.isBindItem = bindItem.checked;
    
    // if(digitalOnly.checked){
    //     game.isDigitalOnly = true;
    // }

    // else{
    //     game.isDigitalOnly = false;
    // }
    console.log(Item);
    return Item;
}

function displayItem(myGame:ItemAuction):void {
    //TODO: Display video game below the form
    let displayDiv = getById("display");

    //Create <h2> with the game title
    let ItemHeading = document.createElement("h2");
    ItemHeading.innerText = myGame.title;

    let itemInfo = document.createElement("p");
    let bindItemInfo = "";
    if(myGame.isBindItem){
        bindItemInfo = "This is bind once it traded.";
    }
    else{
        bindItemInfo = "It is not a bind Item!"
    }

    itemInfo.innerText = `${myGame.title} has a Option of ${myGame.Option}. It costs $${myGame.Price.toFixed(2)}. ${bindItemInfo}`;

    //Add <h2> in the <div id="display">
    displayDiv.appendChild(ItemHeading);

    //add  <p> game info
    displayDiv.appendChild(itemInfo);
}

//ADD Validation code************************
function isAllDataValid(){
    return true;
}

