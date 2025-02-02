let display = document.getElementById('display')
let lembrete = document.getElementById('lembrete')
let gatilho 
let numberAnterior
let operar = []
let localC

function doisClicks(){
    display.textContent = ''
    localC = ''
    lembrete.style.backgroundColor = ''
    lembrete.style.boxShadow = ''
    numberAnterior = ''
}
function reset(){
        gatilho = false
        display.textContent = 0
}
function insert(num){
    if(display.textContent == ''){
        display.textContent = ''
    } else if(gatilho == false && display.textContent == 0){
        display.textContent = num
        gatilho = true  
    }else if(gatilho == true){
        display.textContent += num
    }
}
function ponto(num){
    if (display.textContent == ''){
        display.textContent = ''
    } else if(display.textContent == 0){
        display.textContent += num
        gatilho = true
    }
}
function operadores(oper){
    numberAnterior = display.textContent 
    operar.push(oper)
    display.textContent = 0
    gatilho = false
}
function calcular(){
    if(display.textContent == 0){
        display.textContent = 0
    } else {
        let display = document.getElementById('display').textContent
        document.getElementById('display').textContent = eval(numberAnterior + operar.toString() + display).toFixed(2)
        operar = []
        numberAnterior = ''
    }

}
function porcent(){
    let display = document.getElementById('display').textContent
    document.getElementById('display').textContent = eval(numberAnterior / 100 * display)
}
function back(){
    let display = document.getElementById('display').textContent
    document.getElementById('display').textContent = display.substring(0, display.length -1)
}
function memoria(){
    localC = display.textContent
    lembrete.style.backgroundColor = 'green'
    lembrete.style.boxShadow = '0px 0px 5px green, inset 0px 0px 5px green'
    display.textContent = 0
}
function retorne(){
    display.textContent = localC
}
function limpar(){
    localC = 0
    lembrete.style.backgroundColor = ''
    lembrete.style.boxShadow = ''
}