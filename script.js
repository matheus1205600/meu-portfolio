// Lista de projetos (Array de Objetos)
const meusProjetos = [
    {
        titulo: "Página de Captura",
        descricao: "Site feito com HTML e CSS.",
        link: "https://github.com"
    },
    {
        titulo: "Calculadora JS",
        descricao: "Lógica de programação pura.",
        link: "https://github.com"
    }
];

// Seleciona onde os projetos vão aparecer
const container = document.getElementById('lista-projetos');

// Cria os cards na tela
meusProjetos.forEach(projeto => {
    const card = document.createElement('div');
    card.className = 'card-projeto';
    card.innerHTML = `
        <h3>${projeto.titulo}</h3>
        <p>${projeto.descricao}</p>
        <a href="${projeto.link}" target="_blank">Ver mais</a>
    `;
    container.appendChild(card);
});