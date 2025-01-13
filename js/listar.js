// Função para carregar os dados do JSON
function carregarCards() {
    fetch('db.json') // Carrega o arquivo JSON
        .then(response => response.json())
        .then(carros => {
            const container = document.querySelector("#carros-container");

            // Limpa os cards existentes antes de adicionar os novos
            container.innerHTML = '';

            // Itera sobre os dados e cria os cards
            carros.forEach(carro => {
                const col = document.createElement("div");
                col.classList.add("col-md-4", "mb-4"); // Responsividade do Bootstrap

                const card = `
                    <div class="card" style="width: 100%;">
                        <img class="card-img-top" src="${carro.urlImagem}" alt="${carro.modelo}">
                        <div class="card-body">
                            <h3 class="card-title">${carro.marca} - ${carro.modelo}</h3>
                            <hr>
                            <p><strong>Ano:</strong> ${carro.anoFabricacao}</p>
                            <p><strong>Cor:</strong> ${carro.cor}</p>
                            <p><strong>Tipo:</strong> ${carro.tipo}</p>
                            <p><strong>Quilometragem:</strong> ${carro.quilometragem} km</p>
                            <p><strong>Número de Portas:</strong> ${carro.numeroPortas}</p>
                        </div>
                    </div>
                `;

                col.innerHTML = card;
                container.appendChild(col);
            });
        })
        .catch(error => console.error('Erro:', error));
}

// Chama a função para carregar os cards ao carregar a página
carregarCards();