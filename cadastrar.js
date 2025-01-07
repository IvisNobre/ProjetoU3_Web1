let veiculos = [];

// CLASSE MODELO DE VEÍCULOS
class Veiculo {
    constructor(id, marca, modelo, anoFabricacao, cor, tipo, quilometragem, numeroPortas) {
        this.marca = marca;
        this.modelo = modelo;
        this.anoFabricacao = anoFabricacao;
        this.cor = cor;
        this.tipo = tipo;
        this.quilometragem = quilometragem;
        this.numeroPortas = numeroPortas;
    }
}

// FUNÇÃO PARA CADASTRAR VEÍCULO
function cadastrarVeiculo() {
    const marca = $("#marca");
    const modelo = $("#modelo");
    const anoFabricacao = $("#anoFabricacao");
    const cor = $("#cor");
    const tipo = $("#tipo");
    const quilometragem = $("#quilometragem");
    const numeroPortas = $("#numeroPortas");

    // Verifica se todos os campos foram preenchidos
    if (
        marca.val() === '' || 
        modelo.val() === '' || 
        anoFabricacao.val() === '' || 
        cor.val() === '' || 
        tipo.val() === '' || 
        quilometragem.val() === '' || 
        numeroPortas.val() === ''
    ) {
        alert("Todos os campos devem ser preenchidos.");
        console.log(veiculos);
        return;
    }

 

    // Cria um novo veículo
    let veiculo = new Veiculo(
        marca.val(), 
        modelo.val(), 
        anoFabricacao.val(), 
        cor.val(), 
        tipo.val(), 
        quilometragem.val(), 
        numeroPortas.val()
    );

    veiculos.push(veiculo);
    localStorage.setItem('veiculos', JSON.stringify(veiculos));

    alert("Veículo cadastrado com sucesso!");
    console.log(veiculos);

    // Limpa os campos do formulário
    $("#marca, #modelo, #anoFabricacao, #cor, #tipo, #quilometragem, #numeroPortas").val("");
}

// Ao carregar a página, recupera os veículos salvos no localStorage
$(document).ready(function () {
    const veiculosSalvos = localStorage.getItem('veiculos');
    if (veiculosSalvos) {
        veiculos = JSON.parse(veiculosSalvos);
    }

    $("#btn-cadastrar").click(cadastrarVeiculo); // Chama a função ao clicar no botão
    console.log(veiculos);
});
