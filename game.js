//Html elements
let scoreboard = document.querySelectorAll('.score');
let playersChoice = document.querySelectorAll('.player-button button');
let playerChoice = document.querySelector('.player-button');
let compsChoice = document.querySelector('#mark');
let playButton = document.querySelector('#play-btn');
let playButtonContainer = document.querySelector('.play-button');
let p = document.createElement('p');
p.classList.add('score');
p.style.fontSize = "3em";

let playerCount = 0;
let compCount = 0;

//Global Sprite Variable
const spriteArr = ["rock", "paper", "scissor"];

function getComputerChoice(){
    return spriteArr[Math.floor(Math.random() * 3)]
};

//Player Buttons
playersChoice.forEach(e => e.disabled = true);

function playGame(btn){
    playButton.addEventListener('click', (e) => {
        p.textContent = `!!Game On!!`;
        playButtonContainer.append(p);
        setTimeout(() => {
            p.classList.add('hide')
            playersChoice.forEach(e => e.disabled = false);
        }, 2000);
        
        let targetEl = e.target;
        targetEl.classList.add('hide');
        
    });

    btn.addEventListener('click', (e) => {
        let targetE = e.target;
        let chosenMove =targetE.getAttribute('class');
        playersChoice.forEach(val => {
            if(val !== targetE){
                val.classList.add('hide');
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
            compsChoice.className = mech;

                setTimeout(() => {
                    compsChoice.classList.remove(mech);
                }, 1300);

                if(mech === chosenMove){
                    scoreboard[0].innerText = `${playerCount += 0}`;
                    scoreboard[1].innerText = `${compCount += 0}`;
                }else if(mech === spriteArr[0] && chosenMove === spriteArr[1] || mech === spriteArr[1] && chosenMove === spriteArr
                    [2] || mech === spriteArr[2] && chosenMove === spriteArr
                    [0]){
                        scoreboard[0].innerText = `${++playerCount}`;
                    }else if(mech === spriteArr[0] && chosenMove === spriteArr[2] || mech === spriteArr[2] && chosenMove === spriteArr[1] || mech === spriteArr[1] && chosenMove === spriteArr
                        [0]){
                            scoreboard[1].innerText = `${++compCount}`;
                        }
                                    
                        //End game
                                    if(scoreboard[0].innerText === '5' || scoreboard[1].innerText === '5'){
                                        playersChoice.forEach(e => e.disabled = true);
                                        p.classList.remove('hide')
                                        p.style.textAlign = 'center'
                                        if(compCount > playerCount){
                                            p.textContent = `You Loose!! Try Again`;
                                            playButtonContainer.append(p);
                                        }else if(compCount < playerCount){
                                            p.textContent = `Awesome!! You Won! Let's do it Again`;
                                            playButtonContainer.append(p);
                                        }else{
                                            p.textContent = `I'ts a Draw!! Let's try Again`;
                                            playButtonContainer.append(p);
                                        }
                                        playerCount = 0;
                                        compCount = 0;

                                        setTimeout(() => {
                                            playButtonContainer.removeChild(p);
                                        }, 4500);

                                        setTimeout(() => {
                                            playButton.classList.remove('hide');
                                            scoreboard.forEach(element => {
                                                element.innerText = '0';
                                            });
                                        }, 5000);
                                    }
    });

};

playersChoice.forEach(playGame);







