const paragraphs = document.querySelectorAll("p");

paragraphs[0].className = "";

paragraphs[1].classList.remove("texto"); // Remove a classe 'texto'
paragraphs[1].classList.add("fundo"); // Adiciona a classe 'fundo'

paragraphs[2].classList.remove("fundo"); // Remove a classe 'fundo'
paragraphs[2].classList.add("texto"); // Adiciona a classe 'texto'
