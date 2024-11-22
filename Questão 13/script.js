document.getElementById("modal").classList.add("hide");

document.querySelector("button").addEventListener("click", () => {
  document.getElementById("modal").classList.remove("hide");
});

document.getElementById("close").addEventListener("click", () => {
  document.getElementById("modal").classList.add("hide");
});
