const galeria = document.createElement("section");
galeria.id = "galeria";
galeria.style.display = "flex";
galeria.style.gap = "10px";
for (let i = 1; i <= 3; i++) {
  const img = document.createElement("img");
  img.src = `https://via.placeholder.com/150?text=Image+${i}`;
  img.alt = `Imagem ${i}`;
  galeria.appendChild(img);
}
document.body.appendChild(galeria);
