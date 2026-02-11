 function senha() {
    var usuario, senha, mensagem;

    usuario = document.getElementById("usuarios").value;
    senha = document.getElementById("inpSenha").value;
    mensagem = document.getElementById("pMensagem");
    
    if (usuario === "0") {
        mensagem.innerHTML = "Selecione o tipo de usuário";
    }

    if (usuario === "1" && senha === "123") {
        alert("Você será direcionado para a página de vendas");
        window.location.href = "vendas.html";
    }

    else if (usuario === "2" && senha === "456") {
        alert("Você será direcionado para a página de estoque");
        window.location.href = "estoque.html";
    }

    else if (usuario === "3" && senha === "789") {
        alert("Você será direcionado para a página adiministrativo");
        window.location.href = "adiministrativo.html";
    }

    else {
        mensagem.innerHTML = "Usuário e/ou senha inválidos. Tente novamente.";
    }

}

document.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    senha();
  }
});