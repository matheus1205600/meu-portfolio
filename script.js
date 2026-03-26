// Array de objetos contendo os projetos (Exigência da UAPI)
const meusProjetos = [
    {
        titulo: "Projeto Landing Page",
        descricao: "Página de conversão feita com HTML e CSS puro.",
        link: "[https://github.com/seu-usuario/projeto-1](https://github.com/seu-usuario/projeto-1)"
    },
    {
        titulo: "Calculadora Interativa",
        descricao: "Lógica matemática utilizando JavaScript ES6.",
        link: "[https://github.com/seu-usuario/projeto-2](https://github.com/seu-usuario/projeto-2)"
    },
    {
        titulo: "E-commerce Estático",
        descricao: "Simulação de loja virtual com layout em CSS Grid.",
        link: "[https://github.com/seu-usuario/projeto-3](https://github.com/seu-usuario/projeto-3)"
    }
];

const listaProjetos = document.getElementById('lista-projetos');

function renderizarProjetos() {
    if (!listaProjetos) return;
    listaProjetos.innerHTML = "";
    
    meusProjetos.forEach(projeto => {
        const div = document.createElement('div');
        div.className = 'card-projeto';
        div.innerHTML = `
            <h3>${projeto.titulo}</h3>
            <p>${projeto.descricao}</p>
            <a href="${projeto.link}" target="_blank">Ver no GitHub</a>
        `;
        listaProjetos.appendChild(div);
    });
}
