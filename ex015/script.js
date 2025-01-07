function verificar() {
    data = new Date()
    ano = data.getFullYear()
    fano = document.getElementById('txtano')
    res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO!] Verifique os dados e tente novamente.')
    } else {
        fsex = document.getElementsByName('radsex')
        idade = ano - Number(fano.value)
        gênero = ``
        img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex [0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'bebem.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovem.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src','adulto.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idoso.png')
            }
        } else if (fsex [1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'bebef.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovemf.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'adulta.png')
            } else {
                //Idosa
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos ${gênero} com ${idade} anos.</p>`
        res.appendChild(img)
    }
}