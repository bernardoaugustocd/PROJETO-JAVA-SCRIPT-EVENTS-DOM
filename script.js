 function senha() {
    var usuario, senha, mensagem;

    usuario = document.getElementById("usuarios").value;
    senha = document.getElementById("inpSenha").value;
    mensagem = document.getElementById("pMensagem");
    
    if (usuario === "0") {
        mensagem.innerHTML = "Selecione o tipo de usuário";
    }

    

}