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
    }else{
        resultStr = alert("Invalid Entry!!! You have shorten your trials. Next time enter either Rock, Paper or scissor")
    }

    return resultStr
    
}

// console.log(singlePlay("scissor", getComputerChoice()))


//Create a 5 round iteration that displays winner and looser at the end with points

function game(){
    
    let result = [];
    let compScore = 0;
    let playerScore = 0;
    for (let i = 0; i < 5; i++) {

        let promptGame = prompt("Enter either Rock, Paper or Scissor", "")
        result.push(singlePlay(promptGame, getComputerChoice()))

        if(result[i] === undefined){
            console.error("Invalid Entry!!!");
            console.log(compScore += 0)
            console.log(playerScore += 0)
            //Need to check how to restart here

        }else if(/^You\sLose/.test(result[i])){
            console.log(result[i])
            console.log(++compScore)
            console.log(playerScore += 0)
        }else if(/^It\'s\sa\s/.test(result[i])){
            console.log(result[i])
            console.log(compScore += 0)
            console.log(playerScore += 0)
        }else{
            console.log(result[i])
            console.log(compScore += 0)
            console.log(++playerScore)
        }
     }

     if(compScore > playerScore){
        return ` YOU LOST!!! Your score is ${playerScore} - Machine scored ${compScore }`
     }else if(compScore < playerScore){
        return ` HURRAY!!! YOU WON!!! Your score is ${playerScore} - Machine scored ${compScore }`
     }else return ` Oh WOW, ITS A DRAW : You scored ${playerScore} - Machine scored ${compScore }`
     
    //  return compScore + " : " + playerScore
}

console.log(game())
