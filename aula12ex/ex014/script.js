function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
  
    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = 'manha-250.png'
        document.body.style.background = '#fcd8a5'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE
        img.src = 'tarde-250.png'
        document.body.style.background = '#cc7d5f'
    } else {
        //BOA NOITE
        img.src = 'noite-250.png'
        document.body.style.background = '#322536ff'
    }
}
