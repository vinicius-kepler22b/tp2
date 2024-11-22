const ul = document.createElement("ul");
for (let i = 1; i <= 4; i++) {
  const li = document.createElement("li");
  li.textContent = `Item ${i}`;
  li.style.backgroundColor = "#f0f0f0";
  li.style.color = "#333";
  li.style.fontFamily = "Arial, sans-serif";
  li.style.border = "1px solid #ccc";
  li.style.margin = "5px";
  li.style.padding = "5px";
  ul.appendChild(li);
}
document.body.appendChild(ul);
