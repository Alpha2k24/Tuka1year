document.getElementById('acesso-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const codigo = document.getElementById('codigo').value;
    const codigoCorreto = '12345'; // Substitua pelo código correto que você quer usar

    if (codigo === codigoCorreto) {
        // Redireciona para o projeto principal (por exemplo, tela principal do projeto)
        window.location.href = 'https://alpha2k24.github.io/Tuka1year/'; // Substitua 'index.html' pela sua página principal
    } else {
        // Mostra uma mensagem de erro se o código estiver incorreto
        document.getElementById('erro').style.display = 'block';
    }
});
