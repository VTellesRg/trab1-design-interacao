document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');});
const Form = document.getElementById('form');
let figura = "";
let feriado = document.getElementById('ocasiao');
Form.addEventListener('submit', (e) => {
    e.preventDefault();
    criarCartao();    
});
let storage = localStorage;

function criarCartao () {
    selecionarFigura();
    var texto = document.getElementById("texto").value
    var titulo = document.getElementById("titulo").value
    var figura = document.getElementById("figura").value
    cartao.addcartao(titulo, texto, figura)
    
}
class Cartao {
    cartao = [];
    addcartao(titulo, texto, figura) {
        this.cartao.push({titulo, texto, figura})
        storage.setItem("cartao", JSON.stringify(this.cartao))
    }
}
let cartao = new Cartao();

console.log(cartao);

function validarCartao() {
    let texto = document.getElementById("texto").value
    let titulo = document.getElementById("titulo").value
    let fundo = document.getElementById("fundo").value
    if (texto === "") {
        document.getElementById("texto").setAttribute("class", " ")
        document.getElementById("validartexto").innerHTML = 'O texto não pode estar vazio'
    }
    if (titulo === "") {
        document.getElementById("titulo").setAttribute("class", " ")
        document.getElementById("validartitulo").innerHTML = 'O titulo não pode estar vazio'
    }
    if (fundo === "") {
        document.getElementById("fundo").setAttribute("class", " ")
        document.getElementById("validarfundo").innerHTML = 'O fundo não pode estar vazio'
    }
}


function selecionarFigura() {
    switch (feriado.value) {
        case "aniversario":
            figura = "./images/aniversario.png";
            break;
        case "natal":
            figura = "./images/natal.jpg";
            break;
        case "pascoa":
            figura = "./images/pascoa.jpg";
            break;
        case "dia dos pais":
            figura = "./images/dia_dos_pais.jpg";
            break;
        case "dia das maes":
            figura = "./images/dia_das_maes.jpg";
            break;
        case "dia dos namorados":
            figura = "./images/namorados.jpg";
            break;
        case "dia das crianças":
            figura = "./images/dia_da_crianca.jpg";
            break;
        case "dia da mulher":
            figura = "./images/dia_da_mulher.jpg";
            break;
        case "ano novo":
            figura = "./images/ano_novo.jpg";
            break;
    }
    return figura;
}


function verCartao() {
    let cartao = JSON.parse(localStorage.getItem("cartao"));
    let container = document.getElementById("Visualizacao"); 
    container.innerHTML = "";
    for (let i = 0; i < cartao.length; i++) {
        let cartaoAtual = cartao[i];
        container.innerHTML += `
        <li class="list-group-item mb-2 card">
        <div class=" btn-toolbar justify-content-center ">
            <img src="${cartaoAtual.figura}" alt="figura">
            <h3>${cartaoAtual.titulo}</h3>
            <p>${cartaoAtual.texto}</p>
        </div>
        </li>
        `;
    }

}