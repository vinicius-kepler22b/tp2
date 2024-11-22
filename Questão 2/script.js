document.getElementById("insert-btn").addEventListener("click", () => {
  const paragraph = document.createElement("p");
  paragraph.innerHTML = "Eu adoro café. Também gosto de pizzas.";
  paragraph.style.backgroundColor = "yellow";
  paragraph.style.color = "blue";
  document.body.appendChild(paragraph);
});
