let display = document.getElementById('display')
let memoria = document.getElementById('memoria')
display.textContent = 0
let som = new Audio('tink.wav')
let lampada = document.getElementById('lampada')
let chave = false
let gatilho
let memoriaFlash
let operador
let memoriaC

const insertNum = (num) => {
    som.play()
    if(display.textContent == 0 || gatilho == false){
        display.textContent = num
        gatilho = true
    }else if(gatilho == true) {
        display.textContent += num
    }
    
}
const operadores = (oper) => {
    som.play()
    if(memoriaFlash){
        display.textContent = eval(`${memoriaFlash}${operador}${display.textContent}`)
        memoriaFlash = display.textContent
        operador = oper
        gatilho = false
    }else{
    memoriaFlash = display.textContent
    operador = oper
    display.textContent = oper
    gatilho = false
    }
}
const calcular = () => {
    som.play()
    display.textContent = eval(`${memoriaFlash}${operador}${display.textContent}`)
    gatilho = false
    memoriaFlash = ''
    operador = ''
}
const porcent = () => {
    som.play()
    display.textContent = eval(`${memoriaFlash}/100*${display.textContent}+${memoriaFlash}`)
    gatilho = false
    memoriaFlash = ''
    operador = ''
}
const zerarDisplay = () => {
    display.textContent = 0
    gatilho = false
    memoriaFlash = ''
    operador = ''
}
const localC = () => {
    memoria.style.backgroundColor = 'red'
    memoriaC = display.textContent
    display.textContent = 0
    console.log(memoriaC)
}
const ponto = (p) => {
    gatilho = true
    display.textContent += p
}
const retornar = () => {
    display.textContent = memoriaC
}
const apagarMemoriaC = () => {
    memoriaC = 0
    memoria.style.backgroundColor = null
}
const mute = () => {
    if(chave == false){
        som = new Audio(undefined)
        chave = true
    }else{
        som = new Audio('tink.wav')
        chave = false
    }
}
const apagar = () => {
    let display = document.getElementById('display').textContent
    document.getElementById('display').textContent = display.substring(0, display.length -1)
}


