document.addEventListener("DOMContentLoaded", function () {
    const produtos = [
        { nome: "V250 Dourado", descricao: "", imagem: "imagens/250_dourado.png", preco: "R$ 135,00" },
        { nome: "V250 Black", descricao: "", imagem: "imagens/v250_black.png", preco: "R$135,00" },
        { nome: "V80", descricao: "", imagem: "imagens/V80.png", preco: "R$ 100,00" },
        { nome: "V150", descricao: "", imagem: "imagens/v150.png", preco: "R$ 120,00" },
    ];

    let currentIndex = 0; // Começa no primeiro item

    function carregarProdutos() {
        const slides = document.getElementById("slides");
        slides.innerHTML = ""; // Limpa antes de carregar os produtos

        produtos.forEach(produto => {
            const div = document.createElement("div");
            div.classList.add("produto");
            div.innerHTML = `
                <img src="${produto.imagem}" alt="${produto.nome}">
                <h2>${produto.nome}</h2>
                <p>${produto.descricao}</p>
                <span class="preco">${produto.preco}</span>
            `;
            slides.appendChild(div);
        });

        updateCarousel(); // Atualiza a posição do carrossel
    }

    function updateCarousel() {
        const slides = document.getElementById("slides");
        const produto = document.querySelector(".produto");

        if (!produto) return; // Impede erro se os produtos ainda não carregaram

        const produtoWidth = produto.offsetWidth + 20; // Largura do produto + margem
        const maxIndex = produtos.length - Math.floor(document.querySelector(".carousel").offsetWidth / produtoWidth); // Cálculo do máximo índice

        // Garante que currentIndex não ultrapasse o limite
        currentIndex = Math.max(0, Math.min(currentIndex, maxIndex));

        // Aplica a transformação para mover o carrossel
        slides.style.transform = `translateX(${-currentIndex * produtoWidth}px)`;
    }

    function scrollLeft() {
        console.log("Botão Esquerdo Clicado!"); // Verifique no console se isso aparece
        if (currentIndex > 0) {
            currentIndex--; // Move o índice para a esquerda
            updateCarousel(); // Atualiza a posição do carrossel
        }
    }

    function scrollRight() {
        console.log("Botão Direito Clicado!"); // Verifique no console se isso aparece
        const slides = document.getElementById("slides");
        const produto = document.querySelector(".produto");

        if (!produto) return; // Impede erro se os produtos ainda não carregaram

        const produtoWidth = produto.offsetWidth + 20;
        const maxIndex = produtos.length - Math.floor(document.querySelector(".carousel").offsetWidth / produtoWidth); // Cálculo do máximo índice

        if (currentIndex < maxIndex) {
            currentIndex++; // Move o índice para a direita
            updateCarousel(); // Atualiza a posição do carrossel
        }
    }

    // Carrega os produtos ao iniciar
    carregarProdutos();

    // Adicionando event listeners aos botões
    const leftButton = document.querySelector(".scroll-btn.left");
    const rightButton = document.querySelector(".scroll-btn.right");

    leftButton.addEventListener("click", scrollLeft);
    rightButton.addEventListener("click", scrollRight);
});