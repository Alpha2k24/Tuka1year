 // Função para verificar o código de acesso
 function verificarCodigo() {
    const codigo = document.getElementById('codigoAcesso').value;
    const codigoCorreto = "123456"; // Aqui você coloca o código correto

    // Verifica se o código inserido é o correto
    if (codigo === codigoCorreto) {
        // Armazena no localStorage que o usuário tem acesso
        localStorage.setItem('acessoPermitido', 'true');
        // Redireciona para a página principal
        window.location.href = "https://alpha2k24.github.io/Tuka1year/";
    } else {
        alert('Código incorreto!');
    }
}
