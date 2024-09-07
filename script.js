avaScript
function pesquisa() {
    let listaArtistas = document.getElementById("resultados-pesquisa");

    // Obter um índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * dados.length);

    // Acessar o item aleatório
    const artistaAleatorio = dados[indiceAleatorio];

    // Construir o HTML do item
    const htmlArtista = `
        <div class="item-resultado">
            <h2>
                <a href="#" target="_blank">${artistaAleatorio.nome}</a>
            </h2>
            <p class="descricao-meta">${artistaAleatorio.descricao}</p>
            <a href="${artistaAleatorio.linkComplemento}" target="_blank">Mais informações</a>
        </div>
    `;

    // Atualizar o HTML da lista
    listaArtistas.innerHTML = htmlArtista;
};