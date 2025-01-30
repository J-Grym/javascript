let display = document.getElementById('display')
let sinal = false
let lembrete = document.getElementById('lembrete')
let memo = []

function insert(num){
    display.textContent += num
    sinal = false
}
function operadores(oper){
    if (sinal){
        display.textContent = oper
    } else {
        sinal = true
        display.textContent += oper
        
    }
}
function apagar(){
    display.textContent = ''
    lembrete.style.backgroundColor = ''
}
function calcular(){
    let display = document.getElementById('display').textContent
    document.getElementById('display').textContent = eval(display)
    display = Number(display.value)
}
function back(){
    let display = document.getElementById('display').textContent
    document.getElementById('display').textContent = display.substring(0, display.length -1)
}
function limpar(){
    memo = []
    lembrete.style.backgroundColor = ''
}
function memoria(){
    let novoNumero = document.getElementById('display').textContent
    memo.push(novoNumero)
    lembrete.style.backgroundColor = 'green'
    display.textContent = ''
}
function retorne(){
    display.textContent += memo.toString()
}