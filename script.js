document.addEventListener('DOMContentLoaded', (event) => {
	console.log('DOM fully loaded and parsed');
});

const form = document.getElementById('form');
const feriado = document.getElementById('ocasiao');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	criarCartao();
});

class Cartao {
	constructor() {
		this.cartoes = [];
	}

	addCartao(titulo, texto, figura, fundo, borda, corTexto) {
		this.cartoes.push({ titulo, texto, figura, fundo, borda, corTexto});
		localStorage.setItem("cartoes", JSON.stringify(this.cartoes));
	}
}

const cartao = new Cartao();

function criarCartao() {
	const titulo = document.getElementById("titulo").value;
	const texto = document.getElementById("texto").value;
	const figura = selecionarFigura();
	const fundo = document.getElementById("background").value;
	const borda = document.getElementById("border").value;
	const corTexto = document.getElementById("font-color").value;

	cartao.addCartao(titulo, texto, figura, fundo, borda, corTexto);
	verCartao();
}

function selecionarFigura() {
	let figura = "";

	console.log(feriado.value);
	switch (feriado.value) {
		case "aniversario":
			figura = "./images/aniversario.jpg";
			break;
		case "natal":
			figura = "./images/natal.jpg";
			break;
		case "pascoa":
			figura = "./images/pascoa.jpg";
			break;
		case "dia_dos_pais":
			figura = "./images/dia_dos_pais.jpg";
			break;
		case "dia_das_maes":
			figura = "./images/dia_das_maes.jpg";
			break;
		case "dia_dos_namorados":
			figura = "./images/namorados.jpg";
			break;
		case "dia_das_criancas":
			figura = "./images/dia_da_crianca.jpg";
			break;
		case "dia_da_mulher":
			figura = "./images/dia_da_mulher.jpg";
			break;
		case "ano_novo":
			figura = "./images/ano_novo.jpg";
			break;
	}
	return figura;
}


function verCartao() {
	const cartoes = JSON.parse(localStorage.getItem("cartoes")) || [];
	const container = document.getElementById("Visualizacao");

	if (cartoes.length > 0) {
		container.innerHTML = "";

		cartoes.forEach(cartao => {
			let imagemHTML = cartao.figura ? `<img src="${cartao.figura}" alt="figura" style="max-width: 100%; height: auto;">` : '';
			const cartaoHTML = `
                <div class="list-group-item mb-2 card">
                    <div class="btn-toolbar d-flex flex-column justify-content-center align-items-center" style=" background-color: ${cartao.fundo}; border: 2px solid ${cartao.borda}">
						<h3>${cartao.titulo}</h3>
						${imagemHTML}
                        <p>${cartao.texto}</p>
                    </div>
                </div>
            `;
			container.innerHTML += cartaoHTML;
		});

		container.parentNode.style.display = "block"; // Exibe a div que contém os cartões
	} else {
		container.parentNode.style.display = "none"; // Oculta a div que contém os cartões
	}
}
