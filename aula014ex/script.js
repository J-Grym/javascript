function contar(){
  let ini = document.getElementById('txti')
  let fim = document.getElementById('txtf')
  let passo = document.getElementById('txtp')
  let res = document.getElementById('res')

  res.innerHTML = 'Contando...'
  
  if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    alert('[ERRO!]')
  } else {
      let i = Number(ini.value)
      let f = Number(fim.value)
      let p = Number(passo.value)

      for (c = i; c <= f; c += p){
        res.innerHTML += `${c}`
      }
  }
}