
function criarImagensQuadroNegro() {
    const quadro = document.getElementById('quadro-negro');
    quadro.innerHTML = '';
    combinacao.forEach((figura, index) => {
        const img = document.createElement('img');
        img.src = `imagens/${figura}.png`;
        img.alt = figura;
        img.id = `img-${index}`;
        img.classList.add('ajustar-largura'); // Adiciona a classe CSS
        quadro.appendChild(img);
    });
}

function escolherFiguras() {
    const quantidade = document.getElementById('quantidade-figuras').value;
    const checkboxes = document.querySelectorAll('.checkboxes input:checked');
    const figuras = Array.from(checkboxes).map(cb => cb.value);
    combinacao = [];

    for (let i = 0; i < quantidade; i++) {
        const figura = figuras[Math.floor(Math.random() * figuras.length)];
        combinacao.push(figura);
    }
    criarImagensQuadroNegro();
}

function apagarQuadro() {
    document.getElementById('quadro-negro').innerHTML = '';
    combinacao = [];
}

function mostrarCampo() {
    var campo = document.getElementById("campo");
    campo.style.display = (campo.style.display === "none") ? "block" : "none";
    criarImagensQuadroNegro();
}
