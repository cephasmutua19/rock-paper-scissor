//Html elements
let scoreboard = document.querySelectorAll('.score');
let playersChoice = document.querySelectorAll('.player-button button');
let compsChoice = document.querySelector('#mark');
let playButton = document.querySelector('#play-btn');

// console.log(scoreboard[0])

let playerCount = 0;
let compCount = 0;

//Global Sprite Variable
const spriteArr = ["rock", "paper", "scissor"];

function getComputerChoice(){
    return spriteArr[Math.floor(Math.random() * 3)]
};

//Player Buttons
// playersChoice.forEach(targetZoom)

function targetZoom(btn){
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        let targetE = e.target;
        let chosenMove =targetE.getAttribute('class');
        console.log(chosenMove);
        playersChoice.forEach(val => {
            if(val !== targetE){
                val.classList.add('hide') ;
            }
            return chosenMove;
        });

            setTimeout(() => {
                playersChoice.forEach(val => {
                    val.classList.remove('hide');
            })
            }, 1200);
           

            let mech = getComputerChoice();
            compsChoice.textContent = '';
            console.log(mech);
            compsChoice.className = mech;

                setTimeout(() => {
                    compsChoice.classList.remove(mech)
                }, 1300);

                if(mech === chosenMove){
                    console.log('Draw');
                }else if(mech === spriteArr[0] && chosenMove === spriteArr[1]){
                        console.log('you win');
                        scoreboard[0].innerText = `${++playerCount}`
                    }else if(mech === spriteArr[0] && chosenMove === spriteArr[2]){
                            console.log('you loose');
                            scoreboard[1].innerText = `${++compCount}`
                        }else if(mech === spriteArr[1] && chosenMove === spriteArr
                            [0]){
                                console.log('you loose');
                                scoreboard[1].innerText = `${++compCount}`
                            }else if(mech === spriteArr[1] && chosenMove === spriteArr
                            [2]){
                                console.log('you win');
                                scoreboard[0].innerText = `${++playerCount}`
                            }else if(mech === spriteArr[2] && chosenMove === spriteArr
                                [0]){
                                    console.log('you win');
                                    scoreboard[0].innerText = `${++playerCount}`
                                }else if(mech === spriteArr[2] && chosenMove === spriteArr
                                    [1]){
                                        console.log('you loose');
                                        scoreboard[1].innerText = `${++compCount}`
                                    }

                                    if((playerCount == 5 || compCount == 5)){
                                        setTimeout(() => {
                                            playButton.classList.remove('hide');
                                            scoreboard.forEach(element => {
                                                element.innerText = '0'
                                            });
                                            playerCount = 0;
                                        compCount = 0;
                                        
    
                                        }, 3000);
                                    } 

    });
    
};


// playersChoice.forEach((e)=>{
    
// })
 
// Player & Computer choices
     
playButton.addEventListener('click', (e) => {
    // playerCount = 0;
    // compCount = 0;
    let targetEl = e.target;
    targetEl.classList.add('hide');
    playersChoice.forEach(targetZoom);
    // console.log(e)
   
});










