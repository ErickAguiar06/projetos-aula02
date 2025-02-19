//Enviar os dados do formulário para o servidor
const cadastro = document.getElementById('cadastro');
cadastro.addEventListener('submit', (event) => {
    event.preventDefault();
    const corpo = {
        data: cadastro.data.value,
        nome: cadastro.nome.value,
        email: cadastro.email.value,
        feedback: cadastro.feedback.value
    };
    fetch('http://localhost:3000/feedbacks', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(corpo)
    })
        .then(response => response.status)
        .then(status => {
            if (status === 201) {
                msg3('Feedbacks enviados com sucesso');
            } else {
                msg3('Erro ao enviar feedbacks');
            }
        });
});

//Receber os dados do servidor e exibir na tabela
fetch('http://localhost:3000/feedbacks')
    .then(response => response.json())
    .then(feedbacks => {
        const tabela = document.getElementById('feedbacks');
        feedbacks.forEach((feedback) => {
            console.log (feedback)
            const linha = document.createElement('tr');
            linha.innerHTML = `
            <td data-label="Id:">${feedback.feedback_id}</td>
             <td data-label="Data:" contenteditable="true">${new Date(feedback.data).toLocaleDateString('pt-BR')}</td>
            <td data-label="Nome:" contenteditable="true">${feedback.nome}</td>
            <td data-label="Email:" contenteditable="true">${feedback.email}</td>
            <td data-label="Feedback:" contenteditable="true">${feedback.feedback}</td>
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