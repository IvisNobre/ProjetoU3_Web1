let veiculos = [];

//CLASSE MODELO DE VEÍCULOS
class Veiculo{
    constructor(marca, modelo, anoFabricacao, cor, tipo, quilometragem, numeroPortas, imagem){
    this.marca = marca;
    this.modelo = modelo;
    this.anoFabricacao = anoFabricacao;
    this.cor = cor;
    this.tipo = tipo;
    this.quilometragem = quilometragem;
    this.numeroPortas = numeroPortas;
    }
}

//FUNÇÃO PARA CADASTRAR VEÍCULO
function cadastrarVeiculo(){
    const marca = $("#marca");
    const modelo = $("#modelo");
    const anoFabricacao = $("#anoFabricacao");
    const cor = $("#cor");
    const tipo = $("#tipo");
    const quilometragem = $("#quilometragem");
    const numeroPortas = $("#numeroPortas");

    if (marca.val() === '' || modelo.val() === '' || anoFabricacao.val() === '' || cor.val === '' || tipo.val() === '' || quilometragem.val() === '' || numeroPortas.val() === '') {
        alert("Todos os campos devem ser preenchidos.");
        return;
    }
    
    let veiculo = new Veiculo(marca.val(), modelo.val(), anoFabricacao.val(), cor.val(), tipo.val(), quilometragem.val(), numeroPortas.val());

    veiculos.push(veiculo);

    alert("Veículo cadastrado com sucesso!");
    $("#marca, #modelo, #anoFabricacao, #cor, #tipo, #quilometragem, #numeroPortas").val("");

}

$(document).ready(function () {
    $("#btn-cadastrar").click(cadastrarVeiculo); // Chama a função ao clicar no botão
    //console.log(veiculos);
});
