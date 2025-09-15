setInterval(setClock,1000)

const hourHand = document.querySelector("[hour-hand]")
const minuteHand = document.querySelector("[minute-hand]")
const secondHand = document.querySelector("[second-hand]")

function setClock(){
    const currentDate = new Date();
    const secondsRatio = currentDate.getSeconds() / 60
    const minutsRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutsRatio + currentDate.getHours()) / 12

    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutsRatio)
    setRotation(hourHand, hoursRatio)
}


function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio * 360)
}


setClock()
