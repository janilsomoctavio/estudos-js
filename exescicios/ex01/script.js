function carregar() {
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours(); // pega a hora atual

    // Mensagem
    msg.innerHTML = `Agora são ${hora} horas.`;

    // Muda imagem e fundo conforme hora
    if (hora >= 0 && hora < 12) {
        img.src = "img/manha.jpg";
        document.body.style.background = '#e2cd9f';
    } 
    else if (hora >= 12 && hora <= 18) {
        img.src = "img/tarde.jpg";
        document.body.style.background = '#b9856f';
    } 
    else {
        img.src = "img/noite.jpg";
        document.body.style.background = '#070711';
    }
}
