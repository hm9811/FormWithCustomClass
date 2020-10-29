class VideoGame{
    title:string;
    Price:number;
    Rating:string;
    isDigitalOnly:boolean;
}

//test code

// let myGame = new VideoGame();
// myGame.title = "Mario";
// myGame.Rating = "E";
// myGame.isDigitalOnly = true;

window.onload = function() {
    let addBtn = <HTMLElement>document.querySelector("input[type=button]");
    addBtn.onclick = addVideoGame;
}

function addVideoGame(){
    console.log("Add video game was called");

    if(isAllDataValid()){
        let game = getVideGame();
        displayGame(game);
    }
}

function getById(id:string){
    return <HTMLInputElement>document.getElementById(id);
}

/**
*gets all game data from the form
*and returns it in a videogame object
*/
function getVideGame():VideoGame {
    //TODO: Create Game
    let game = new VideoGame();
    //TODO: Populate with data from the form
    let titleInput = getById("title");
    game.title = titleInput.value;

    let priceInput = getById("price");
    game.Price = parseFloat(priceInput.value);



    //TODO: Return Game

    let digitalOnly = <HTMLInputElement>getById("online");
    game.isDigitalOnly = digitalOnly.checked;
    
    // if(digitalOnly.checked){
    //     game.isDigitalOnly = true;
    // }

    // else{
    //     game.isDigitalOnly = false;
    // }
    console.log(game);
    return game;
}

function displayGame(myGame:VideoGame):void {
    //TODO: Display video game below the form
    let displayDiv = getById("display");

    //Create <h2> with the game title
    let gameHeading = document.createElement("h2");
    gameHeading.innerText = myGame.title;

    let gameInfo = document.createElement("p");
    let gameMediumDisplay = "";
    if(myGame.isDigitalOnly){
        gameMediumDisplay = "This is a digital only game.";
    }
    else{
        gameMediumDisplay = "You can come buy a physical copy!"
    }

    gameInfo.innerText = `${myGame.title} has a rating of ${myGame.Rating}. It costs $${myGame.Price.toFixed(2)}. ${gameMediumDisplay}`;

    //Add <h2> in the <div id="display">
    displayDiv.appendChild(gameHeading);

    //add  <p> game info
    displayDiv.appendChild(gameInfo);
}

//ADD Validation code************************
function isAllDataValid(){
    return true;
}

