const Form = document.getElementById('form');
let figura = "";
let feriado = document.getElementById('ocasiao');

Form.addEventListener('submit', (e) => {
    e.preventDefault();
    criarCartao();    
    });
let storage = localStorage;

function criarCartao() {
    let cartao = document.getElementById("cartao").value
    let texto = document.getElementById("Texto").value
    let titulo = document.getElementById("titulo").value

    if (cartao !== "" && Texto !== "") {
        projetos.addcartao(cartao, Texto)
        document.getElementById("cartao").setAttribute("class", "")
        document.getElementById("texto").setAttribute("class", "")
        document.getElementById("cartao").value = ""
        document.getElementById("texto").value = ""
    }
    if (cartao === "") {
        document.getElementById("cartao").setAttribute("class", " ")
        document.getElementById("validarCartao").innerHTML = 'A descrição da cartao não pode estar vazia'
    }
    if (texto === "") {
        document.getElementById("texto").setAttribute("class", " ")
        document.getElementById("validartexto").innerHTML = 'O texto não pode estar vazio'
    }
    if (titulo === "") {
        document.getElementById("titulo").setAttribute("class", " ")
        document.getElementById("validartitulo").innerHTML = 'O titulo não pode estar vazio'
    }
}

function mostrarCartao () {
    let cartao = projetos.getcartao()
    let cartaoHtml = ""
    for (let i = 0; i < cartao.length; i++) {
        cartaoHtml += `
        <div class="cartao">
            <h3>${cartao[i].cartao}</h3>
            <p>${cartao[i].texto}</p>

        </div>
        `
    }
    document.getElementById("cartoes").innerHTML = cartaoHtml
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
    }
}