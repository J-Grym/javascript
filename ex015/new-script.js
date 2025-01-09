data = new Date()
ano = data.getFullYear()
entrada = document.getElementById('dtano')
const res = document.getElementById('res')

function verificar(){
    if (entrada.value == 0 || entrada.value < 1900){
        alert('[ERRO!] Ano inválido.')
    } else if (entrada.value > ano){
        alert('[ERRO!] Ano não existe.')
    } else {
        idade = ano - Number(entrada.value)
        genero = document.getElementsByName('sexo')
        img = document.createElement('img')
        if (genero[0].checked){
            sexo = 'homem'
            if (idade >= 0 && idade <= 10){
                img.setAttribute('src', 'bebem.png')
            } else if (idade > 10 && idade < 20){
                img.setAttribute('src', 'jovemm.png')
            } else if (idade > 20 && idade < 50){
                img.setAttribute('src', 'adulto.png')
            } else {
                img.setAttribute('src', 'idoso.png')
            }
        } else if (genero[1].checked){
            sexo = 'mulher'
            if (idade >=0 && idade <=10){
                img.setAttribute('src', 'bebef.png')
            } else if (idade > 10 && idade < 20){
                img.setAttribute('src', 'jovemf.png')
            } else if (idade > 20 && idade < 50){
                img.setAttribute('src', 'adulta.png')
            } else {
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.innerHTML = `Você é ${sexo} e tem ${idade} anos.`
        res.appendChild(img)
    }
}