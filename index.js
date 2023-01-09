let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')
let load = document.querySelector('.load')
let demonhealth = document.querySelector('.demonhealth')
let canvasheight = canvas.height = 600
let canvasWidth = canvas.width = 1200
canvas.style.backgroundColor = '#1C686B'
window.addEventListener('load', ()=> {
    load.style.display = "none"
})
///player///
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
let chestwidth = 0 //48
let chestheight = 0 //32
////chest///

let character = new Image
character.src = './img/character.png'
let srcX = 64
let srcY = 64
let currentFrameY = 0
let currentFrameX = 0

let walk = new Audio
walk.src = './sound/walk.mp3'

function draw(){
    ctx.clearRect(0,0,canvasWidth,canvasheight)

    ///redmoon///
    ctx.drawImage(redMoon,redmoonSrcX * redmoonCureentFrameX ,40,redmoonWidth,redmoonHeight,redmoonX,redmoonY,redmoonWidth,redmoonHeight)
    ///redmoon///

    ////chest///
    ctx.drawImage(chest,chestSrcX * chestFramex ,chestSrcY * chestFrameY,chestwidth,chestheight,chestX,chestY,chestwidth,chestheight)
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
                demonhealth.style.width =  "0"
                demonhealth.innerHTML = "CLAIM YOUR REWARD!!!"
                demonhealth.style.color = "white"
            chestwidth = 48
            chestheight = 32
            enemywidth = 0
            enemyheight = 0
       enemyCurrentFrameY = 2
       let demonhit = setInterval(() => {
        enemyCurrentFrameX++
        if(enemyCurrentFrameX === 15){
            enemyCurrentFrameX = 0
        }
       }, 3000);
       clearInterval(demonhit)
      }else{
        enemyCurrentFrameY = 0
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
        walk.play()
        currentFrameY = 6
        clearInterval(interval)
        currentFrameX+=1
        if(currentFrameX === 8){
            currentFrameX = 0
        }
    }
    if(key === "ArrowRight"){
        x += moveRight
        walk.play()
        currentFrameY = 5
        clearInterval(interval)
        currentFrameX+=1
        if(currentFrameX === 8){
            currentFrameX = 0
        }
    }
    if(key === "ArrowLeft"){
        x -= moveLeft
        walk.play()
        currentFrameY = 7
        clearInterval(interval)
        currentFrameX+=1
        if(currentFrameX === 8){
            currentFrameX = 0
        }
    }
    if(key === "ArrowDown"){
        y += down
        walk.play()
          currentFrameY = 4
        clearInterval(interval)
        currentFrameX+=1
        if(currentFrameX === 8){
            currentFrameX = 0
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
        walk.pause()
    }
    if(key === "ArrowRight"){
        moveRight += 0
        currentFrameY = 0
        walk.pause()
    }
    if(key === "ArrowLeft"){
        moveLeft += 0
        currentFrameY = 0
        walk.pause()
    }
    if(key === "ArrowDown"){
        down+=0
        currentFrameY = 0
        walk.pause()
    }
    ////player////
})