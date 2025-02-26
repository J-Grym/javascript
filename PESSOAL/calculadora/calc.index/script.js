let display = document.getElementById('display')
let memoria = document.getElementById('memoria')
display.textContent = 0
let som = new Audio('tink.wav')
let lampada = document.getElementById('lampada')
let chave = false
let gatilho = false
let memoriaFlash
let operador
let memoriaC

const insertNum = (num) => {
    som.play()
    if(gatilho == false){
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
    memoriaC = eval(`${memoriaFlash}/100*${display.textContent}`)
    display.textContent = eval(`${memoriaFlash}${operador}${memoriaC}`)
    memoriaFlash = ''
    memoriaC = ''
    operador = ''
    gatilho = false
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
}
const ponto = (p) => {
    display.textContent += p
    gatilho = true
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


const elemento = {'1': '', '2': '', '3': '', '4': '', '5': '', '6': '', '7': '', '8': '', '9': '', '0': ''} 
const simbolo = {'+': '', '-': '', '*': '', '/': ''}
const pont = {'.': ''}
const Enter = {'Enter': ''}
const conjunto = {'m': '', 'r': '', 'c': '', 'Backspace': '', '%': '', 'k': '', 't': ''}

const insertNumeros = (event) => {
    const digito = event.key
    const clickPermitido = elemento.hasOwnProperty(digito)
    if(clickPermitido){
        som.play()
        if(gatilho == false){
            display.textContent = digito
            gatilho = true
        }else if(gatilho == true){
            display.textContent += digito
        }
    }
}

const insertSimbolo = (event) => {
    const digito = event.key
    const clickPermitido = simbolo.hasOwnProperty(digito)
    if(clickPermitido){
        som.play()
        if(memoriaFlash){
            display.textContent = eval(`${memoriaFlash}${operador}${display.textContent}`)
            memoriaFlash = display.textContent
            operador = digito
            gatilho = false
            console.log(operador)
        }else{
            memoriaFlash = display.textContent
            operador = digito
            display.textContent = digito
            gatilho = false
        }
    }
}

const calcularAgora = (event) => {
    const digito = event.key
    const clickPermitido = Enter.hasOwnProperty(digito)
    if(clickPermitido){
        som.play()
        display.textContent = eval(`${memoriaFlash}${operador}${display.textContent}`)
        memoriaFlash = ''
        operador = ''
        gatilho = false
    }
}
const insertPonto = (event) => {
let digito = event.key
const clickPermitido = pont.hasOwnProperty(digito)
    if(clickPermitido){
        som.play()
        display.textContent += digito
        gatilho = true
    }
}
const especiais = (event) => {
let digito = event.key
const clickPermitido = conjunto.hasOwnProperty(digito)
    if(clickPermitido){
        som.play()
        if(digito == 'm'){
            memoriaC = display.textContent
            memoria.style.backgroundColor = 'red'
            display.textContent = 0
        }else if(digito == 'r'){
            display.textContent = memoriaC
        }else if(digito == 'c'){
            memoriaC = ''
            memoria.style.backgroundColor = ''
        }else if(digito == 'Backspace'){
            let display = document.getElementById('display').textContent
            document.getElementById('display').textContent = display.substring(0, display.length -1)
        }else if(digito == '%'){
            memoriaC = eval(`${memoriaFlash}/100*${display.textContent}`)
            display.textContent = eval(`${memoriaFlash}${operador}${memoriaC}`)
            memoriaFlash = ''
            memoriaC = ''
            operador = ''
            gatilho = false
        }else if(digito == 'k'){
            display.textContent = 0
            gatilho = false
            operador = ''
            memoriaFlash = ''
        }else if(digito == 't'){
            if(chave == false){
                som = new Audio(undefined)
                chave = true
            }else if(chave == true){
                som = new Audio('tink.wav')
                chave = false
            }
            
            
        }
    }
}

document.addEventListener('keydown', especiais)
document.addEventListener('keydown', insertPonto)
document.addEventListener('keydown', calcularAgora)
document.addEventListener('keydown', insertSimbolo)
document.addEventListener('keydown', insertNumeros)