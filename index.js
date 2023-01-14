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
let nextworld = document.querySelector('.nextworld')
let finalbosshealth = document.querySelector('.finalbosshealthbar')
let finalbosshealthline = document.querySelector('.healthline')
let canvasheight = canvas.height = 600
let canvasWidth = canvas.width = 1200
canvas.style.backgroundColor = '#1C686B'
let pausemusic = document.querySelector('.pausemusic')
let playmusic = document.querySelector('.playmusic')
let count = 0
let finalbosshealthrefillcount = 0
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
let playagain = document.querySelector('.playagain')
let winalert = document.querySelector('.winalert')
playagain.addEventListener('click', ()=>{
    location.reload()
    winalert.style.display = "none"
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
let chestX = 540
let chestY = 280
let chestwidth = 0 //48
let chestheight = 0 //32
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

///finalboss///
let finalboss = new Image
finalboss.src = './img/finalboss.png'
let finalsrcx = 585
let finalframe = 0
let finalsrcy = 0
let finalbosswidth = 0
let finalbossheight = 0
let finalbossx = 550
let finalbossy = 300
///finalboss///

////door///
let demondoor = new Image
demondoor.src = './img/door.png'
let doorsrcx = 240
let doorsrcy =240
let doorframex = 0
let doorframey = 0
let doorwidth = 0
let doorheight = 0
let doorx = 370
let doory = 20
///door//

function draw(){
    ctx.clearRect(0,0,canvasWidth,canvasheight)

    ctx.drawImage(finalboss,finalsrcx*finalframe,finalsrcy,550,300,finalbossx,finalbossy,finalbosswidth,finalbossheight)

    ctx.drawImage(demondoor,doorsrcx * doorframex, doorsrcy * doorframey,doorsrcx,doorsrcy,doorx,doory,doorwidth,doorheight)

    ///redmoon///
    ctx.drawImage(redMoon,redmoonSrcX * redmoonCureentFrameX ,40,redmoonWidth,redmoonHeight,redmoonX,redmoonY,redmoonWidth,redmoonHeight)
    ///redmoon///

    // //chest///
    // ctx.drawImage(chest,chestSrcX * chestFramex ,chestSrcY * chestFrameY,chestwidth,chestheight,chestX,chestY,chestwidth,chestheight)
    // ///chest////

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

let doorinterval = setInterval(() => {
    doorframex++
    if(doorframex === 9){
        doorframex = 0
    }
}, 150);

let finalbossinterval = setInterval(() => {
    finalframe++
    if(finalframe === 3){
        finalframe = 0
    }
}, 400);

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

      ///door cordinate///
      if(y < doory + doorheight - 140 && x + width > doorx + 70  && x < doorx + doorwidth - 85 && y + height > doory + 80){
        doorframey = 2
        doorframex = 1
        y-=1
        currentFrameY = 6
        currentFrameX++
        characterHealth.style.width = 220 + "px"
        characterhealth = 220
        if(currentFrameX === 8){
            currentFrameX = 0
        }
        if(y< doory + doorheight - 280){
            width = 0
            height = 0
            refillhealth.style.display = "none"
            setTimeout(() => {
                doorwidth = 0
                doorheight = 0
                nextworld.style.display = "flex"
            }, 3000);
            setTimeout(() => {
                nextworld.style.display = "none"
                canvas.style.backgroundColor = "#1F1F1F"
                finalbosswidth = 640
                finalbossheight = 300
                width = 50
                height = 50
                x = 10
                y = 500
                currentFrameY = 0
                finalbosshealth.style.display = "flex"
            }, 6000);
        }
      }
      else{
        doorframey = 0
    }
      ///door codtinate////

      //finalboss cordinate///
      if (x + width > finalbossx + 30 && x < finalbossx + finalbosswidth - 35 && y + height > finalbossy + 50  && 
        y < finalbossy + finalbossheight - 20){
            characterHealth.style.width = (characterhealth -= 0.2) + "px"
            if(characterhealth < 100){
                refillhealth.style.display = "block"
            }
            if(count === 11){
                if(characterhealth < 10){
                    refillhealth.style.display = "none"
                }
            }
        }
      //finalboss cordinate///

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
                                doorwidth = 390
                                doorheight = 390
                                if(characterhealth < 50){
                                    refillhealth.style.display = "none"
                                }
                            }
                        }
                        if (x + width > finalbossx + 30 && x < finalbossx + finalbosswidth - 35 && y + height > finalbossy + 50  && 
                            y < finalbossy + finalbossheight - 20){
                                let finalbosshealthlineoffset = finalbosshealthline.offsetWidth
                                finalbosshealthline.style.width = (finalbosshealthlineoffset -= 1) + "px"
                                if(finalbosshealthrefillcount <= 2){
                                    if(finalbosshealthlineoffset < 100){
                                        finalbosshealthrefillcount++
                                        finalbosshealthlineoffset = 270
                                        finalbosshealthline.style.width = 270 + "px"
                                    }
                                }
                                if(finalbosshealthlineoffset === 0){
                                    finalbosswidth = 0
                                    finalbossheight = 0
                                    finalbosshealth.style.display = "none"
                                    refillhealth.style.display = "none"
                                   setTimeout(() => {
                                    winalert.style.display = "flex"
                                   }, 1000);
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


