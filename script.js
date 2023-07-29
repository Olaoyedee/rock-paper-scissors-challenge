const modal = document.querySelector('.modal')
const close = document.querySelector('.close')
const rules = document.querySelector('.rules')
const sectionOne =document.querySelector('.section-one')
const papercircle = document.querySelector('.papercircle')
const scissorscircle = document.querySelector('.scissorscircle')
const rockcircle = document.querySelector('.rockcircle')
const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')
const sectiontwo = document.querySelector('.section-two')
const stepcircle3 = document.querySelector('.stepcircle3')
const repeat = document.querySelector('.repeat')
const step2bigCircle= document.querySelector('.step2-circle1')
const step2bigmedium = document.querySelector('.stepcircle2')
const step2bigCircle2= document.querySelector('.step2-circle2')
const step2bigmedium2 = document.querySelector('.stepcircle4')
const compFinalScore = document.querySelector('.computer_score')
const stepcircle5 = document.querySelector('.stepcircle5')
const playerScore = document.querySelector('.player-score')
const header = document.getElementsByTagName('header')
const directions = document.querySelector('.directions')
let echone= directions.firstElementChild

papercircle.addEventListener('click', ShowStage2) 
scissorscircle.addEventListener('click', ShowStage2)
rockcircle.addEventListener('click', ShowStage2)
repeat.addEventListener('click', restart)
// paper.addEventListener('click', ShowStage2) 
// scissors.addEventListener('click', ShowStage2)
// rock.addEventListener('click', ShowStage2)


// playerscore.textContent=0
// compFinalScore.textContent=0



function restart(){
    
    sectionOne.style.display ='flex'
    sectiontwo.style.display ='none'
    directions.style.scale=0
    echone.textContent =' '
    step2bigCircle.classList.remove('winnersignifier')
    step2bigmedium.classList.remove('winnersignifier')
    step2bigmedium2.classList.remove('winnersignifier')
    step2bigCircle2.classList.remove('winnersignifier')
    stepcircle3.className='stepcircle3'
    stepcircle5.className='stepcircle5'
    stepcircle3.firstElementChild.src=''
    stepcircle5.firstElementChild.src=''

}







rules.addEventListener('click', ()=>{
    modal.style.transform = 'scale(1)'
    close.addEventListener('click', ()=>{
        modal.style.transform ='scale(0)'
    })
})


function ShowStage2(e){
    stepcircle3.classList.remove(e.currentTarget.className)
   const directions = document.querySelector('.directions')
   const compFinalScore = document.querySelector('.computer_score')
   const playerScore = document.querySelector('.player-score')
   let echone= directions.firstElementChild
   sectionOne.style.display ='none'
   sectiontwo.style.display ='flex'
   stepcircle3.classList.add(e.currentTarget.className)
  
   let userchoice = e.currentTarget.firstElementChild.src
   stepcircle3.firstElementChild.src = userchoice
   let playerchoice =e.currentTarget.firstElementChild.className
 
   
    
   
    setTimeout(reveal, 3000)
    function reveal(){
        let comp=false
        let player =false
        const step2bigCircle= document.querySelector('.step2-circle1')
        const step2bigmedium = document.querySelector('.stepcircle2')
        const step2bigCircle2= document.querySelector('.step2-circle2')
        const step2bigmedium2 = document.querySelector('.stepcircle4')
      
        const stepcircle5 = document.querySelector('.stepcircle5')
        playerScore.textContent===parseInt(playerScore.textContent)
        compFinalScore.textContent===parseInt(compFinalScore.textContent)
        let gameArray= [paper, scissors, rock]
        gameRandomPick= Math.floor(Math.random()*gameArray.length)
        let Computerpick= gameArray[gameRandomPick]
        stepcircle5.firstElementChild.src=Computerpick.src
        computerResult = Computerpick.parentElement
        stepcircle5.classList.add(computerResult.className)
        console.log(playerchoice)
        if(playerchoice=='paper' && Computerpick.className =='scissors'){
            console.log('computer wins')
            setTimeout(signify, 500)
            setTimeout(identify, 1000)
            comp=true
            
            function signify(){
                step2bigmedium2.classList.add('winnerssignifier')
            }
            function identify(){
                step2bigCircle2.classList.add('winnersignifier')
                directions.style.scale=1
                echone.textContent ='YOU LOSE'
                
            }
            // signify()
            // identify()
            
        }
        else if(playerchoice=='paper' && Computerpick.className =='rock'){
    
           console.log('user wins')
           setTimeout(signify, 500)
           setTimeout(identify, 1000)
           player=true
           function signify(){
               step2bigmedium.classList.add('winnersignifier')
           }
           function identify(){
               step2bigCircle.classList.add('winnersignifier')
               directions.style.scale=1
                echone.textContent ='YOU WIN'
           }
        //    signify()
        //     identify()
        }
        else if(playerchoice=='scissors' && Computerpick.className  =='rock'){
            console.log('computer wins')
            setTimeout(signify, 500)
            setTimeout(identify, 1000)
            comp=true
            
            function signify(){
                step2bigmedium2.classList.add('winnersignifier')
            }
            function identify(){
                step2bigCircle2.classList.add('winnersignifier')
                directions.style.scale=1
                echone.textContent ='YOU LOSE'
            }
            // signify()
            // identify()
          
        }
        else if(playerchoice=='scissors' && Computerpick.className == 'paper'){
            console.log('user wins')
            setTimeout(signify, 500)
            setTimeout(identify, 1000)
            player=true
            
            function signify(){
                step2bigmedium.classList.add('winnersignifier')
            }
            function identify(){
                step2bigCircle.classList.add('winnersignifier')
                directions.style.scale=1
                echone.textContent ='YOU WIN'
            }
            // signify()
            // identify()
           
        }
        else if(playerchoice=='rock' && Computerpick.className =='paper'){
            console.log('computer wins')
            setTimeout(signify, 500)
            setTimeout(identify, 1000)
            comp=true
            
            function signify(){
                step2bigmedium2.classList.add('winnersignifier')
            }
            function identify(){
                step2bigCircle2.classList.add('winnersignifier')
                directions.style.scale=1
                echone.textContent ='YOU LOSE'
            }
            // signify()
            // identify()
          
        }
        else if(playerchoice=='rock' && Computerpick.className  == 'scissors'){
            console.log('user wins')
            setTimeout(signify, 500)
            setTimeout(identify, 1000)
            player=true
            
            function signify(){
                step2bigmedium.classList.add('winnersignifier')
            }
            function identify(){
                step2bigCircle.classList.add('winnersignifier')
                directions.style.scale=1
                echone.textContent ='YOU WIN'
            }
            // signify()
            // identify()
        }
        
        else{
    
           console.log('DRAW')
           directions.style.scale=1
           echone.textContent ='DRAW'


        }

        if(comp){
            playerScore.textContent=playerScore.textContent
            compFinalScore.textContent= parseInt(compFinalScore.textContent)+1
            
         
        }
        else if(player){
            playerScore.textContent=parseInt(playerScore.textContent)+1
            
        }
        else{
           
            playerScore.textContent=playerScore.textContent
            compFinalScore.textContent=compFinalScore.textContent
        }


      




    }

   
    
 



}





