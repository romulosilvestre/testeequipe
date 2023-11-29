const form = document.getElementById("cadastroForm");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const senha = document.getElementById("senha").value;
    const confirmarSenha = document.getElementById("confirmarSenha").value;

    if (senha !== confirmarSenha) {
        alert("As senhas não coincidem!");
    } else {
        // Envie os dados do formulário para o servidor ou execute outras ações necessárias
        // Aqui você pode usar AJAX ou qualquer outra abordagem para enviar os dados
        alert("Cadastro realizado com sucesso!");
        form.reset(); // Limpa os campos do formulário
    }
});
