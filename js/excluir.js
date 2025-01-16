let veiculos = [];


function carregarVeiculos() {
    const veiculosSalvos = localStorage.getItem('veiculos');
    veiculos = veiculosSalvos ? JSON.parse(veiculosSalvos) : [];
    const listaVeiculos = document.getElementById("vehicle-list");
    listaVeiculos.innerHTML = "";

    if (veiculos.length === 0) {
        listaVeiculos.innerHTML = `
            <div class="col-12">
                <p class="text-center text-muted">Nenhum veículo cadastrado.</p>
            </div>
        `;
        return;
    }

    veiculos.forEach((veiculo, index) => {
        const col = document.createElement("div");
        col.className = "col-md-4 mb-4";
        col.innerHTML = `
            <div class="card h-100">
                <img src="${veiculo.urlImagem}" class="card-img-top" alt="${veiculo.modelo}">
                <div class="card-body">
                    <h5 class="card-title text-primary">${veiculo.marca} - ${veiculo.modelo}</h5>
                    <hr>
                    <p class="card-text"><strong>Ano:</strong> ${veiculo.anoFabricacao}</p>
                    <p class="card-text"><strong>Cor:</strong> ${veiculo.cor}</p>
                    <p class="card-text"><strong>Tipo:</strong> ${veiculo.tipo}</p>
                    <p class="card-text"><strong>Quilometragem:</strong> ${veiculo.quilometragem} km</p>
                    <p class="card-text"><strong>Portas:</strong> ${veiculo.numeroPortas}</p>
                    <button class="btn btn-danger w-100 mt-3" onclick="excluirVeiculo(${index})">Excluir</button>
                </div>
            </div>
        `;
        listaVeiculos.appendChild(col);
    });
}


function excluirVeiculo(index) {
    veiculos.splice(index, 1); 
    localStorage.setItem('veiculos', JSON.stringify(veiculos)); 
    carregarVeiculos(); 
    console.log(veiculos);
}


document.addEventListener("DOMContentLoaded", carregarVeiculos);
