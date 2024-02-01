const imagemVisualizacao = document.getElementById('imagem-visualizacao');
const opcaoImagemSelecionada = document.querySelectorAll('[name="opcao-imagem"]');
const imgMiniatura = document.querySelectorAll('[name="opcao-imagem"] + label > img');
const opcaoTamanhoSelecionada = document.querySelectorAll('[name="opcao-tamanho"]');
const opcaoCorSelecionada = document.querySelectorAll('[name="opcao-cor"]');
const tituloProduto = document.getElementById('titulo-produto');
const tituloCor = document.getElementById('nome-cor-selecionada');

const verdeCipreste = {
    nome: 'Verde-cipreste',
    pasta: 'imagens-verde-cipreste'
};

const azulInverno = {
    nome: 'Azul-inverno',
    pasta: 'imagens-azul-inverno'
};

const meiaNoite = {
    nome: 'Meia-noite',
    pasta: 'imagens-meia-noite'
};

const estelar = {
    nome: 'Estelar',
    pasta: 'imagens-estelar'
};

const rosaClaro = {
    nome: 'Rosa-claro',
    pasta: 'imagens-rosa-claro'
};

const opcoesCores = [verdeCipreste, azulInverno ,meiaNoite ,estelar ,rosaClaro];
const opcoesTamanho = ['41 mm', '45 mm'];

let imagemSelecionada = 1;
let tamanhoSelecionado = 1;
let corSelecionada = 1;



function trocarImagem () {
    const idOpcaoSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id;

    imagemSelecionada = idOpcaoSelecionada.charAt(0);
    imagemVisualizacao.src = imagemVisualizacao.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].pasta}/imagem-${imagemSelecionada}.jpeg`;
};

opcaoImagemSelecionada.forEach(element => {
    element.addEventListener("click", trocarImagem);
});

function trocartamanho () {
    const idOpcaoSelecionada = document.querySelector('[name="opcao-tamanho"]:checked').id;
    tamanhoSelecionado = idOpcaoSelecionada.charAt(0);
    
    tituloProduto.innerText = `Pulseira loop esportiva ${opcoesCores[corSelecionada].nome} para caixa de ${opcoesTamanho[tamanhoSelecionado]}`
    
    if(opcoesTamanho[tamanhoSelecionado] === '41 mm') {
        imagemVisualizacao.classList.add('caixa-pequena');
        
    } else {
        imagemVisualizacao.classList.remove('caixa-pequena');
    }
}

opcaoTamanhoSelecionada.forEach(element => {
    element.addEventListener("click", trocartamanho);
});

function trocarCor () {
    const idOpcaoSelecionada = document.querySelector('[name="opcao-cor"]:checked').id;
    corSelecionada =idOpcaoSelecionada.charAt(0);

    tituloProduto.innerText = `Pulseira loop esportiva ${opcoesCores[corSelecionada].nome} para caixa de ${opcoesTamanho[tamanhoSelecionado]}`;
    tituloCor.innerText = `Cor - ${opcoesCores[corSelecionada].nome}`;
    imagemVisualizacao.src = imagemVisualizacao.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].pasta}/imagem-${imagemSelecionada}.jpeg`;
    
    imgMiniatura.forEach(element => {
        element.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].pasta}/imagem-${element.id.charAt(0)}.jpeg`;
    });
}

opcaoCorSelecionada.forEach(element => {
    element.addEventListener("click", trocarCor);
});
