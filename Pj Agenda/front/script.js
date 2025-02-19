//Enviar os dados do formulário para o servidor
const cadastro = document.getElementById('cadastro');
cadastro.addEventListener('submit', (event) => {
    event.preventDefault();
    const corpo = {
        telefone: cadastro.telefone.value,
        nome: cadastro.nome.value,
        obs: cadastro.obs.value
    };
    fetch('http://localhost:3000/telefones', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(corpo)
    })
        .then(response => response.status)
        .then(status => {
            if (status === 201) {
                msg3('Telefones cadastrado com sucesso');
            } else {
                msg3('Erro ao cadastrar Telefones');
            }
        });
});

//Receber os dados do servidor e exibir na tabela
fetch('http://localhost:3000/telefones')
    .then(response => response.json())
    .then(telefones => {
        const tabela = document.getElementById('telefones');
        telefones.forEach((telefone) => {
            const linha = document.createElement('tr');
            linha.innerHTML = `
            <td data-label="Id:">${telefone.telefone_id}</td>
            <td data-label="Telefone:" contenteditable="true">${telefone.telefone}</td>
            <td data-label="Nome:" contenteditable="true">${telefone.nome}</td>
            <td data-label="Observação:" contenteditable="true">${telefone.obs}</td>
            <td><button onclick="alterar(this)">*</button><button onclick="excluir(${telefone.telefone_id})">-</button></td>
        `;
        tabela.appendChild(linha);
        });
    });

//Função que edita um cliente enviando o ID e os dados para o servidor



//Função para exibir mensagem por 3 seg.
function msg3(mensagem){
    msg = document.getElementById('msg');
    msg.innerHTML = mensagem

    setTimeout(() => {
        window.location.reload();
    }, 1500);
}