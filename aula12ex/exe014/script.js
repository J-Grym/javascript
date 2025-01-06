function carregar(){
    msg = document.getElementById('msg')
    img = document.getElementById('imagem')
    data = new Date()
    hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = 'imagem/bomdia.png'
        document.body.style.background = '#49A6EB'
    } else if (hora >= 12 && hora < 18) {
        //boa tarde
        img.src = 'imagem/boatarde.png'
        document.body.style.background = '#F1CA7F'
    } else {
        //boa noite
        img.src = 'imagem/boanoite.png'
        document.body.style.background = '#584066'
    }
}

