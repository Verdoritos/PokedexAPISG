 async function fetchFirstGenPokemonCards() {
    try {
    // Fazendo uma requisição GET para a API
    const response = await fetch('https://api.pokemontcg.io/v2/cards?q=set.id:base1');
    const data = await response.json();

    // Verifica se há algum erro na resposta
    if (data.error) {
        throw new Error(data.error);
    }

    // Itera sobre todas as cartas retornadas e exibe cada uma
    data.data.forEach(card => {
        // Cria uma div para cada carta
        const cardDiv = document.createElement('div');
        cardDiv.className = 'cartas';

        // Cria um elemento de imagem para a carta e define sua propriedade src para a URL da imagem
        const img = document.createElement('img');
        img.src = card.images.small;

        // Adiciona a imagem à div da carta
        cardDiv.appendChild(img);

        // Adiciona a div da carta à div com id 'cards'
        document.getElementById('container').appendChild(cardDiv);
    });
    } catch (error) {
    console.error('Ocorreu um erro:', error);
    }
}

// Chamando a função fetchFirstGenPokemonCards para iniciar o processo de busca e exibição das cartas da primeira geração
fetchFirstGenPokemonCards();
         