let veiculos = [];

console.log(veiculos);

// CLASSE MODELO DE VEÍCULOS
class Veiculo {
    constructor(marca, modelo, anoFabricacao, cor, tipo, quilometragem, numeroPortas, urlImagem) {
        this.marca = marca;
        this.modelo = modelo;
        this.anoFabricacao = anoFabricacao;
        this.cor = cor;
        this.tipo = tipo;
        this.quilometragem = quilometragem;
        this.numeroPortas = numeroPortas;
        this.urlImagem = urlImagem;
    }    
}

//FUNÇÕES DE VALIDAÇÃO
function validarMarcaModelo(valor) {
    const regex = /^[A-Za-zÀ-ÿ\s]{2,50}$/; // Apenas letras e espaços
    return regex.test(valor);
}

function validarAnoFabricacao(valor) {
    const anoAtual = new Date().getFullYear();
    return /^[0-9]{4}$/.test(valor) && valor >= 1900 && valor <= anoAtual;
}

function validarCor(valor) {
    const regex = /^[A-Za-zÀ-ÿ\s]{3,20}$/;
    return regex.test(valor);
}

function validarQuilometragem(valor) {
    return /^[0-9]+(\.[0-9]{1,2})?$/.test(valor) && parseFloat(valor) >= 0;
}

function validarNumeroPortas(valor) {
    return /^[2-5]$/.test(valor);
}


// VALIDAÇÃO DO FORMULÁRIO
function validarFormulario(marca, modelo, anoFabricacao, cor, tipo, quilometragem, numeroPortas) {
    if (!validarMarcaModelo(marca)) {
        alert("A marca é inválida. Use apenas letras, entre 2 e 50 caracteres.");
        return false;
    }
    if (!validarMarcaModelo(modelo)) {
        alert("O modelo é inválido. Use apenas letras, entre 2 e 50 caracteres.");
        return false;
    }
    if (!validarAnoFabricacao(anoFabricacao)) {
        alert("O ano de fabricação é inválido. Deve ser entre 1900 e o ano atual.");
        return false;
    }
    if (!validarCor(cor)) {
        alert("A cor é inválida. Use apenas letras, entre 3 e 20 caracteres.");
        return false;
    }
    if (!validarQuilometragem(quilometragem)) {
        alert("A quilometragem é inválida. Deve ser um número positivo.");
        return false;
    }
    if (!validarNumeroPortas(numeroPortas)) {
        alert("O número de portas é inválido. Deve estar entre 2 e 5.");
        return false;
    }
    return true;
}

// FUNÇÃO PARA CADASTRAR VEÍCULO
function cadastrarVeiculo() {
    
    const marca = $("#marca").val();
    const modelo = $("#modelo").val();
    const anoFabricacao = $("#anoFabricacao").val();
    const cor = $("#cor").val();
    const tipo = $("#tipo").val();
    const quilometragem = parseFloat($("#quilometragem").val());
    const numeroPortas = $("#numeroPortas").val();
    const urlImagem = $("#urlImagem").val();

    if (
        marca === '' || 
        modelo === '' || 
        anoFabricacao === '' || 
        cor === '' || 
        tipo === '' || 
        quilometragem === '' || 
        numeroPortas === '' ||
        urlImagem === ''
    ) {
        alert("Todos os campos devem ser preenchidos.");
        console.log(veiculos);
        return;
    }

    //Verificando se todos os campos estão prenchidos corretamente
    if (!validarFormulario(marca, modelo, anoFabricacao, cor, tipo, quilometragem, numeroPortas)) {
        return false;
    }    

    // Verifica se todos os campos foram preenchidos


    // Cria um novo veículo
    const veiculo = new Veiculo( marca, modelo, anoFabricacao, cor, tipo, quilometragem, numeroPortas, urlImagem);

    veiculos.push(veiculo);
    localStorage.setItem('veiculos', JSON.stringify(veiculos));

    alert("Veículo cadastrado com sucesso!");
    console.log(veiculos);

    // Limpa os campos do formulário
    $("#marca, #modelo, #anoFabricacao, #cor, #tipo, #quilometragem, #numeroPortas").val("");
}

// Ao carregar a página, recupera os veículos salvos no localStorage
$(document).ready(function () {
    try {
        const veiculosSalvos = localStorage.getItem('veiculos');
        if (veiculosSalvos) {
            veiculos = JSON.parse(veiculosSalvos); // Tenta fazer o parse do JSON.
        }
    } catch (e) {
        console.error("Erro ao fazer o parse do JSON armazenado:", e);
    }
    $("#btn-cadastrar").click(cadastrarVeiculo);
    console.log(veiculos);
});

//FUNÇÕES AUXILIARES


