//Global Sprite Variable
const spriteArr = ["Rock", "Paper", "Scissor"]
 
// Player & Computer choices
function getComputerChoice(){
    return spriteArr[Math.floor(Math.random() * 3)]
}

// console.log(getComputerChoice())

// function getPlayersChoice(item){
//     let playerItem = "";
//     let reg = /rock|paper|scissor/i;

//     if(reg.test(item)){
//         spriteArr.forEach(value => {
//             if(value.toLocaleLowerCase() === item.toLowerCase()){
//                 playerItem = value
//             }
//         })
         
//     } else{
//         playerItem = "Invalid input"
//     }
    
//     return playerItem
// }

// console.log(getPlayersChoice("PAPER"))



function singlePlay(playerSelection, computerSelection){

    let resultStr = ""

    
        let playerItem = "";
        let reg = /rock|paper|scissor/i;
    
        if(reg.test(playerSelection)){
            spriteArr.forEach(value => {
                if(value.toLocaleLowerCase() === playerSelection.toLowerCase()){
                    playerItem = value
                }
            })
             
        } else{
            playerItem = "Invalid input"
        }
        

    //Check if selections match
    if(playerItem === computerSelection){
        resultStr = "It's a DRAW!!!";
    }else if(playerItem === spriteArr[0] && computerSelection === spriteArr[1]){
        resultStr = `You Lose! ${computerSelection} beats ${playerItem}`
    }
    else if(playerItem === spriteArr[0] && computerSelection === spriteArr[2]){
        resultStr = `You Win! ${playerItem} beats ${computerSelection}`
    }
    else if(playerItem === spriteArr[1] && computerSelection === spriteArr[0]){
        resultStr = `You Win! ${playerItem} beats ${computerSelection}`
    }else if(playerItem === spriteArr[1] && computerSelection === spriteArr[2]){
        resultStr = `You Lose! ${computerSelection} beats ${playerItem}`
    }else if(playerItem === spriteArr[2] && computerSelection === spriteArr[0]){
        resultStr = `You Lose! ${computerSelection} beats ${playerItem}`
    }else if(playerItem === spriteArr[2] && computerSelection === spriteArr[1]){
        resultStr = `You Win! ${playerItem} beats ${computerSelection}`
    }

    return resultStr
    
}

console.log(singlePlay("scissor", getComputerChoice()))