let display = document.getElementById('display')
const numeros = document.querySelectorAll('[id*=clique]')
let operando2 = document.getElementById('operando2')
let lembrete = document.getElementById('lembrete')
let gatilho
let numeroAnterior
let operador
let localC

const insert = (num) => { if (display.textContent == ''){ display.textContent = ''}else if(gatilho == false){display.textContent = num , gatilho = true}else if(gatilho == true){display.textContent += num}}

const memoria = () => { if(display.textContent == ''){ display.textContent = ''} else { localC = display.textContent , display.textContent = 0 , lembrete.style.backgroundColor = 'green' , lembrete.style.boxShadow = '0px 0px 5px green, inset 0px 0px 5px green'}}

const retorne = () => { if(display.textContent == ''){display.textContent = ''} else if(localC == undefined){display.textContent = 0} else {display.textContent = localC}}

const limpar = () => { localC = undefined , lembrete.style.backgroundColor = '' , lembrete.style.boxShadow = ''}

const ponto = (p) => { if(display.textContent == ''){ display.textContent = ''} else { display.textContent += p , gatilho = true }}

const operadores = (oper) => { if(display.textContent == ''){ display.textContent = '' } else if(numeroAnterior == undefined){ numeroAnterior = display.textContent , operador = oper , operando2.textContent = oper , gatilho = false }else{ display.textContent = parseFloat(eval(`${numeroAnterior}${operador}${display.textContent}`)) ,
numeroAnterior = display.textContent , operador = oper , operando2.textContent = oper , gatilho = false }}

const porcent = () => display.textContent = parseFloat(eval(`${numeroAnterior} / 100 * ${display.textContent}`))

const calcular = () => { display.textContent = parseFloat(eval(`${numeroAnterior}${operador}${display.textContent}`)) , numeroAnterior = '' , operador = '' , operando2.textContent = '' , gatilho = false }

const back = () => { if(display.textContent == ''){ display.textContent = ''} else { display = document.getElementById('display').textContent , document.getElementById('display').textContent = display.substring(0, display.length -1)}}

const reset = () => { display.textContent = 0 , operador = '' , operando2.textContent = '' , gatilho = false}

const doisClicks = () => { localC = '' , lembrete = '' , display.textContent = '' , operador = '' , operando2.textContent = '' , gatilho = '' , window.location.reload()}