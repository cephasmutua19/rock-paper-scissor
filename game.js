//Html elements
let scoreboard = document.querySelectorAll('.score')
let playersChoice = document.querySelectorAll('.player-button button')
let compsChoice = document.querySelector('#mark')
let playButton = document.querySelector('#play-btn')

let sampleTest = playersChoice[0].getAttribute('class')

console.log(typeof sampleTest)

//Global Sprite Variable
const spriteArr = ["rock", "paper", "scissor"]
function getComputerChoice(){
    return spriteArr[Math.floor(Math.random() * 3)]
}

//Player Buttons
// playersChoice.forEach(targetZoom)

function targetZoom(btn){
    btn.addEventListener('click', (e) => {
        e.preventDefault()
        let targetE = e.target
        let chosenMove =targetE.getAttribute('class')
        console.log(targetE.getAttribute('class'))
        playersChoice.forEach(val => {
            if(val !== targetE){
                val.classList.add('hide') 
            }
            return targetE.getAttribute('class')
        })

            setTimeout(() => {
                playersChoice.forEach(val => {
                    val.classList.remove('hide')
            })
            }, 1200);
           

            let mech = getComputerChoice()
            compsChoice.textContent = ''
            console.log(mech)
            compsChoice.className = mech

            compsChoice.classList.add('scaled-btn')

                compsChoice.classList.remove('scaled-btn')
                setTimeout(() => {
                    compsChoice.classList.remove(mech)
                }, 1300);

                if(mech === chosenMove){
                    console.log('Draw')
                }else if(mech === spriteArr[0] && chosenMove === spriteArr[1]){
                        console.log('you win')
                    }else if(mech === spriteArr[0] && chosenMove === spriteArr[2]){
                            console.log('you loose')
                        }else if(mech === spriteArr[1] && chosenMove === spriteArr
                            [0]){
                                console.log('you loose')
                            }else if(mech === spriteArr[1] && chosenMove === spriteArr
                            [2]){
                                console.log('you win')
                            }else if(mech === spriteArr[2] && chosenMove === spriteArr
                                [0]){
                                    console.log('you win')
                                }else if(mech === spriteArr[2] && chosenMove === spriteArr
                                    [1]){
                                        console.log('you loose')
                                    }

    })
}



// playersChoice.forEach(targetZoom)
 
// Player & Computer choices
     
playButton.addEventListener('click', (e) => {
    let targetEl = e.target;
    targetEl.classList.add('hide')
    playersChoice.forEach(targetZoom)
   
})


