//Global Sprite Variable
const spriteArr = ["Rock", "Paper", "Scissor"]
 
// Player & Computer choices
function getComputerChoice(){
    return spriteArr[Math.floor(Math.random() * 3)]
}

console.log(getComputerChoice())

function getPlayersChoice(item){
    let chosenItem = item;
    let playerItem = "";

    let reg = /rock|paper|scissor/i;

    if(reg.test(chosenItem)){
        spriteArr.forEach(value => {
            if(value.toLocaleLowerCase() === chosenItem.toLowerCase()){
                playerItem = value
            }
        })
         
    } else{
        playerItem = "Invalid input"
    }
    
    return playerItem
}

console.log(getPlayersChoice("PAPER"))



function singlePlay(playerSelection, computerSelection){

}