// Função para carregar os dados dos veículos armazenados no localStorage
function carregarCards() {
    // Recupera os veículos do localStorage
    const veiculosSalvos = localStorage.getItem('veiculos');
    const veiculos = veiculosSalvos ? JSON.parse(veiculosSalvos) : [];

    const container = document.querySelector("#carros-container");

    // Limpa os cards existentes antes de adicionar os novos
    container.innerHTML = '';

    // Verifica se há veículos cadastrados
    if (veiculos.length === 0) {
        container.innerHTML = `
            <div class="col-12">
                <p class="text-center text-muted">Nenhum veículo cadastrado no momento.</p>
            </div>
        `;
        return;
    }

    // Itera sobre os veículos e cria os cards
    veiculos.forEach(veiculo => {
        const col = document.createElement("div");
        col.classList.add("col-md-4", "mb-4"); // Responsividade com Bootstrap

        const card = `
            <div class="card" style="width: 100%;">
                <img class="card-img-top" src="${veiculo.urlImagem}" alt="${veiculo.modelo}">
                <div class="card-body">
                    <h3 class="card-title">${veiculo.marca} - ${veiculo.modelo}</h3>
                    <hr>
                    <p><strong>Ano:</strong> ${veiculo.anoFabricacao}</p>
                    <p><strong>Cor:</strong> ${veiculo.cor}</p>
                    <p><strong>Tipo:</strong> ${veiculo.tipo}</p>
                    <p><strong>Quilometragem:</strong> ${veiculo.quilometragem} km</p>
                    <p><strong>Número de Portas:</strong> ${veiculo.numeroPortas}</p>
                </div>
            </div>
        `;

        col.innerHTML = card;
        container.appendChild(col);
    });
}

// Chama a função para carregar os cards ao carregar a página
document.addEventListener("DOMContentLoaded", carregarCards);
