let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')
let load = document.querySelector('.load')
let demonhealth = document.querySelector('.demonhealth')
var target = demonhealth.offsetWidth
let characterHealth = document.querySelector('.healthwidth')
let characterhealth = characterHealth.offsetWidth
let start = document.querySelector('.startbtn')
let myGame = document.querySelector('.myGame')
let startdiv  = document.querySelector('.start')
let canvasheight = canvas.height = 600
let canvasWidth = canvas.width = 1200
canvas.style.backgroundColor = '#1C686B'
let pausemusic = document.querySelector('.pausemusic')
let playmusic = document.querySelector('.playmusic')
pausemusic.addEventListener('click', ()=>{
    menumusic.pause()
})

playmusic.addEventListener('click', ()=> {
    menumusic.play()
})

///menumusic///
let menumusic = new Audio
menumusic.src = './sound/menumusic.mp3'
///menumusic///
window.addEventListener('load', ()=> {
    load.style.display = "none"
    menumusic.play()
    menumusic.volume = 0.1
})

start.addEventListener('click',()=>{
        startdiv.style.display = "none"
        menumusic.pause()
})

///player///
let character = new Image
character.src = './img/character.png'
let srcX = 64
let srcY = 64
let currentFrameY = 0
let currentFrameX = 0
let x = 10
let y = 10
let speed = 5
let up = 5
let down = 5
let moveRight = 5
let moveLeft = 5
let height = 50
let width = 50
///player////

///block///
let blockx = 450
let blocky = 200
let blockwidth = 150
let blockheight = 50
///endblock//

///redmoon///
let redMoon = new Image
redMoon.src = './img/redmoon.png'
let redmoonSrcX = 100
let redmoonSrcY = 100
let redmoonWidth = 100
let redmoonHeight = 100
let redmoonX = 1000
let redmoonY = 20
let redmoonCureentFrameX = 0
////redmoon//

///enemy////
let enemySrcX = 288
let enemySrcY = 160
let enemywidth = 288
let enemyheight = 160
let enemyx = 900
let enemyY = 380
let enemyCurrentFrameX = 0
let enemyCurrentFrameY = 0
let enemySpeed = 10
let enemyImg = new Image
enemyImg.src = './img/demon.png'
let demonhit
///end enemy///


///chest////
let chest = new Image
chest.src = './img/chest.png'
let chestSrcX = 48
let chestSrcY = 32
let chestFramex = 0
let chestFrameY = 4
let chestX = 600
let chestY = 450
let chestwidth = 48 //48
let chestheight = 32 //32
////chest///

function draw(){
    ctx.clearRect(0,0,canvasWidth,canvasheight)

    ///redmoon///
    ctx.drawImage(redMoon,redmoonSrcX * redmoonCureentFrameX ,40,redmoonWidth,redmoonHeight,redmoonX,redmoonY,redmoonWidth,redmoonHeight)
    ///redmoon///

    ////chest///
    // ctx.drawImage(chest,chestSrcX * chestFramex ,chestSrcY * chestFrameY,chestwidth,chestheight,chestX,chestY,chestwidth,chestheight)
    ///chest////

    ////enemy///
    ctx.drawImage(enemyImg,enemySrcX * enemyCurrentFrameX,enemySrcY * enemyCurrentFrameY,enemywidth,enemyheight,enemyx,enemyY,enemywidth,enemyheight)
    ///enemy////

     ////player///
     ctx.drawImage(character,srcX*currentFrameX,srcY*currentFrameY,width,height,x,y,width,height)
     ////endplayer////

}

let demon = setInterval(() => {
    enemyCurrentFrameX++
    if(enemyCurrentFrameX === 6){
        enemyCurrentFrameX = 0
    }
}, 100);

let interval = setInterval(()=> {
    currentFrameX++
    if(currentFrameX === 8){
        currentFrameX = 0
    }
},100)

let enemyInterval = setInterval(() => {
    chestFramex++
    if(chestFramex === 5){
        chestFramex = 0
    }
}, 100);

let redmoon = setInterval(() => {
    redmoonCureentFrameX++
    if(redmoonCureentFrameX === 11){
        redmoonCureentFrameX = 0
    }
}, 100);


function updated() {
    ///player///
    draw()
    y+=speed
    if(y + speed >= canvasheight - height - 30){
        speed = 0
    }
    if(y + down >= canvasheight - height){
        down = 0
    }else {
        down = 5
    }
    if(x + moveRight >= canvasWidth - width - 30){
        moveRight = 0
    }else{
        moveRight = 5
    }
    if(x - moveLeft <= 10){
        moveLeft = 0
    }else{
        moveLeft = 5
    }
    if(y - up <= 20){
        up = 0
    }else{
        up = 5
    }

    let text = document.querySelector('.reward')

    if (x + width > enemyx + 100 && x < enemyx + enemywidth - 120 && y + height > enemyY + 80 && 
        y < enemyY + enemyheight - 20) {
                characterHealth.style.width = (characterhealth-= 0.04) + "px"
            enemyCurrentFrameY = 2
             demonhit = setInterval(() => {
           enemyCurrentFrameX++
           if(enemyCurrentFrameX === 14){
               enemyCurrentFrameX = 0
        }
    }, 1000);
    clearInterval(demonhit)
      }else{
        enemyCurrentFrameY = 0
        characterHealth.style.width = (characterhealth - 0) + "px"
      }

      if (x + width > chestX && x < chestX + chestwidth - 35 && y + height > chestY  && 
        y < chestY + chestheight - 20) {
        text.style.display = "flex"
        chestFrameY = 5
        let chest = setInterval(() => {
            chestFramex++
            if(chestFramex === 5){
                 chestFramex = 0
              }
        }, 4000);
        clearInterval(chest)
      }else{
        text.style.display = "none"
        clearInterval(chest)
        chestFrameY = 4
        if(chestFramex === 5){
            chestFramex = 0
         }
        
      }
    ///end player///
}

function animate(){
    requestAnimationFrame(animate)
    updated()
}

animate()

window.addEventListener('keydown', (e)=> {
    ////player///
    let key = e.key
    if(key === "ArrowUp"){
        y -= up
        currentFrameY = 6
        clearInterval(interval)
        currentFrameX+=1
        if(currentFrameX === 8){
            currentFrameX = 0
        }
    }
    if(key === "ArrowRight"){
        x += moveRight
        currentFrameY = 5
        clearInterval(interval)
        currentFrameX+=1
        if(currentFrameX === 8){
            currentFrameX = 0
        }
    }
    if(key === "ArrowLeft"){
        x -= moveLeft
        currentFrameY = 7
        clearInterval(interval)
        currentFrameX+=1
        if(currentFrameX === 8){
            currentFrameX = 0
        }
    }
    if(key === "ArrowDown"){
        y += down
          currentFrameY = 4
        clearInterval(interval)
        currentFrameX+=1
        if(currentFrameX === 8){
            currentFrameX = 0
        }
    }

    if(key === " "){
        if (x + width > enemyx + 100 && x < enemyx + enemywidth - 120 && y + height > enemyY + 80 && 
            y < enemyY + enemyheight - 20){
                var target = demonhealth.offsetWidth
                demonhealth.style.width = ( target - 2 ) + "px"
                if(target === 0){
                    enemywidth = 0
                    enemyheight = 0
                    demonhealth.style.display = "none"
                }
            }
    }
    ////player///
})
window.addEventListener('keyup', (e)=> {
    ////player////
    let key = e.key
    if(key === "ArrowUp"){
        up += 0 
        currentFrameY = 0
    }
    if(key === "ArrowRight"){
        moveRight += 0
        currentFrameY = 0
    }
    if(key === "ArrowLeft"){
        moveLeft += 0
        currentFrameY = 0
    }
    if(key === "ArrowDown"){
        down+=0
        currentFrameY = 0
    }
    ////player////
})