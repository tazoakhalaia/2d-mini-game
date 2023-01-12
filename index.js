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
let enemy2health = document.querySelector('.enemy2health')
let enemy2heal = enemy2health.offsetWidth
let defeatalert = document.querySelector('.alert')
let bosshealth = document.querySelector('.bosshealth')
let bosshealthlegnth = document.querySelector('.bosshealthlenth')
let refillhealth = document.querySelector('.refillhealth')
let canvasheight = canvas.height = 600
let canvasWidth = canvas.width = 1200
canvas.style.backgroundColor = '#1C686B'
let pausemusic = document.querySelector('.pausemusic')
let playmusic = document.querySelector('.playmusic')
let count = 0
pausemusic.addEventListener('click', ()=>{
    menumusic.pause()
})

playmusic.addEventListener('click', ()=> {
    menumusic.play()
})

///refillhealth///
refillhealth.addEventListener('click', ()=> {
    characterHealth.style.width = 150 + "px"
    characterhealth = 150
    refillhealth.style.display = "none"
    count++
})
///refillhealth///

///menumusic///
let menumusic = new Audio
menumusic.src = './sound/menumusic.mp3'
///menumusic///
window.addEventListener('load', ()=> {
    load.style.display = "none"
})

start.addEventListener('click',()=>{
        startdiv.style.display = "none"
        menumusic.pause()
})

let restart = document.querySelector('.restart')
let restartpage = document.querySelector('.losepage')
restart.addEventListener('click', ()=> {
    location.reload()
    restartpage.style.display = "none"
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

///skeleton////
let enemy2 = new Image
enemy2.src = './img/skeleton.png'
let enemy2SrcX = 96
let enemy2SrcY = 96
let enemy2width = 0
let enemy2height = 0
let enemy2X = 10
let enemy2y = 450
let enemy2FrameX = 0
let enemy2FrameY = 0
let enemy2interval = setInterval(() => {
    enemy2FrameX++
    if(enemy2FrameX === 5){
        enemy2FrameX = 0
    }
}, 100);
let enemy2hit
///skeleton///

///boss///
let boss = new Image
boss.src = './img/boss.png'
let bossSrcX = 64
let bossScry = 64
let bosswidth = 0
let bossheight = 0
let bossx = 450
let bossy = 130
let bossFrameX = 0
let bossFrameY = 0
////bosss///


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

    ////skeleton////
    ctx.drawImage(enemy2, enemy2SrcX * enemy2FrameX,enemy2SrcY * enemy2FrameY,enemy2width,enemy2height,enemy2X,enemy2y,enemy2width,enemy2height)
    ////skeleton////

    ctx.drawImage(boss,bossSrcX * bossFrameX,bossScry * bossFrameY,64,64,bossx,bossy,bosswidth,bossheight)

     ////player///
     ctx.drawImage(character,srcX*currentFrameX,srcY*currentFrameY,width,height,x,y,width,height)
     ////endplayer////
}

let bossinterval = setInterval(()=>{
    bossFrameX++
    if(bossFrameX === 10){
        bossFrameX = 0
    }
},100)

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

    if (x + width > enemyx + 100 && x < enemyx + enemywidth - 120 && y + height > enemyY + 80 && 
        y < enemyY + enemyheight - 20) {
                characterHealth.style.width = (characterhealth-= 0.08) + "px"
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
      }


      ////enemy2////
      if (x + width > enemy2X  && x < enemy2X + enemy2width - 70 && y + height > enemy2y + 30 && 
        y < enemy2y + enemy2height - 50){
            characterHealth.style.width = (characterhealth-= 0.2) + "px"
            enemy2FrameY = 3
            enemy2hit = setInterval(() => {
                enemy2FrameX++
                if(enemy2FrameX === 9){
                    enemy2FrameX = 0
                }
            }, 100);
            clearInterval(enemy2hit)
        }else{
            enemy2FrameY = 0
        }
        ////enemy2////

        if (x + width > chestX && x < chestX + chestwidth - 35 && y + height > chestY  && 
        y < chestY + chestheight - 20) {
        chestFrameY = 5
        let chest = setInterval(() => {
            chestFramex++
            if(chestFramex === 5){
                 chestFramex = 0
              }
        }, 4000);
        clearInterval(chest)
      }else{
        clearInterval(chest)
        chestFrameY = 4
        if(chestFramex === 5){
            chestFramex = 0
         }
        
      }

      function characterCurrentHealth(){
        if(characterhealth < 2 ){
            console.log('die');
            restartpage.style.display = "flex"
        }
      }
      characterCurrentHealth()

      ///bosscordinate///
      if (x + width > bossx + 50  && x < bossx + bosswidth - 50 && y + height > bossy + 80 && 
        y < bossy + bossheight - 20){
            characterHealth.style.width = (characterhealth-= 0.4) + "px"
            if(characterhealth < 50){
                console.log('nice');
                refillhealth.style.display = "block"
            }
            if(count === 7){
                if(characterhealth < 50){
                    refillhealth.style.display = "none"
                }
            }
        }
      ////bosscordinate///

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
        clearInterval(interval)
        currentFrameY = 29
        currentFrameX = 1
        if (x + width > enemyx + 100 && x < enemyx + enemywidth - 120 && y + height > enemyY + 80 && 
            y < enemyY + enemyheight - 20){
                var target = demonhealth.offsetWidth
                demonhealth.style.width = ( target - 2 ) + "px"
                if(target === 0){
                    defeatalert.style.display = "flex"
                    setTimeout(() => {
                    enemy2width = 113
                    enemy2height = 96
                    enemy2health.style.display = "flex"
                    defeatalert.style.display = "none"
                    }, 5000);
                    enemywidth = 0
                    enemyheight = 0
                    demonhealth.style.display = "none"
                }
            }

            if (x + width > enemy2X  && x < enemy2X + enemy2width - 70 && y + height > enemy2y + 30 && 
                y < enemy2y + enemy2height - 50){
                    let enemy2heal = enemy2health.offsetWidth
                    enemy2health.style.width = (enemy2heal - 1) + 'px'
                    if(enemy2heal === 0){
                        let defeattext = document.querySelector('.alerttext')
                        defeattext.innerHTML = "YOUT DEFEAT SECOND BOSS!"
                        defeatalert.style.display = "flex"
                        defeatalert.style.fontFamily = "gameFont"
                        defeattext.style.fontSize = "18px"
                        setTimeout(() => {
                            defeattext.innerHTML = "BOSS FIGHT!!!"
                        },2000)
                        setTimeout(() => {
                            defeatalert.style.display = "none"
                            bosswidth = 200
                            bossheight = 200
                            bosshealth.style.display = "flex"
                        }, 5000);
                        enemy2width = 0
                        enemy2height = 0
                        enemy2health.style.display = "none"
                    }
                }

                 if (x + width > bossx + 50  && x < bossx + bosswidth - 50 && y + height > bossy + 80 && 
                        y < bossy + bossheight - 20){
                            let bosshealthminus = bosshealthlegnth.offsetWidth
                            bosshealthlegnth.style.width = ( bosshealthminus - 1 ) + "px"
                            if(bosshealthminus === 0){
                                bosshealth.style.display = "none"
                                bosswidth = 0
                                bossheight = 0
                                characterHealth.style.width = 150 + "px"
                                characterhealth = 150
                                if(characterhealth < 50){
                                    refillhealth.style.display = "none"
                                }
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
    if(key === " "){
        currentFrameY = 0
    }
    ////player////
})


