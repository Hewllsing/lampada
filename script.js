const turnOnOff = document.getElementById('turnOn-Off')
const lamp = document.getElementById('lamp')

function lampBroken () {
    return lamp.src.indexOf ('quebrada') > -1
}

function lampON () {
    if (!lampBroken ()) {
        lamp.src = './img/ligada.jpg'
    }
    
}

function lampOFF () {
    if (!lampBroken ()) {
        lamp.src = './img/desligada.jpg'
    }
}


function lampOnOff () {
    if (turnOnOff.textContent == 'Ligar') {
        lampON();
        turnOnOff.textContent = 'Desligar'
    } else if (turnOnOff.textContent == 'Quebrou!') {
        lampBroken();
        turnOnOff.textContent = 'Quebrou!'
    }
    else {
        lampOFF();
        turnOnOff.textContent = 'Ligar'
    }
}

function Broken () {
    turnOnOff.textContent = 'Quebrou!'
    lamp.src = './img/quebrada.jpg'
}

turnOnOff.addEventListener('click', lampOnOff)
lamp.addEventListener('mouseover', lampON)
lamp.addEventListener('mouseleave', lampOFF)
lamp.addEventListener('dblclick', Broken)
