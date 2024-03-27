// async function listapoke() {
//     const container = document.getElementById('container');
  
//     for (var i = 1; i <= 151; i++) {
//       const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
  
//       try {
//         const resposta = await fetch(url);
//         const pokemon = await resposta.json();

        
//       // Convertendo o nome do Pokémon para maiúsculas
//       const nomeMaiusculo = pokemon.name.toUpperCase();
  
//         // Criar o elemento div para o card
//         const card = document.createElement('div');
//         card.className = 'card';
  
//         // Adicionar conteúdo ao card
//         card.innerHTML = `
//           <div class="divImg">
//             <img src="${pokemon.sprites.front_default}" class="card-img">
//           </div>
//           <div class="card-content">
//             <h3>${i} - ${nomeMaiusculo}</h3>
//             <p class="tipo">Tipo: ${pokemon.types.map(type => type.type.name).join(', ')}</p>
//             <a href="#">Stats completo</a>
//           </div>
//         `;
  
//         // Adicionar o card ao container
//         container.appendChild(card);
//       } catch (erro) {
//         console.error('Erro ao buscar Pokémon:', erro);
//       }
//     }
//   }
  
//   listapoke();


async function listapoke() {
    const container = document.getElementById('container');
  
    for (var i = 1; i <= 151; i++) {
      const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
  
      try {
        const resposta = await fetch(url);
        const pokemon = await resposta.json();
  
        // Convertendo o nome do Pokémon para maiúsculas
        const nomeMaiusculo = pokemon.name.toUpperCase();
  
        // Criar o elemento div para o card
        const card = document.createElement('div');
        card.className = 'card';
  
        // Adicionar conteúdo ao card
        card.innerHTML = `
          <a class="ignoreCSS" style="text-decoration: none" " href="#">
          <div class="divImg">
            <img src="${pokemon.sprites.front_default}" class="card-img">
          </div>
          <div class="card-content">
            <h3>${i} - ${nomeMaiusculo}</h3>
          </div>
          </a>
        `;
  
        // Adicionar uma div para cada tipo do Pokémon dentro do card-content
        pokemon.types.forEach(type => {
          const tipoDiv = document.createElement('div');
          tipoDiv.textContent = type.type.name.toUpperCase();
          tipoDiv.classList.add('tipo', type.type.name);
          card.querySelector('.card-content').appendChild(tipoDiv);
        });
  
        // Adicionar o card ao container
        container.appendChild(card);
      } catch (erro) {
        console.error('Erro ao buscar Pokémon:', erro);
      }
    }
  }
  
  listapoke();
  
  