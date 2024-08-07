const btn = document.getElementById("send-btn");


btn.addEventListener("click", (e) => {
    e.preventDefault;
    abrirWhatsapp();
})

function abrirWhatsapp() {
    let nome = document.getElementById("nome").value;
    let telefone = document.getElementById("telefone").value;
    let email = document.getElementById("email").value;
    let msg = document.getElementById("msg").value;
    let url = "https://wa.me/5516997260888?text=" // Seu numero
      + "*Formulário de Contato*" + "%0a" // Mensagem personalizada
      + "%0a" // Quebra de linha
      + "*Nome*: " + nome + "%0a" // Dados do formulário
      + "*Telefone*: " + telefone + "%0a"
      + "*E-mail*: " + email + "%0a"
      + "*Mensagem*: " + msg;
    window.open(url, '_blank').focus();
}

