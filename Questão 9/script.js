const lista = document.querySelector("ul");
const novoItem = document.createElement("li");
novoItem.textContent = "Novo item";
lista.replaceChild(novoItem, lista.lastElementChild);
