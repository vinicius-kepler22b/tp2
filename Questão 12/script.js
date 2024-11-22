const button = document.createElement("button");
button.textContent = "Inserir";
button.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = "Nova entrada";
  document.getElementById("lista").appendChild(li);
});
document.body.appendChild(button);
