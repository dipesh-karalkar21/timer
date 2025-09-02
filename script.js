const clock = document.querySelector('#main');
const nob = document.querySelector('#nob')
nob.addEventListener('click',()=>{toggleTimed()})
var timer = null
var isTimed = false
var angle = 0



while(angle < 360){
    const line = document.createElement('div')
    line.style.width='1%'
    line.style.height = '5%'
    line.style.backgroundColor = 'white '
    line.style.border = '1px solid black'
    line.style.position = 'absolute'
    
    line.style.top = (48+45*Math.sin(angle*Math.PI/180))+'%'
    line.style.left = (49+45*Math.cos(angle*Math.PI/180))+'%'

    line.style.rotate = (angle+90) +'deg'
    console.log(line.style.top , line.style.left)
    clock.appendChild(line)
    angle +=30
}

const hand = document.createElement('div')

hand.style.width = '1%'
hand.style.height = '80%'
hand.style.backgroundImage = 'linear-gradient(white 50%,rgb(189, 189, 189,0) 50%)'
hand.style.position = 'absolute'
hand.style.borderRadius = '50vh'
hand.style.top = '10%'
hand.style.left = '49%'
hand.style.rotate = '0deg'

clock.appendChild(hand)

function toggleTimed(){
    isTimed = !isTimed
    timerClick()
}

function timerClick(){
    if(isTimed){
        timer = setInterval(()=>{
            rot = parseFloat(hand.style.rotate.split('deg')[0])
            const time = document.querySelector('#time')
            let actTime = time.innerHTML.split(':')
            console.log(actTime)
            if(parseInt(actTime[2])<99){
                actTime[2] = (parseInt(actTime[2])+1) < 10 ? '0'+(parseInt(actTime[2]) +1) : parseInt(actTime[2]) +1
            }
            else{
                actTime[2] = '00'
                if(parseInt(actTime[1]) <59){
                    actTime[1] = parseInt(actTime[1])+1 < 10 ? '0'+(parseInt(actTime[1])+1) : parseInt(actTime[1])+1
                }
                else{
                    actTime[1] = '00'
                    actTime[0] = parseInt(actTime[0])+1 < 10 ? '0'+(parseInt(actTime[0])+1) : parseInt(actTime[0])+1
                }
            }

            time.innerHTML = actTime.join(':')
            hand.style.rotate = (rot+360/6000)+'deg'


        },10)
    }
    else{
        clearInterval(timer)
        
    }
}