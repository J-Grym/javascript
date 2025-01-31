let display = document.getElementById('display')
let sinal = false
let lembrete = document.getElementById('lembrete')
let memo = []
let start = false
let valido = false

function insert(num){
    if (display.textContent == ''){
        start = false
        display.textContent = ''
    }else if(display.textContent == 0){
        start = false
        display.textContent = num
    } else {
        start = true
        sinal = false
        display.textContent += num
    }
}      
function operadores(oper){
    if (display.textContent == ''){
        start = false
        display.textContent = ''
    } else if (sinal){
        display.textContent = oper
    } else {
        sinal = true
        display.textContent += oper
        
    }
}
function doisClicks(){
    display.textContent = ''
    lembrete.style.backgroundColor = ''
    lembrete.style.boxShadow = ''
    memo = []
}
function reset(){
    display.textContent = 0
}
function calcular(){
    let display = document.getElementById('display').textContent
    document.getElementById('display').textContent = eval(display)
}
function back(){
    let display = document.getElementById('display').textContent
    document.getElementById('display').textContent = display.substring(0, display.length -1)
   
}
function limpar(){
    memo = []
    lembrete.style.backgroundColor = ''
    lembrete.style.boxShadow = ''
}
function memoria(){
    let novoNumero = document.getElementById('display').textContent
    memo.push(novoNumero)
    lembrete.style.backgroundColor = 'green'
    lembrete.style.boxShadow = '0px 0px 15px red, inset 0px 0px 15px red'
    display.textContent = 0
}
function retorne(){
    if (display.textContent == 0){
        display.textContent = memo.toString()
    }
}
